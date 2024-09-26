import Link from "next/link";
import { getAlbums } from "../../entities/album/data";

export default async function Albums() {
  const albums = await getAlbums();
  return (
    <div className="w-full h-full">
      <div className="space-y-2 mb-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Delino Gallery</h1>
        <h3 className="text-xl md:text-2xl font-extralight text-neutral-700 dark:text-neutral-300">
          Discover {albums.length} albums
        </h3>
      </div>
      <div className="mt-3 flex md:text-lg flex-col space-y-2 text-neutral-700 dark:text-neutral-300">
        {albums.map(album => (
          <Link key={album.id} href={`/albums/${album.id}`}>
            <div>{album.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
