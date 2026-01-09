import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './DetalheFilme.module.css';
import { getMoviesDetails } from '@/lib/api/tmdb';
import Image from 'next/image';

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const details = await getMoviesDetails(id);

  if (!details) return;

  return {
    title: `${details.title} | Cinelista`,
    description: details.overview,
    images: [
      `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`,
    ],
  };
};

const DetalheFilme = async ({ params }: Props) => {
  const { id } = await params;
  const details = await getMoviesDetails(id);

  if (!details) return notFound();

  const { title, poster_path, overview, vote_average } = details;

  return (
    <div className={styles.detalhes}>
      <div className={styles.detalhes__container}>
        <div className={styles.detalhes__esquerda}>
          <Link className={styles.detalhes__voltar} href="/">
            Voltar
          </Link>
          <Image
            className={styles.detalhes__image}
            src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
            alt={`Poster do filme: ${title}`}
            width={300}
            height={400}
          />
        </div>

        <div className={styles.detalhes__info}>
          <h2>{title}</h2>

          <p className={styles.detalhes__overview}>{overview}</p>

          <p className={styles.detalhes__nota}>⭐ {vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalheFilme;
