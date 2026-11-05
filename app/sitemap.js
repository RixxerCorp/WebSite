const BASE = 'https://www.rixxer.com.br';

export default function sitemap() {
  const rotas = ['', '/servicos', '/projetos', '/sobre', '/contato'];
  return rotas.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
