# CineLista

CineLista é um projeto web desenvolvido com **Next.js** que tem como objetivo permitir a visualização e organização de filmes em uma lista simples e intuitiva. O projeto foi criado com foco em aprendizado, prática de React/Next.js e consumo de APIs.

---

## Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Node.js**

---

## Funcionalidades

- Integração com a **API do TMDB (The Movie Database)**
- Exibição de filmes populares/destaques
- Estrutura moderna utilizando componentes React
- Organização de arquivos seguindo o padrão do Next.js
- Consumo de API externa para dados reais de filmes

---

## Estrutura do Projeto

A estrutura do projeto segue o padrão do **Next.js (App Router)**, com separação por responsabilidades:

```bash
CineLista/
├── app/
│ ├── layout.tsx # Layout principal da aplicação
│ ├── page.tsx # Página inicial
│ ├── globals.css # Estilos globais
│ └── (outras rotas)/ # Demais páginas do app
├── components/ # Componentes reutilizáveis da interface
├── services/ # Serviços de integração com APIs (TMDB)
├── public/ # Arquivos públicos (imagens, ícones, etc.)
├── .env.local # Variáveis de ambiente (API KEY do TMDB)
├── next.config.js # Configurações do Next.js
├── package.json # Dependências e scripts do projeto
├── tsconfig.json # Configurações do TypeScript
└── README.md # Documentação do projeto
```

---

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/G4M3RDR0ID1/CineLista.git
```

2. Acesse a pasta do projeto:

```bash
cd CineLista
```

3. Instale as dependências:

```bash
npm install
```

4. Configure a variável de ambiente da API do TMDB:

```bash
NEXT_PUBLIC_TMDB_API_KEY=SUA_CHAVE_AQUI
```

5. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

6. Abra no navegador:

```
http://localhost:3000
```

---

## Objetivo do Projeto

Este projeto tem fins **educacionais**, sendo utilizado para praticar:

- Componentização com React
- Estrutura e conceitos do Next.js
- Uso de TypeScript em aplicações web
- Consumo de APIs REST (TMDB)
- Organização de projetos front-end

---

## Melhorias Futuras

- Sistema de busca por título
- Página de detalhes do filme
- Opção de favoritos
- Paginação de resultados
- Melhorias no layout e responsividade
- Autenticação de usuário

---

## Deploy

Acesse o projeto publicado em: [CineLista no Vercel](https://cine-lista.vercel.app)

---

## Autor

Desenvolvido por **Lucas Lana**

GitHub: [G4M3RDR0ID1](https://github.com/G4M3RDR0ID1)

---

⭐ Se gostou do projeto, não esqueça de deixar uma estrela no repositório!
