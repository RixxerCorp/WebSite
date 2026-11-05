import { SITE } from '@/lib/site';

const BASE = SITE.url;

export default function sitemap() {
  const rotas = ['', '/servicos', '/projetos', '/sobre', '/contato'];
  return rotas.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
