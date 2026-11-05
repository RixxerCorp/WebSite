// Extrai nota e total de avaliações de uma resposta do SerpApi (engine google_maps).
// Aceita tanto "place_results" (um único resultado) quanto "local_results" (lista).
export function extrairRatingSerpApi(json, nomeNegocio = 'rixxer') {
  const alvo = nomeNegocio.toLowerCase();
  const candidatos = [];
  if (json?.place_results) candidatos.push(json.place_results);
  if (Array.isArray(json?.local_results)) candidatos.push(...json.local_results);

  const achado = candidatos.find(
    (p) => typeof p?.title === 'string' && p.title.toLowerCase().includes(alvo)
  );
  if (!achado) return null;
  if (typeof achado.rating !== 'number' || typeof achado.reviews !== 'number') return null;
  return { nota: achado.rating, quantidade: achado.reviews };
}
