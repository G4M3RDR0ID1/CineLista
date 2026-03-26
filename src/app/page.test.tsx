import '@testing-library/jest-dom';
import { getTrendindMovies } from './../lib/api/tmdb';
import { render, screen } from '@testing-library/react';
import Home from './page';

// MysterySection é 'use client' com hooks de fetch — isolamos do teste da página
jest.mock('./components/MysterySection', () => {
  const MockMysterySection = () => <div data-testid="mystery-section" />;
  return MockMysterySection;
});

// next/image requer URL absoluta válida; no ambiente de teste a env var não existe
jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  );
  MockImage.displayName = 'Image';
  return MockImage;
});

jest.mock('./../lib/api/tmdb', () => ({
  getTrendindMovies: jest.fn(),
}));

const makeFilme = (overrides = {}) => ({
  id: 1,
  title: 'Filme Teste',
  overview: 'Uma sinopse de teste.',
  poster_path: '/poster.jpg',
  vote_average: 8.5,
  release_date: '2024-01-15',
  ...overrides,
});

describe('Home — estrutura da página', () => {
  test('exibe o título "Filmes em destaque"', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([]);
    render(await Home());
    expect(screen.getByText('Filmes em destaque')).toBeInTheDocument();
  });

  test('renderiza a seção de recomendação aleatória', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([]);
    render(await Home());
    expect(screen.getByTestId('mystery-section')).toBeInTheDocument();
  });
});

describe('Home — lista de filmes', () => {
  test('exibe o título do filme no card', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([
      makeFilme({ title: 'O Poderoso Chefão' }),
    ]);
    render(await Home());
    expect(screen.getByText('O Poderoso Chefão')).toBeInTheDocument();
  });

  test('exibe a sinopse do filme no card', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([
      makeFilme({ overview: 'Uma história sobre poder e família.' }),
    ]);
    render(await Home());
    expect(
      screen.getByText('Uma história sobre poder e família.'),
    ).toBeInTheDocument();
  });

  test('exibe a nota no formato "★ X.X"', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([
      makeFilme({ vote_average: 7.8 }),
    ]);
    render(await Home());
    expect(screen.getByText('★ 7.8')).toBeInTheDocument();
  });

  test('o card possui link para a página de detalhes do filme', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([makeFilme({ id: 42 })]);
    render(await Home());
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/filmes/42');
  });

  test('renderiza todos os filmes quando há múltiplos', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([
      makeFilme({ id: 1, title: 'Filme A' }),
      makeFilme({ id: 2, title: 'Filme B' }),
      makeFilme({ id: 3, title: 'Filme C' }),
    ]);
    render(await Home());
    expect(screen.getByText('Filme A')).toBeInTheDocument();
    expect(screen.getByText('Filme B')).toBeInTheDocument();
    expect(screen.getByText('Filme C')).toBeInTheDocument();
  });

  test('não renderiza sinopse quando overview é vazio', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([
      makeFilme({ overview: '' }),
    ]);
    render(await Home());
    expect(screen.getByText('Filme Teste')).toBeInTheDocument();
    expect(screen.queryByText('Uma sinopse de teste.')).not.toBeInTheDocument();
  });
});

describe('Home — estado vazio', () => {
  test('exibe mensagem quando não há filmes', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([]);
    render(await Home());
    expect(screen.getByText('Nenhum filme encontrado.')).toBeInTheDocument();
  });

  test('não exibe mensagem de vazio quando há filmes', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([makeFilme()]);
    render(await Home());
    expect(
      screen.queryByText('Nenhum filme encontrado.'),
    ).not.toBeInTheDocument();
  });

  test('não renderiza cards quando a lista está vazia', async () => {
    (getTrendindMovies as jest.Mock).mockResolvedValue([]);
    render(await Home());
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
