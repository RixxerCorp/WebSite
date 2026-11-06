import { projetos } from '@/lib/projetos';
import ProjetosClient from './ProjetosClient';

export const metadata = {
  title: 'Projetos',
  description:
    'Conheça projetos da Rixxer: portais, sites, aplicativos, sistemas e design gráfico entregues para clientes de São Lourenço e região.',
  alternates: { canonical: '/projetos' },
};

export default function ProjetosPage() {
  // Envia ao componente de cliente só o que o cartão precisa (os textos longos ficam na página de detalhe).
  const lista = projetos.map(({ slug, titulo, categoria, cliente, ano, cor, resumo, techs, link, status }) => ({
    slug, titulo, categoria, cliente, ano, cor, resumo, techs, noAr: Boolean(link), status: status ?? null,
  }));
  return <ProjetosClient projetos={lista} />;
}
