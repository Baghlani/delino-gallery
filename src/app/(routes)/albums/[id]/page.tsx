import { getAlbum } from "@/entities/album/data";
import { Album } from "@/entities/album/types";
import { getPhotos } from "@/entities/photo/data";
import { Photo } from "@/entities/photo/types";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const album: Album = await getAlbum(+id);
  return {
    title: `${album.title} | Delino Gallery`,
    description: `album: ${album.title} | this is a description of the album`,
  };
};

export default async function AlbumPage({ params: { id } }: { params: { id: string } }) {
  const photos: Photo[] = await getPhotos(+id);
  const album: Album = await getAlbum(+id);

  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl font-light text-white">Album #{id}: {album.title}</h1>
      <div className="grid grid-cols-4 gap-4">
        {photos.map(photo => (
          <Link key={photo.id} href={`/photos/${photo.id}`} className="block relative aspect-square">
            <Image src={photo.url} alt={photo.title} fill className="object-cover" />
          </Link>
        ))}
      </div>
    </div>
  );
}
