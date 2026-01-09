import { Filme } from '@/types/Types';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useResumoFilme } from '@/app/hooks/useResumoFilme';

type Props = {
  filme: Filme;
};

const Card = ({ filme }: Props) => {
  const { id, title, poster_path, overview, vote_average } = filme;
  const resume = useResumoFilme(overview, 256);

  return (
    <div className={styles.card} key={id}>
      <Link href={`/filmes/${id}`}>
        <Image
          className={styles.card__poster}
          src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
          alt={`Poster do filme ${title}`}
          width={300}
          height={200}
        />
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{resume}</p>
          <p className={styles.card__rating}>⭐ {vote_average.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
