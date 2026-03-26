'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './MysteryCard.module.css';
import type { RandomMovie } from '@/hooks/useRandomMovie';

type Props = {
  movie: RandomMovie | null;
  isRevealed: boolean;
  isLoading: boolean;
};

const MysteryCard = ({ movie, isRevealed, isLoading }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.cardInner} ${isRevealed ? styles.revealed : ''}`}>
        {/* FRENTE — estado misterioso */}
        <div className={styles.cardFront}>
          <span className="text-[6rem] text-[#1e3d8f] leading-none select-none font-bold">?</span>
          <p className="text-sm text-[#4a6080] text-center px-6">
            Sua próxima sessão aguarda...
          </p>
          <div className="absolute inset-0 rounded-xl border border-[#2451b8]/30 animate-pulse pointer-events-none" />
        </div>

        {/* VERSO — filme revelado */}
        <div className={styles.cardBack}>
          {isLoading || !movie ? (
            <div className="flex flex-col h-full gap-3 p-4">
              <div className="flex-1 bg-[#141c2e] rounded-lg animate-pulse" />
              <div className="h-5 bg-[#141c2e] rounded animate-pulse w-3/4" />
              <div className="h-3 bg-[#141c2e] rounded animate-pulse w-1/4" />
              <div className="h-14 bg-[#141c2e] rounded animate-pulse" />
              <div className="h-8 bg-[#141c2e] rounded animate-pulse" />
            </div>
          ) : (
            <div className="flex flex-col h-full">
              {/* Poster com gradiente */}
              <div className="relative h-[60%] overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${movie.poster_path}`}
                  alt={`Poster de ${movie.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0e1420] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-[#eef2ff] font-bold text-lg leading-tight line-clamp-2">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm font-medium">
                    ★ {movie.vote_average.toFixed(1)}
                  </span>
                  {movie.release_date && (
                    <span className="text-[#4a6080] text-xs">
                      {movie.release_date.slice(0, 4)}
                    </span>
                  )}
                </div>
                {movie.overview ? (
                  <>
                    <p className="text-sm text-[#93b3ea] line-clamp-3 leading-relaxed">
                      {movie.overview}
                    </p>
                    {movie.overviewFallback && (
                      <p className="flex items-center gap-1 text-xs text-[#4a6080]">
                        🌐 Descrição em inglês (tradução indisponível)
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-xs text-[#4a6080] italic">
                    Nenhuma descrição disponível para este título.
                  </p>
                )}
                <Link
                  href={`/filmes/${movie.id}`}
                  className="mt-auto inline-block text-center border border-[#2451b8] text-[#3b6fd4] text-xs font-medium py-2 px-4 rounded-md hover:bg-[#0e1f45] hover:border-[#3b6fd4] transition-all duration-150"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MysteryCard;
