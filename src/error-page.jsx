import { Link } from 'react-router-dom';

import { Title } from './title';

export default function ErrorPage({ message }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-x-8">
      <header className="sticky top-0 border-b-4 border-foreground bg-white">
        <nav className="container py-4">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="block font-black uppercase transition-transform hover:scale-110 hover:drop-shadow-md"
                to="/"
              >
                <img
                  className="h-12 w-12 object-contain p-1"
                  src="/images/logo-burger.png"
                  alt="Yummy! Foods Home"
                  width="237"
                  height="248"
                />
              </Link>
            </li>
            <li>
              <Link
                className="block font-black uppercase transition-transform hover:scale-110 hover:text-red-600"
                to="menu"
              >
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container grid auto-rows-min grid-cols-12 gap-x-8 gap-y-4 pb-16 pt-8 lg:gap-x-16 lg:gap-y-8">
        <div className="relative col-span-full">
          <img
            className="w-1/2 max-w-[950px] md:translate-x-[10%]"
            src="/images/puppy.jpeg"
            alt="An empty paper bag."
          />
          <div className="left-1/2 top-1/2 flex flex-col gap-4 md:absolute md:w-1/2 md:translate-y-[-50%]">
            <Title>Oops!</Title>
            <div className="flex flex-col items-start gap-8">
              <p>
                An unexpected error has occurred. It&apos;s probably our fault,
                and we are very sorry. To make it up to you, here&apos;s a photo
                of a cute puppy created by AI.
              </p>
              <p>
                <i>{message || 'Unknown error!'}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-slate-800 text-slate-400">
        <div className="container py-4 text-right">
          Copyright © Yummy! Foods 2024
        </div>
      </footer>
    </div>
  );
}

export { ErrorPage };
