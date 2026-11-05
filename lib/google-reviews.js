import { SITE } from '@/lib/site';
import { extrairDadosSerpApi } from '@/lib/serpapi-parse';

const UM_DIA = 60 * 60 * 24;

function formatar(nota, quantidade) {
  return { nota, quantidade, notaTexto: nota.toFixed(1).replace('.', ',') };
}

async function ratingViaPlaces(key, placeId) {
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
    engine: 'google_maps_reviews',
    data_id: process.env.SERPAPI_DATA_ID || SITE.googleDataId,
    hl: 'pt-br',
    sort_by: 'newestFirst',
    api_key: key,
  });
  const res = await fetch(`https://serpapi.com/search.json?${params}`, {
    next: { revalidate: UM_DIA },
  });
  if (!res.ok) throw new Error(`SerpApi respondeu ${res.status}`);
  return extrairDadosSerpApi(await res.json());
}

// Nota, total e avaliações recentes do Google, com cache de 24h.
// Qualquer falha ou falta de configuração cai no valor de reserva (lib/site.js)
// e em lista vazia de avaliações (a home então usa os depoimentos fixos).
export async function getGoogleData() {
  let rating = null;
  let reviews = [];
  const placesKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const serpKey = process.env.SERPAPI_API_KEY;

  try {
    if (placesKey && placeId) rating = await ratingViaPlaces(placesKey, placeId);
  } catch (err) {
    console.error('Falha no Google Places:', err);
  }
  try {
    if (serpKey) {
      const serp = await viaSerpApi(serpKey);
      reviews = serp.reviews;
      rating = rating ?? serp.rating;
    }
  } catch (err) {
    console.error('Falha no SerpApi:', err);
  }

  return {
    rating: rating ? formatar(rating.nota, rating.quantidade) : formatar(SITE.avaliacao.nota, SITE.avaliacao.quantidade),
    reviews,
  };
}

export async function getGoogleRating() {
  return (await getGoogleData()).rating;
}
