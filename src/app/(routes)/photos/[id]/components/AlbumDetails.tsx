"use client";

import { Album } from "@/entities/album/types";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const endpoint = "https://jsonplaceholder.typicode.com";
// Just an example of using client-side data fetching with SWR
// this operation could be done in the main page with
export const AlbumDetails = ({ albumId }: { albumId: number }) => {
  const { data, error } = useSWR<Album>(`${endpoint}/albums/${albumId}`, fetcher);

  if (error) return <div className="text-red-500">Failed to load album title</div>;
  return (
    <div className="flex flex-col space-y-1">
      <span className="font-light">Album:</span>
      {data ? (
        <Link href={`/albums/${data.id}`} data-testid="photo-album-link">
          {data.title}
        </Link>
      ) : (
        <div className="mt-2 h-3 w-3/4 animate-pulse rounded-lg bg-gray-500" />
      )}
    </div>
  );
};
