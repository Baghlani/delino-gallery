import { getPhotos } from "@/entities/photo/data";
import Image from "next/image";

export default async function AlbumPage({ params: { id } }: { params: { id: string } }) {
  const photos: Photo[] = await getPhotos(+id);
  return (
    <div>
      <h1>Album</h1>
      <div className="grid grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="relative aspect-square">
            <Image src={photo.url} alt={photo.title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
