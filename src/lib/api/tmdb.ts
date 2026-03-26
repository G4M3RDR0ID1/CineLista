import { Filme } from '@/types/Types';
import tmdbApi from './axios';

type Data = {
  results: Filme[];
};

// Filtra filmes cujo título contenha caracteres fora do alfabeto latino
// (ex: títulos em Hindi, árabe, japonês, coreano, etc.)
const hasLatinTitle = (filme: Filme) =>
  /^[\u0000-\u024F\s]*$/.test(filme.title);

export const getTrendindMovies = async () => {
  try {
    const [p1, p2] = await Promise.all([
      tmdbApi.get<Data>('/trending/movie/week?language=pt-BR&page=1'),
      tmdbApi.get<Data>('/trending/movie/week?language=pt-BR&page=2'),
    ]);
    return [...p1.data.results, ...p2.data.results]
      .filter(hasLatinTitle)
      .slice(0, 20);
  } catch (error) {
    console.error('Erro ao buscar filmes em destaque', error);
    return [];
  }
};

export const getMoviesDetails = async (
  id: number,
): Promise<Filme | undefined> => {
  const resPT = await tmdbApi.get<Filme>(`/movie/${id}?language=pt-BR`);
  const movie = resPT.data;

  if (!movie.overview) {
    const resEN = await tmdbApi.get<Filme>(`/movie/${id}?language=en-US`);
    return { ...movie, overview: resEN.data.overview, overviewFallback: true };
  }

  return { ...movie, overviewFallback: false };
};

export const getNowPlaying = async () => {
  const [p1, p2] = await Promise.all([
    tmdbApi.get<Data>('/movie/now_playing?language=pt-BR&page=1'),
    tmdbApi.get<Data>('/movie/now_playing?language=pt-BR&page=2'),
  ]);
  return [...p1.data.results, ...p2.data.results]
    .filter(hasLatinTitle)
    .slice(0, 20);
};

export const getPopularMovies = async () => {
  const [p1, p2] = await Promise.all([
    tmdbApi.get<Data>('/movie/popular?language=pt-BR&page=1'),
    tmdbApi.get<Data>('/movie/popular?language=pt-BR&page=2'),
  ]);
  return [...p1.data.results, ...p2.data.results]
    .filter(hasLatinTitle)
    .slice(0, 20);
};

export const getTopMovies = async () => {
  const [p1, p2] = await Promise.all([
    tmdbApi.get<Data>('/movie/top_rated?language=pt-BR&page=1'),
    tmdbApi.get<Data>('/movie/top_rated?language=pt-BR&page=2'),
  ]);
  return [...p1.data.results, ...p2.data.results]
    .filter(hasLatinTitle)
    .slice(0, 20);
};
