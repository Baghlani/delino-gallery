import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute w-full box-border space-y-5 top-1/2 -translate-y-1/2">
          <h1
            className="w-full text-center bg-gradient-to-tl from-blue-500 to-violet-600
          text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-white/10"
          >
            Delino Gallery
          </h1>
          <div className="text-center text-xl md:text-2xl lg:text-3xl text-neutral-400 font-light">
            <span className="text-white">Discover and Enjoy</span> from 100 hand-picked albums
            <br className="hidden md:block" /> from the best Delino Artists.
          </div>
          <Link
            href="/albums"
            className="block w-fit mx-auto bg-white hover:shadow-lg hover:shadow-white/50
            transition-all duration-300 text-black font-semibold rounded-md px-8 py-2"
          >
            Let's go
          </Link>
        </div>
      </div>
    </>
  );
}
