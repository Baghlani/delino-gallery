"use client";

import { Album } from "@/entities/album/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

export default function AlbumsList({ albums }: { albums: Album[] }) {
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent} className="mt-3 flex flex-col space-y-4 text-neutral-300 md:text-lg">
      {albums.map((album) => (
        <Link key={album.id} href={`/albums/${album.id}`} prefetch={true}>
          <div className="font-mono text-[15px] text-neutral-100/50">Album #{album.id}</div>
          <h2>{album.title}</h2>
        </Link>
      ))}
    </div>
  );
}
