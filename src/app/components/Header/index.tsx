import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-sm border-b border-[#1a2e4a]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <h1 className="text-[#eef2ff] font-extrabold tracking-tight text-lg hover:text-[#3b6fd4] transition-colors duration-150">
          <Link href="/">CineLista</Link>
        </h1>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-[#93b3ea] hover:text-[#eef2ff] text-sm transition-colors duration-150"
          >
            Início
          </Link>
          <Link
            href="/filmes/em-alta"
            className="text-[#93b3ea] hover:text-[#eef2ff] text-sm transition-colors duration-150"
          >
            Em alta
          </Link>
          <Link
            href="/filmes/populares"
            className="text-[#93b3ea] hover:text-[#eef2ff] text-sm transition-colors duration-150"
          >
            Populares
          </Link>
          <Link
            href="/filmes/top-filmes"
            className="text-[#93b3ea] hover:text-[#eef2ff] text-sm transition-colors duration-150"
          >
            Top filmes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
