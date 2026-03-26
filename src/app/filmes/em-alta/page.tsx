import Grid from '@/app/components/Grid';
import Title from '@/app/components/Title';
import { getTrendindMovies } from '@/lib/api/tmdb';

export const revalidate = 3600;

const FilmesEmAlta = async () => {
  const filmes = await getTrendindMovies();
  return (
    <>
      <Title title="Filmes em Alta" />
      <Grid filmes={filmes} />
    </>
  );
};

export default FilmesEmAlta;
