export interface Filme {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string | null;
  vote_average: number;
  release_date: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
  overviewFallback?: boolean;
}
