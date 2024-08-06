import { Title } from './title';

function Menu() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-x-8">
      <header className="sticky top-0 border-b-4 border-foreground bg-white">
        <div className="container py-4">
          <img
            className="h-12 w-12 object-contain p-1"
            src="/images/logo-burger.png"
            alt="Yummy! Foods Home"
            width="237"
            height="248"
          />
        </div>
      </header>
      <div className="container pb-16 pt-8 lg:gap-x-16 lg:gap-y-8">
        <main className="col-span-full flex flex-col gap-8">
          <Title>Menu</Title>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <img
                height="300"
                width="300"
                src="/images/cheeseburger.jpeg"
                alt="Cheeseburger"
              />
              <div className="text-lg font-bold">Cheeseburger</div>
              <div>$6.99</div>
            </div>
            <div>
              <img
                height="300"
                width="300"
                src="/images/bacon-cheeseburger.jpeg"
                alt="Bacon Cheeseburger"
              />
              <div className="text-lg font-bold">Bacon Cheeseburger</div>
              <div>$8.49</div>
            </div>
            <div>
              <img
                height="300"
                width="300"
                src="/images/double-cheeseburger.jpeg"
                alt="Double Cheeseburger"
              />
              <div className="text-lg font-bold">Double Cheeseburger</div>
              <div>$9.49</div>
            </div>
            <div>
              <img
                height="300"
                width="300"
                src="/images/soda.jpeg"
                alt="Soda"
              />
              <div className="text-lg font-bold">Soda</div>
              <div>$1.99</div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-slate-800 text-slate-400">
        <div className="container py-4 text-right">
          Copyright © Yummy! Foods 2024
        </div>
      </footer>
    </div>
  );
}

export { Menu };
