# Rixxer — Site institucional

Site da [Rixxer](https://www.rixxer.com.br), software house de São Lourenço - MG.
Feito com **Next.js 16 (App Router)**, **React 19** e **Tailwind CSS 4**. Requer Node ≥ 24.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Variáveis de ambiente

O formulário de contato envia e-mail pela API do [Resend](https://resend.com).
Crie um `.env.local` (e configure as mesmas variáveis na hospedagem):

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=contato@rixxer.com.br
CONTACT_FROM_EMAIL=Site Rixxer <site@rixxer.com.br>
```

O domínio do remetente precisa estar verificado no Resend. Sem essas variáveis,
`POST /api/contato` responde erro 500.

## Estrutura

```
app/
  layout.jsx            # layout raiz, metadata global, fontes, Google Analytics
  page.jsx              # home
  servicos/ sobre/      # páginas estáticas
  projetos/ contato/    # page.jsx (servidor, com metadata) + *Client.jsx (interativo)
  api/contato/route.js  # envio do formulário (validação + honeypot + Resend)
  components/           # Reveal, CountUp, Marquee, MagneticButton, TerminalWidget, ...
  fonts/                # Space Grotesk, Inter e JetBrains Mono (hospedadas localmente)
  sitemap.js robots.js  # /sitemap.xml e /robots.txt
lib/
  site.js               # dados do site: contatos, endereço, nota do Google, redes
  motion.js             # helper para prefers-reduced-motion
public/                 # logos e og.jpg (imagem de compartilhamento, 1200×630)
```

## Projetos (portfólio)

Os projetos ficam em `lib/projetos.js` (o arquivo explica cada campo). Cada projeto gera a página
`/projetos/<slug>` e entra no sitemap. Imagens: `public/projetos/<slug>/`.
Seções como desafio, solução, entregas, resultados, galeria e link só aparecem se preenchidas.

## Onde editar

- **Telefones, e-mail, endereço, nota/avaliações do Google, redes sociais:** `lib/site.js`
  (alimenta rodapé, contato, schema JSON-LD, sitemap e robots).
- **Título/descrição de cada página:** `export const metadata` em cada `page.jsx`.
- **Cores da marca:** roxo `#6B2D8B`, turquesa `#3AACB8`, fundo escuro `#0D0D14`.

## Acessibilidade

Animações e efeitos de movimento respeitam `prefers-reduced-motion`.
O menu mobile expõe `aria-expanded` e fecha com a tecla Esc.

## Avaliações do Google (automático)

Nota, total e as avaliações recentes (com texto, 4–5 estrelas) são buscados no servidor
e cacheados por 24h (`lib/google-reviews.js`).

- **SerpApi** (plano gratuito): `SERPAPI_API_KEY`. Usa o `data_id` do perfil em `lib/site.js`
  (`googleDataId`, ou `SERPAPI_DATA_ID` para sobrescrever).
- **Google Places API (New)** (opcional, exige faturamento): `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID`
  — só para a nota/total.
- **Reserva:** sem chaves ou se a consulta falhar, a nota vem de `lib/site.js` (`SITE.avaliacao`)
  e a seção de depoimentos da home usa a lista fixa em `app/page.jsx`.

A seção de depoimentos da home usa as avaliações do Google quando há pelo menos 3 com texto.
