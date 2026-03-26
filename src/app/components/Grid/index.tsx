import { Filme } from '@/types/Types';
import Card from '../Card';

type Props = {
  filmes: Filme[];
};

const Grid = ({ filmes }: Props) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-6 py-8 max-w-7xl mx-auto">
      {filmes.map((filme) => (
        <Card key={filme.id} filme={filme} />
      ))}
    </section>
  );
};

export default Grid;
