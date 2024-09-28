import { Metadata } from "next";
import Link from "next/link";
import { getAlbums } from "../../../entities/album/data";

export const dynamic = "force-static";
export const revalidate = 60 * 60;

export const metadata: Metadata = {
  title: "Albums list | Delino Gallery",
  description: "a list of Delino's albums",
};

export default async function Albums() {
  const albums = await getAlbums();
  return (
    <div className="pb-8">
      <div className="mb-4 space-y-2">
        <h3 className="font-extraligh text-xl text-white md:text-2xl">
          Discover {albums.length} albums
        </h3>
      </div>
      <div className="mt-3 flex flex-col space-y-4 text-neutral-300 md:text-lg">
        {albums.map((album) => (
          <Link key={album.id} href={`/albums/${album.id}`}>
            <div className="font-mono text-[15px] text-neutral-100/50">Album #{album.id}</div>
            <div>{album.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
