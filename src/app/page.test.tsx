import '@testing-library/jest-dom';
import { getTrendindMovies } from './../lib/api/tmdb';
import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock('./../lib/api/tmdb', () => ({
  getTrendindMovies: jest.fn(),
}));

test("Exibe o titulo 'Filmes em destaque' na pagina inicial corretamente", async () => {
  const titulo = 'Filmes em destaque';

  (
    getTrendindMovies as jest.MockedFunction<typeof getTrendindMovies>
  ).mockResolvedValue([]);

  render(await Home());

  expect(screen.getByText(titulo)).toBeInTheDocument();
});

test('Renderiza os filmes em destaque corretamente', async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([
    {
      id: 1,
      title: 'Filme teste',
      overview: 'Resumo teste',
      poster_path: 'public/next.svg',
      vote_average: 8.0,
    },
  ]);

  render(await Home());
  expect(await screen.findByText('Filme teste')).toBeInTheDocument();
});

test('Renderiza múltiplos filmes em destaque', async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([
    {
      id: 1,
      title: 'Filme 1',
      overview: 'Resumo 1',
      poster_path: 'public/next.svg',
      vote_average: 7.5,
    },
    {
      id: 2,
      title: 'Filme 2',
      overview: 'Resumo 2',
      poster_path: 'public/next.svg',
      vote_average: 9.0,
    },
  ]);

  render(await Home());
  expect(await screen.findByText('Filme 1')).toBeInTheDocument();
  expect(await screen.findByText('Filme 2')).toBeInTheDocument();
});

test('Renderiza corretamente quando não há filmes em destaque', async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([]);

  render(await Home());
  expect(screen.getByText('Filmes em destaque')).toBeInTheDocument();
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('Exibir uma mensagem quando não houver filmes disponiveis', async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([]);

  render(await Home());
  expect(screen.getByText('Nenhum file encontrado.')).toBeInTheDocument();
});
