import Button from "@/components/Button";
import { getPhoto } from "@/entities/photo/data";
import { Photo } from "@/entities/photo/types";
import Image from "next/image";
import { HiChevronLeft } from "react-icons/hi2";

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const photo: Photo = await getPhoto(+id);
  return {
    title: `${photo.title} | Delino Gallery`,
    description: `photo: ${photo.title} | this is a description of the photo`,
  };
};

export default async function PhotoDetailPage({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = await getPhoto(+id);
  return (
    <div className="flex h-[calc(100dvh-var(--layout-padding-mobile)-var(--layout-padding-mobile))] flex-col md:h-[calc(100dvh-var(--layout-padding)-var(--layout-padding))]">
      <Button type="outlined" href={`/albums/${photo.albumId}`} className="mb-5 space-x-2 ps-2">
        <HiChevronLeft className="size-4" />
        <div>Back to album #{photo.albumId}</div>
      </Button>
      <h1 className="mb-3 text-xl text-white/90 md:text-2xl">{photo.title}</h1>
      <div className="flex flex-1 flex-col md:grid md:grid-cols-[1fr_270px] lg:grid-cols-[1fr_340px]">
        <div className="relative flex-[2_1_0%] overflow-hidden max-md:rounded-t-lg md:rounded-l-lg">
          <Image src={photo.url} alt={photo.title} fill className="object-cover" />
        </div>
        <aside className="p-4 text-white/90 ring-1 max-md:flex-1 max-md:rounded-b-lg md:rounded-r-lg">
          <h3 className="mb-2 text-lg">Photo Details</h3>
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
