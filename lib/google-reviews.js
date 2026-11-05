import { SITE } from '@/lib/site';
import { extrairRatingSerpApi } from '@/lib/serpapi-parse';

const UM_DIA = 60 * 60 * 24;

function formatar(nota, quantidade) {
  return {
    nota,
    quantidade,
    notaTexto: nota.toFixed(1).replace('.', ','),
  };
}

async function viaPlaces(key, placeId) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount' },
    next: { revalidate: UM_DIA },
  });
  if (!res.ok) throw new Error(`Google Places respondeu ${res.status}`);
  const data = await res.json();
  if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') return null;
  return { nota: data.rating, quantidade: data.userRatingCount };
}

async function viaSerpApi(key) {
  const params = new URLSearchParams({
    engine: 'google_maps',
    type: 'search',
    q: process.env.SERPAPI_QUERY || `${SITE.nome} ${SITE.endereco.cidade} ${SITE.endereco.uf}`,
    hl: 'pt-br',
    api_key: key,
  });
  const res = await fetch(`https://serpapi.com/search.json?${params}`, {
    next: { revalidate: UM_DIA },
  });
  if (!res.ok) throw new Error(`SerpApi respondeu ${res.status}`);
  return extrairRatingSerpApi(await res.json(), SITE.nome);
}

// Nota e total de avaliações do Google, com cache de 24h.
// Ordem: Google Places (se configurado) → SerpApi (se configurado) → valor de reserva (lib/site.js).
export async function getGoogleRating() {
  const reserva = formatar(SITE.avaliacao.nota, SITE.avaliacao.quantidade);
  const placesKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const serpKey = process.env.SERPAPI_API_KEY;

  try {
    let r = null;
    if (placesKey && placeId) r = await viaPlaces(placesKey, placeId);
    if (!r && serpKey) r = await viaSerpApi(serpKey);
    return r ? formatar(r.nota, r.quantidade) : reserva;
  } catch (err) {
    console.error('Falha ao buscar avaliações do Google:', err);
    return reserva;
  }
}
