import { Filme } from '@/types/Types';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  filme: Filme;
};

const Card = ({ filme }: Props) => {
  const { id, title, poster_path, vote_average, overview } = filme;

  return (
    <Link href={`/filmes/${id}`} className="group block bg-[#0e1420] border border-[#1a2e4a] rounded-lg overflow-hidden transition-all duration-200 hover:border-[#2451b8] hover:shadow-[0_8px_32px_rgba(59,111,212,0.15)]">
      {/* Foto */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
          alt={`Poster do filme ${title}`}
          fill
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute top-2 right-2 bg-[#162d6b] text-[#93b3ea] text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
          ★ {vote_average.toFixed(1)}
        </div>
      </div>

      {/* Título e descrição */}
      <div className="p-3">
        <h3 className="text-[#eef2ff] font-bold text-sm truncate">{title}</h3>
        {overview && (
          <p className="mt-1 text-[#93b3ea] text-xs leading-relaxed line-clamp-2">{overview}</p>
        )}
      </div>
    </Link>
  );
};

export default Card;
