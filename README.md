<img width="1338" height="599" alt="image" src="https://github.com/user-attachments/assets/6cf685d2-ee9f-40d0-8674-c815d8304cff" />



Este é o meu portfólio pessoal, desenvolvido com **Next.js**, **Tailwind CSS** e **TypeScript**, com foco em um design moderno, elegante e responsivo. Ele apresenta minhas habilidades, projetos e formas de contato.

---

## Funcionalidades

- Layout responsivo, elegante e minimalista
- Seções organizadas: Sobre, Conhecimentos, Projetos e Contato
- Envio de mensagens por e-mail via EmailJS
- Código limpo, comentado e com boas práticas de estruturação
- Suporte completo para deploy no [Vercel](https://vercel.com/)

---

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — framework React com suporte a SSR
- [Tailwind CSS](https://tailwindcss.com/) — estilização moderna e utilitária
- [TypeScript](https://www.typescriptlang.org/) — segurança e tipagem
- [EmailJS](https://www.emailjs.com/) — envio de e-mails sem backend
- [Vercel](https://vercel.com/) — deploy automático e gratuito

---

## Como executar localmente

Clone o projeto e instale as dependências:

git clone https://github.com/GPS33/meu-portfolio.git
cd meu-portfolio
npm install

## Configuração do .env.local

Este projeto utiliza o [EmailJS](https://www.emailjs.com/) para envio de mensagens pelo formulário de contato.

Para que o formulário funcione corretamente, crie um arquivo chamado `.env.local` na raiz do projeto com as seguintes variáveis:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=(seu_service_id)

NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=(seu_template_id)

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=(sua_chave_publica)


### Como obter essas variáveis

1. Crie uma conta gratuita em https://www.emailjs.com/.
2. Crie um serviço (service).
3. Crie um template (modelo de e-mail) com os campos que o formulário utiliza.
4. Vá até a aba "Integrations" ou "Account" e copie os valores:
   - **Service ID**
   - **Template ID**
   - **Public Key**
5. Cole esses valores no seu `.env.local`.

**Atenção:** nunca publique esse arquivo em repositórios públicos. O `.env.local` já está listado no `.gitignore` para evitar isso.

Depois, execute:

npm run dev

E então acesse http://localhost:3000 no navegador.


