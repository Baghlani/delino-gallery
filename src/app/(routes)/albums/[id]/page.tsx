import { getAlbum } from "@/entities/album/data";
import { Album } from "@/entities/album/types";
import { getPhotos } from "@/entities/photo/data";
import { Photo } from "@/entities/photo/types";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 3600;

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
      <h1 className="mb-4 font-light text-white sm:text-xl md:text-2xl">
        Album #{id}: {album.title}
      </h1>
      <div
        data-testid="photo-grid"
        className="grid grid-cols-2 gap-4 max-[440px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
      >
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photos/${photo.id}`}
            className="relative block aspect-square transition-all duration-300 hover:scale-105"
          >
            <Image
              src={photo.url}
              alt={`photo: ${photo.title}`}
              fill
              className="object-cover"
              data-photo-title={photo.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
