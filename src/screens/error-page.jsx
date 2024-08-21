import { Title } from '@/lib/shared-components/title';

export default function ErrorPage({ message }) {
  return (
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
  );
}

export { ErrorPage };
