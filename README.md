# CineLista

CineLista é uma aplicação web desenvolvida com **Next.js**, **React** e **TypeScript** que consome a API do **TMDB (The Movie Database)** para exibir filmes em destaque, populares e mais bem avaliados.  
O projeto foi desenvolvido com foco em **boas práticas de front-end**, **organização de código**, **performance** e **experiência do usuário**.

---

## Funcionalidades

- Listagem de filmes em destaque
- Páginas dedicadas para:
  - Filmes populares
  - Filmes em alta
  - Top filmes
- Página de detalhes do filme com rota dinâmica
- Renderização Server-side (SSR), Static Generation (SSG) e Revalidação
- Layout responsivo (desktop e mobile)
- Testes unitários para componentes, hooks e serviços
- Tratamento de erros na comunicação com a API

---

## Tecnologias Utilizadas

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Axios**
- **CSS Modules**
- **Jest + Testing Library**
- **API TMDB**

---

## Estrutura do Projeto

```text
src/
 ├─ app/
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   ├─ filmes/
 │   └─ components/
 ├─ lib/
 │   └─ api/
 ├─ hooks/
 ├─ styles/
 └─ types/
```

A arquitetura foi pensada para manter **separação de responsabilidades**, **componentização** e **facilidade de manutenção**.

---

## Como rodar o projeto localmente

### Clone o repositório
```bash
git clone https://github.com/G4M3RDR0ID1/CineLista.git
```

### Acesse a pasta do projeto
```bash
cd CineLista
```

### Instale as dependências
```bash
npm install
```

### Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
TMDB_API_URL=https://api.themoviedb.org/3
TMDB_API_KEY=SEU_TOKEN_DO_TMDB
```

> O token pode ser obtido gratuitamente em: https://www.themoviedb.org/

### Execute o projeto
```bash
npm run dev
```

Acesse no navegador:
```
http://localhost:3000
```

---

## Testes

O projeto possui testes unitários para garantir confiabilidade dos componentes, hooks e serviços.

Para rodar os testes:

```bash
npm run test
```

---

## Deploy

O projeto está disponível online através do deploy na **Vercel**:

**https://cine-lista.vercel.app/**  

---

## Destaques Técnicos

- Uso de **Server Components** e **renderização híbrida**
- Rotas dinâmicas com tratamento de erro (`notFound`)
- Metadata dinâmica para SEO
- Consumo de API com Axios centralizado
- Código limpo, tipado e organizado
- Testes unitários como diferencial de portfólio

---

## Autor

Projeto desenvolvido por **Lucas Lana**  
Durante o curso de Front-End da **EBAC**, com foco em evolução técnica e boas práticas de desenvolvimento.

---

## Status do Projeto
 
Em constante evolução para fins de aprendizado e portfólio