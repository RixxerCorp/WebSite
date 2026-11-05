import ContatoClient from './ContatoClient';

export const metadata = {
  title: 'Contato e Orçamento',
  description:
    'Solicite uma proposta sem compromisso. Fale com a Rixxer, software house em São Lourenço - MG, por formulário, e-mail ou WhatsApp.',
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return <ContatoClient />;
}
