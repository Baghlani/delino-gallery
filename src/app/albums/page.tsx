import Link from "next/link";
import { getAlbums } from "../../entities/album/data";

export default async function Albums() {
  const albums = await getAlbums();
  return (
    <div className="pb-8">
      <div className="space-y-2 mb-4">
        <h3 className="text-xl md:text-2xl font-extraligh text-white">Discover {albums.length} albums</h3>
      </div>
      <div className="mt-3 flex md:text-lg flex-col space-y-4 text-neutral-300">
        {albums.map(album => (
          <Link key={album.id} href={`/albums/${album.id}`}>
            <div className="font-mono text-[15px] text-neutral-100/50">Album #{album.id}</div>
            <div>{album.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
