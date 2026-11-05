const SERVICOS = [
  'Desenvolvimento Web',
  'Aplicativo Mobile',
  'Sistema Personalizado',
  'Gestão de Redes Sociais',
  'Design Gráfico / UI',
  'SEO & Performance',
  'Outro',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function clean(v, max) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Requisição inválida.' }, { status: 400 });
  }

  // Honeypot: bots preenchem; respondemos sucesso sem enviar nada.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const nome = clean(body.nome, 120);
  const email = clean(body.email, 200);
  const empresa = clean(body.empresa, 120);
  const servico = clean(body.servico, 60);
  const mensagem = clean(body.mensagem, 5000);

  if (!nome || !EMAIL_RE.test(email) || !SERVICOS.includes(servico) || !mensagem) {
    return Response.json({ error: 'Preencha todos os campos obrigatórios corretamente.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('Contato: defina RESEND_API_KEY, CONTACT_TO_EMAIL e CONTACT_FROM_EMAIL.');
    return Response.json({ error: 'Serviço de e-mail não configurado.' }, { status: 500 });
  }

  const html = `
    <h2>Nova solicitação de proposta</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Empresa/Projeto:</strong> ${escapeHtml(empresa) || '—'}</p>
    <p><strong>Serviço:</strong> ${escapeHtml(servico)}</p>
    <p><strong>Mensagem:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(mensagem)}</p>
  `;

  let res;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Site] ${servico} — ${nome}`,
        html,
      }),
    });
  } catch (err) {
    console.error('Contato: falha de rede ao enviar e-mail', err);
    return Response.json({ error: 'Não foi possível enviar agora.' }, { status: 502 });
  }

  if (!res.ok) {
    console.error('Contato: Resend respondeu', res.status, await res.text());
    return Response.json({ error: 'Não foi possível enviar agora.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
