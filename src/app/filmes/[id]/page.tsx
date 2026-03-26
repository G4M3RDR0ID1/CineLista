import Link from 'next/link';
import { notFound } from 'next/navigation';
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

  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    overviewFallback,
    vote_average,
    release_date,
    genres,
  } = details;

  return (
    <div className="min-h-screen">
      {/* Hero backdrop — extends behind sticky navbar (-mt-14) */}
      {backdrop_path && (
        <div className="relative w-full -mt-14 pt-14 min-h-[85vh]">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
            alt={`Backdrop de ${title}`}
            fill
            className="object-cover object-top"
            priority
          />
          {/* Top overlay: keeps navbar legible */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080c14]/50 to-transparent" />
          {/* Bottom overlay: smooth transition into content */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#080c14] via-[#080c14]/80 to-transparent" />
        </div>
      )}

      {/* Content — pulled up over the bottom of the hero */}
      <div className={`max-w-7xl mx-auto px-6 py-10${backdrop_path ? ' -mt-56 relative z-10' : ''}`}>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Poster column */}
          <div className="flex-shrink-0 flex flex-col gap-4">
            <Link
              href="/"
              className="text-[#93b3ea] hover:text-[#eef2ff] text-sm transition-colors duration-150 inline-flex items-center gap-1"
            >
              ← Voltar
            </Link>
            <div className="relative w-[200px] aspect-[2/3] rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                alt={`Poster do filme: ${title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info column */}
          <div className="flex-1 pt-2">
            <h1
              className="font-extrabold text-[#eef2ff] tracking-tight mb-4 leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              {title}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-yellow-400 font-semibold text-sm">
                ★ {vote_average?.toFixed(1)}
              </span>
              {release_date && (
                <span className="text-[#4a6080] text-sm">{release_date.slice(0, 4)}</span>
              )}
            </div>

            {genres && genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-[#0e1f45] border border-[#1e3d8f] text-[#93b3ea] text-xs rounded-full px-3 py-1"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {overview ? (
              <>
                <p className="text-[#93b3ea] leading-relaxed max-w-2xl text-base">{overview}</p>
                {overviewFallback && (
                  <p className="mt-3 flex items-center gap-1 text-xs text-[#4a6080]">
                    🌐 Descrição em inglês (tradução indisponível)
                  </p>
                )}
              </>
            ) : (
              <p className="text-[#4a6080] italic text-sm">
                Nenhuma descrição disponível para este título.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalheFilme;
