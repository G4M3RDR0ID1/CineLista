# CineLista

Aplicação web para descoberta e visualização de filmes, construída com **Next.js 15** e integrada à API do **TMDB (The Movie Database)**. Conta com um card de recomendação aleatória com animação 3D para pessoas que tem dificuladade em escolher algo para assistir.

---

## Funcionalidades

- **Filmes em destaque** — listagem semanal de trending via TMDB
- **Em Alta / Populares / Top Filmes** — seções dedicadas com grid responsivo
- **Surpreenda-se** — selecione um gênero e receba uma recomendação aleatória com flip 3D
- **Página de detalhe** — hero backdrop, gêneros, nota, sinopse e fallback pt-BR → en-US
- **Filtro de idioma** — filmes sem legenda em português são automaticamente removidos
- **Design system** — paleta dark azul com tokens `brand` / `surface`, tipografia Inter

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v3 + CSS Modules |
| Fonte | Inter (next/font/google) |
| HTTP | Axios |
| Testes | Jest + Testing Library |
| CI/CD | GitHub Actions → Vercel |
| Dados | TMDB API |

---

## Estrutura

```
src/
├── app/
│   ├── api/random-movie/     # Route Handler — filme aleatório por gênero
│   ├── components/
│   │   ├── Card/             # Card com poster, título, descrição e nota
│   │   ├── Grid/             # Grid responsivo 2/3/5 colunas
│   │   ├── Header/           # Navbar sticky com backdrop-blur
│   │   ├── MysteryCard/      # Flip card 3D (CSS Modules)
│   │   ├── MysterySection/   # Seção "Surpreenda-se" com GenreSelector
│   │   └── Title/
│   ├── filmes/
│   │   ├── [id]/             # Página de detalhe com hero backdrop
│   │   ├── em-alta/
│   │   ├── populares/
│   │   └── top-filmes/
│   └── page.tsx              # Home
├── hooks/
│   └── useRandomMovie.ts     # Estado do card misterioso
├── lib/api/
│   ├── axios.ts              # Instância configurada do Axios
│   └── tmdb.ts               # Funções de acesso à API do TMDB
├── styles/globals.css
└── types/Types.ts
```

---

## Como executar localmente

**1. Clone o repositório**
```bash
git clone https://github.com/G4M3RDR0ID1/CineLista.git
cd CineLista
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz:
```env
TMDB_API_URL=https://api.themoviedb.org/3
TMDB_API_KEY=sua_chave_bearer_aqui
NEXT_PUBLIC_TMDB_API_IMG_URL=https://image.tmdb.org/t/p/w500
```

> Obtenha sua chave em [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

**4. Rode o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse em `http://localhost:3000`

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run lint` | Verificação de lint (ESLint) |
| `npm run format` | Formatar código com Prettier |
| `npm run format:check` | Verificar formatação sem alterar |
| `npm test` | Rodar todos os testes |

---

## Testes

Cobertura com **Jest + Testing Library** em 4 suites:

- `page.test.tsx` — renderização da home, cards, links, estado vazio
- `tmdb.test.ts` — busca com 2 páginas, filtro de títulos não-latinos, erro de rede
- `Title.test.tsx` — componente de título
- `useResumoFilme.test.ts` — hook de resumo

```bash
npm test
```

---

## Pipeline CI/CD

```
push → main
  └── build       (npm run build)
  └── tests       (lint → format:check → jest)
  └── deploy      (Vercel)
```

O deploy na Vercel só ocorre após build e testes passarem.

---

## Deploy

[cine-lista.vercel.app](https://cine-lista.vercel.app)

---

## Autor

Desenvolvido por **Lucas Lana**

GitHub: [G4M3RDR0ID1](https://github.com/G4M3RDR0ID1)
