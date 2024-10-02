import Button from "@/components/Button";
import { getPhoto } from "@/entities/photo/data";
import { Photo } from "@/entities/photo/types";
import Image from "next/image";
import { HiChevronLeft } from "react-icons/hi2";
import { AlbumDetails } from "./components/AlbumDetails";

export const dynamic = "force-static";
export const revalidate = 3600;

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const photo: Photo = await getPhoto(+id);
  return {
    title: `${photo.title} | Delino Gallery`,
    description: `photo: ${photo.title} | this is a description of the photo`,
  };
};

export default async function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = await getPhoto(+id);
  return (
    <div className="flex h-[calc(100dvh-var(--layout-padding-mobile)-var(--layout-padding-mobile))] flex-col md:h-[calc(100dvh-var(--layout-padding)-var(--layout-padding))]">
      <Button type="outlined" href={`/albums/${photo.albumId}`} className="mb-5 space-x-2 ps-2">
        <HiChevronLeft className="size-4" />
        <div>Back to album #{photo.albumId}</div>
      </Button>
      <h1 className="mb-3 text-lg sm:text-xl text-white/90 md:text-2xl">{photo.title}</h1>
      <div className="flex flex-1 flex-col md:grid md:grid-cols-[1fr_270px] lg:grid-cols-[1fr_340px]">
        <div className="relative min-h-[300px] flex-[2_1_0%] overflow-hidden max-md:rounded-t-lg md:rounded-l-lg">
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            className="object-cover"
            data-testid="photo-img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, (max-width: 1400px) 75vw, 100vw"
          />
        </div>
        <aside className="mb-2 p-4 text-white/90 ring-1 max-md:flex-1 max-md:rounded-b-lg md:rounded-r-lg">
          <h3 className="mb-2 text-lg font-semibold">Photo Details</h3>
          <div className="my-5 flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="font-light">Title:</span>
              <span>{photo.title}</span>
            </div>
            <AlbumDetails albumId={photo.albumId} />
          </div>
        </aside>
      </div>
    </div>
  );
}
