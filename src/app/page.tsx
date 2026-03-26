import { getTrendindMovies } from '@/lib/api/tmdb';
import Grid from './components/Grid';
import Title from './components/Title';
import MysterySection from './components/MysterySection';

export default async function Home() {
  const filmes = await getTrendindMovies();
  return (
    <>
      <MysterySection />
      <Title title="Filmes em destaque" />
      {filmes && filmes.length > 0 ? (
        <Grid filmes={filmes} />
      ) : (
        <p className="text-neutral-500 px-6 py-8">Nenhum filme encontrado.</p>
      )}
    </>
  );
}
