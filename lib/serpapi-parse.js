// Funções puras para ler respostas do SerpApi (engine google_maps_reviews).

function limparTexto(bruto) {
  if (typeof bruto !== 'string') return '';
  let t = bruto;
  // O Google às vezes devolve "(Translated by Google) ... (Original) ...": usa o original.
  const idx = t.search(/\(Original\)/i);
  if (idx !== -1) t = t.slice(idx).replace(/^\(Original\)\s*/i, '');
  t = t.replace(/^\(Translated by Google\)\s*/i, '');
  return t.trim();
}

const PARTICULAS = new Set(['da', 'de', 'do', 'das', 'dos', 'e']);

// Só mexe em nomes escritos todo em minúsculas ou todo em maiúsculas;
// nomes já com capitalização mista ficam como o autor escreveu.
export function ajustarNome(nome) {
  const n = nome.trim().replace(/\s+/g, ' ');
  if (n !== n.toLowerCase() && n !== n.toUpperCase()) return n;
  return n
    .toLowerCase()
    .split(' ')
    .map((w, i) =>
      i > 0 && PARTICULAS.has(w) ? w : w.replace(/(^|[-'’])(\p{L})/gu, (_, a, b) => a + b.toUpperCase())
    )
    .join(' ');
}

function truncar(texto, max = 420) {
  if (texto.length <= max) return texto;
  const corte = texto.slice(0, max);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[.,;:!?\s]+$/, '') + '…';
}

export function extrairDadosSerpApi(json, { max = 6, minChars = 25 } = {}) {
  const info = json?.place_info;
  const rating =
    typeof info?.rating === 'number' && typeof info?.reviews === 'number'
      ? { nota: info.rating, quantidade: info.reviews }
      : null;

  const lista = Array.isArray(json?.reviews) ? json.reviews : [];
  const reviews = lista
    .map((r) => ({
      autor: typeof r?.user?.name === 'string' ? ajustarNome(r.user.name) : '',
      nota: typeof r?.rating === 'number' ? r.rating : 0,
      texto: limparTexto(r?.extracted_snippet?.original ?? r?.snippet),
      data: typeof r?.date === 'string' ? r.date : '',
    }))
    .filter((r) => r.autor && r.nota >= 4 && r.texto.length >= minChars)
    .slice(0, max)
    .map((r) => ({ ...r, texto: truncar(r.texto) }));

  return { rating, reviews };
}
