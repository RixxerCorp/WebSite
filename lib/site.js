// Fonte única dos dados de contato e reputação da Rixxer.
export const SITE = {
  nome: 'Rixxer',
  url: 'https://www.rixxer.com.br',
  dominio: 'www.rixxer.com.br',
  email: 'contato@rixxer.com.br',
  whatsapps: [
    { numero: '5511926404724', exibicao: '(11) 92640-4724' },
    { numero: '5535984265018', exibicao: '(35) 98426-5018' },
  ],
  endereco: {
    rua: 'R. Santos Dumont, 43 - Centro',
    cidade: 'São Lourenço',
    uf: 'MG',
    cep: '37470-000',
  },
  horario: { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '09:00', fecha: '17:00' },
  redes: {
    instagram: 'https://instagram.com/rixxerbr',
    linkedin: 'https://linkedin.com/company/rixxerbr',
  },
  // Identificador do perfil no Google Maps (vem da URL do Maps, parte "!1s...").
  googleDataId: '0x94cb4ba5854cd717:0x5c347bc7a4a4dfc7',
  // Valor de reserva: usado se a API do Google não estiver configurada ou falhar.
  avaliacao: { nota: 5, quantidade: 18 },
  mapsUrl:
    'https://www.google.com/maps/place/Rixxer/@-14.4095261,-51.31668,4z/data=!3m1!4b1!4m6!3m5!1s0x94cb4ba5854cd717:0x5c347bc7a4a4dfc7!8m2!3d-14.4095262!4d-51.31668!16s%2Fg%2F11rw904lh4?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D',
};

export const whatsappPrincipal = SITE.whatsapps[0];
export const whatsappLink = (numero = whatsappPrincipal.numero) => `https://wa.me/${numero}`;
