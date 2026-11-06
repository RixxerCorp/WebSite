import { projetos } from '@/lib/projetos';
import ProjetosClient from './ProjetosClient';

export const metadata = {
  title: 'Projetos',
  description:
    'Conheça projetos da Rixxer: portais, sites, aplicativos, sistemas e design gráfico entregues para clientes de todo o Brasil e do exterior.',
  alternates: { canonical: '/projetos' },
};

export default function ProjetosPage() {
  // Envia ao componente de cliente só o que o cartão precisa (os textos longos ficam na página de detalhe).
  const lista = projetos.map(({ slug, titulo, categoria, cliente, ano, cor, resumo, techs, link, status, capa }) => ({
    slug, titulo, categoria, cliente, ano, cor, resumo, techs,
    capa: capa ?? null,
    // 'instagram' quando o link é de rede social; 'site' quando é um projeto no ar; null quando não há link.
    tipoLink: !link ? null : link.includes('instagram.com') ? 'instagram' : 'site',
    status: status ?? null,
  }));
  return <ProjetosClient projetos={lista} />;
}
