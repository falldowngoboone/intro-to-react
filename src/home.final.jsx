import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="container grid h-screen place-items-center">
      <Link
        className="block text-center transition ease-in-out hover:scale-110"
        to="/menu"
      >
        <img
          className="max-w-[470px]"
          src="/images/logo-hero.png"
          alt="Bright, friendly illustration of a cute, smiling cartoon burger. It's honestly a bit disturbing."
        />
        <div className="flex items-center justify-center">
          <p className="text-xl font-black uppercase text-foreground">
            Check out our menu
          </p>
          <ChevronRight size={24} />
        </div>
      </Link>
    </div>
  );
}

export { Home };
