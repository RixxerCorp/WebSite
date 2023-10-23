import Image from 'next/image'

const express = require('express');
const app = express();

app.get("/", async (req, res) => {
    const apiUrl = "https://api.iagentesmtp.com.br/api/v3/send/";
    const apiUsuario = "contato@rixxer.com.br";
    const apiChave = "6t6g7715666qpm5100k789e06i673jgap3vnak8e35u1qi689";
    
    const dados = {
        "api_user": apiUsuario,
        "api_key": apiChave,
        "to":
            [{
                "email": "hebertdev82@gmail.com",
                "name": "Hebert"
            }],
        "from":
            {
                "name": "Rixxer",
                "email": "contato@rixxer.com.br",
                "reply_to": "contato@rixxer.com.br"
            },
        "subject": "Assunto",
        "html": "Olá Mundo",
        "text": "Olá Mundo",
        "campanhaid": "1",
        "addheaders":
        {
            "x-priority": "1"
        }
    }
    
    try {
        const resposta = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const dadosResposta = await resposta.json();
        
        if (dadosResposta.status === 'ok') {
            return res.send("E-mail enviado com sucesso!");
        } else if (dadosResposta.status === 'failed') {
            return res.status(400).send("Erro ao enviar o e-mail: " + dadosResposta.message);
        } else {
            return res.status(500).send("Resposta desconhecida do servidor!");
        }
        
    } catch (error) {
        return res.status(500).send("Erro ao processar a solicitação: " + error.message)
    }
});

// app.listen(8080, () => {
//     console.log("Servidor iniciado na porta 8080: http://localhost:8080");
// });




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className='text-2xl'>|&nbsp;&nbsp; Site em Construção</h1>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  )
}
