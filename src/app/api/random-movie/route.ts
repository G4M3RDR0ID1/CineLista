import { NextRequest, NextResponse } from 'next/server';
import tmdbApi from '@/lib/api/axios';

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

type DiscoverResponse = {
  results: Movie[];
  total_pages: number;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const genreId = searchParams.get('genreId');

  if (!genreId) {
    return NextResponse.json({ error: 'genreId is required' }, { status: 400 });
  }

  try {
    const randomPage = Math.floor(Math.random() * 5) + 1;

    const res = await tmdbApi.get<DiscoverResponse>(
      `/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=500&page=${randomPage}&language=pt-BR`,
    );

    const movies = res.data.results.filter((m) =>
      /^[\u0000-\u024F\s]*$/.test(m.title),
    );

    if (!movies || movies.length === 0) {
      return NextResponse.json({ error: 'No movies found' }, { status: 404 });
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];

    let overview = movie.overview;
    let overviewFallback = false;

    if (!overview) {
      const resEN = await tmdbApi.get<Movie>(
        `/movie/${movie.id}?language=en-US`,
      );
      overview = resEN.data.overview;
      overviewFallback = true;
    }

    return NextResponse.json({
      id: movie.id,
      title: movie.title,
      overview,
      overviewFallback,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
    });
  } catch (error) {
    console.error('Error fetching random movie:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movie' },
      { status: 500 },
    );
  }
}
