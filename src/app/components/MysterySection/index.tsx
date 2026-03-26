'use client';

import { useState } from 'react';
import GenreSelector from '../GenreSelector';
import MysteryCard from '../MysteryCard';
import { useRandomMovie } from '@/hooks/useRandomMovie';

const MysterySection = () => {
  const [selectedGenre, setSelectedGenre] = useState(28);
  const { movie, isLoading, isRevealed, fetchRandomMovie } = useRandomMovie();

  const handleGenreChange = (genreId: number) => {
    setSelectedGenre(genreId);
    if (movie) {
      fetchRandomMovie(genreId);
    }
  };

  return (
    <section className="bg-[#0b1018] border-t border-b border-[#162033] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Lado esquerdo */}
        <div className="flex-1 flex flex-col">
          <span className="text-xs tracking-widest text-[#3b6fd4] mb-4">
            ✦ SURPREENDA-SE
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#eef2ff] mb-3">
            Não sabe o que assistir?
          </h2>

          <p className="text-[#93b3ea] text-lg max-w-sm mb-6">
            Escolha um gênero e deixe o acaso decidir sua próxima sessão.
          </p>

          <div className="w-12 h-px bg-[#1a2e4a] mb-6" />

          <GenreSelector
            selectedGenre={selectedGenre}
            onGenreChange={handleGenreChange}
          />

          <button
            onClick={() => fetchRandomMovie(selectedGenre)}
            disabled={isLoading}
            className="mt-6 bg-[#2451b8] text-[#eef2ff] font-bold text-sm tracking-widest uppercase py-[14px] px-8 rounded-md hover:bg-[#3b6fd4] shadow-[0_0_20px_rgba(59,111,212,0.4)] hover:shadow-[0_0_28px_rgba(59,111,212,0.6)] transition-all duration-150 disabled:opacity-50 flex items-center justify-center gap-2 w-fit"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-[#eef2ff]/30 border-t-[#eef2ff] rounded-full animate-spin" />
                Buscando...
              </>
            ) : (
              'Recomendação'
            )}
          </button>
        </div>

        {/* Lado direito */}
        <MysteryCard
          movie={movie}
          isRevealed={isRevealed}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default MysterySection;
