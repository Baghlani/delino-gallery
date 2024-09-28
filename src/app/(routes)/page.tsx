import Button from "@/components/Button";

export default async function Home() {
  return (
    <>
      <div className="relative h-full w-full text-center">
        <div className="absolute top-1/2 box-border w-full -translate-y-1/2 space-y-5">
          <h1 className="w-full bg-gradient-to-tl from-blue-500 to-violet-600 bg-clip-text text-center text-4xl font-bold text-white/10 md:text-6xl lg:text-7xl">
            Delino Gallery
          </h1>
          <div className="text-center text-xl font-light text-neutral-400 md:text-2xl lg:text-3xl">
            <span className="text-white">Discover and Enjoy</span> from 100 hand-picked albums
            <br className="hidden md:block" /> from the best Delino Artists.
          </div>
          <Button href="/albums">Let&apos;s go</Button>
        </div>
      </div>
    </>
  );
}
