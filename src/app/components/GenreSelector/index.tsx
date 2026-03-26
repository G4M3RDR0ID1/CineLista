'use client';

const GENRES = [
  { id: 28, name: 'Ação' },
  { id: 12, name: 'Aventura' },
  { id: 16, name: 'Animação' },
  { id: 35, name: 'Comédia' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentário' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Família' },
  { id: 14, name: 'Fantasia' },
  { id: 36, name: 'História' },
  { id: 27, name: 'Terror' },
  { id: 10402, name: 'Música' },
  { id: 9648, name: 'Mistério' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Ficção Científica' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'Guerra' },
  { id: 37, name: 'Faroeste' },
];

type Props = {
  selectedGenre: number;
  onGenreChange: (genreId: number) => void;
};

const GenreSelector = ({ selectedGenre, onGenreChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onGenreChange(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-widest text-[#4a6080] font-medium">
        Tema
      </label>
      <select
        value={selectedGenre}
        onChange={handleChange}
        className="bg-[#141c2e] border border-[#1a2e4a] text-[#eef2ff] text-sm rounded-md px-4 py-[10px] cursor-pointer focus:outline-none focus:border-[#2451b8] transition-colors appearance-none"
      >
        {GENRES.map((genre) => (
          <option key={genre.id} value={genre.id} className="bg-[#141c2e]">
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreSelector;
