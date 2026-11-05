import { SITE } from '@/lib/site';
import { projetos } from '@/lib/projetos';

const BASE = SITE.url;

export default function sitemap() {
  const rotas = ['', '/servicos', '/projetos', '/sobre', '/contato', ...projetos.map((p) => `/projetos/${p.slug}`)];
  return rotas.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : r.startsWith('/projetos/') ? 0.6 : 0.7,
  }));
}
