import { useState, useCallback } from 'react';

export type RandomMovie = {
  id: number;
  title: string;
  overview: string;
  overviewFallback?: boolean;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

type State = {
  movie: RandomMovie | null;
  isLoading: boolean;
  isRevealed: boolean;
  error: string | null;
};

export function useRandomMovie() {
  const [state, setState] = useState<State>({
    movie: null,
    isLoading: false,
    isRevealed: false,
    error: null,
  });

  const fetchRandomMovie = useCallback(async (genreId: number) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isRevealed: false,
      error: null,
    }));

    try {
      const res = await fetch(`/api/random-movie?genreId=${genreId}`);

      if (!res.ok) {
        throw new Error('Falha ao buscar o filme');
      }

      const movie: RandomMovie = await res.json();

      setState((prev) => ({ ...prev, movie, isLoading: false }));

      setTimeout(() => {
        setState((prev) => ({ ...prev, isRevealed: true }));
      }, 100);
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Erro desconhecido',
      }));
    }
  }, []);

  return { ...state, fetchRandomMovie };
}
