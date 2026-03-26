type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
      <h2 className="text-[#eef2ff] font-bold text-2xl tracking-tight">{title}</h2>
    </div>
  );
};

export default Title;
