import { Album } from "./types";

export const getAlbums = async (): Promise<Album[]> => {
  const albums = await fetch("https://jsonplaceholder.typicode.com/albums");
  return albums.json();
};

export const getAlbum = async (id: number): Promise<Album> => {
  const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  return album.json();
};
