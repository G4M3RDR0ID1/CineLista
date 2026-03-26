import { getTrendindMovies } from './tmdb';
import tmdbApi from './axios';

jest.mock('./axios');

const mockPage = (results: object[]) =>
  Promise.resolve({ data: { results } });

describe('getTrendindMovies', () => {
  test('retorna filmes combinando as duas páginas', async () => {
    (tmdbApi.get as jest.Mock)
      .mockImplementationOnce(() => mockPage([{ id: 1, title: 'Matrix' }]))
      .mockImplementationOnce(() => mockPage([{ id: 2, title: 'Inception' }]));

    const filmes = await getTrendindMovies();

    expect(filmes).toEqual([
      { id: 1, title: 'Matrix' },
      { id: 2, title: 'Inception' },
    ]);
  });

  test('filtra filmes com título fora do alfabeto latino', async () => {
    (tmdbApi.get as jest.Mock)
      .mockImplementationOnce(() =>
        mockPage([
          { id: 1, title: 'Matrix' },
          { id: 2, title: 'धुरंधर: द रिवेंज' }, // Devanagari — deve ser removido
        ])
      )
      .mockImplementationOnce(() => mockPage([]));

    const filmes = await getTrendindMovies();

    expect(filmes).toHaveLength(1);
    expect(filmes[0].title).toBe('Matrix');
  });

  test('retorna array vazio quando a API falha', async () => {
    (tmdbApi.get as jest.Mock).mockRejectedValue(new Error('Network Error'));

    const filmes = await getTrendindMovies();

    expect(filmes).toEqual([]);
  });
});
