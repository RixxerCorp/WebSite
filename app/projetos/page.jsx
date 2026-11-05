import ProjetosClient from './ProjetosClient';

export const metadata = {
  title: 'Projetos',
  description:
    'Conheça projetos da Rixxer: portais, sites, aplicativos, sistemas e design gráfico entregues para clientes de São Lourenço e região.',
  alternates: { canonical: '/projetos' },
};

export default function ProjetosPage() {
  return <ProjetosClient />;
}
