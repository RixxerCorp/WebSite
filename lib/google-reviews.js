import { SITE } from '@/lib/site';

const UM_DIA = 60 * 60 * 24;

function formatar(nota, quantidade) {
  return {
    nota,
    quantidade,
    notaTexto: nota.toFixed(1).replace('.', ','),
  };
}

// Busca nota e total de avaliações no Google (Places API New), com cache de 24h.
// Se faltar configuração ou a API falhar, devolve o valor de reserva de lib/site.js.
export async function getGoogleRating() {
  const reserva = formatar(SITE.avaliacao.nota, SITE.avaliacao.quantidade);
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return reserva;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
      next: { revalidate: UM_DIA },
    });
    if (!res.ok) {
      console.error('Google Places respondeu', res.status);
      return reserva;
    }
    const data = await res.json();
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') return reserva;
    return formatar(data.rating, data.userRatingCount);
  } catch (err) {
    console.error('Falha ao consultar Google Places', err);
    return reserva;
  }
}
