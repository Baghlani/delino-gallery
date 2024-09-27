import { Album } from "./types";

export const getAlbums = async (): Promise<Album[]> => {
  const albums = await fetch("https://jsonplaceholder.typicode.com/albums", {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60,
    },
  });
  return albums.json();
};
