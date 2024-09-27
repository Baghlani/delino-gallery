import { getPhoto } from "@/entities/photo/data";
import { Photo } from "@/entities/photo/types";
import Image from "next/image";
import Link from "next/link";

export default async function PhotoDetailPage({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = await getPhoto(+id);
  return (
    <div
      className="flex flex-col 
    h-[calc(100dvh-var(--layout-padding-mobile)-var(--layout-padding-mobile))]
    md:h-[calc(100dvh-var(--layout-padding)-var(--layout-padding))]"
    >
      <Link href={`/albums/${photo.albumId}`} className="font-light mb-3">
        back
      </Link>
      <h1 className="text-xl md:text-2xl mb-3">{photo.title}</h1>
      <div className="flex flex-col md:grid md:grid-cols-[1fr_270px] lg:grid-cols-[1fr_340px] flex-1">
        <div className="relative flex-[2_1_0%]">
          <Image src={photo.url} alt={photo.title} fill className="object-cover" />
        </div>
        <aside className="p-2 ring-1 max-md:flex-1">
          <h3 className="text-lg mb-2">Photo Details</h3>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <span className="font-mono">Title:</span>
              <span>{photo.title}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono">Album:</span>
              <span>{photo.albumId}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
