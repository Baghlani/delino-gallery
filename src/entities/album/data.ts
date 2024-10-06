import { Album } from "./types";

export const getAlbums = async (userId?: number): Promise<Album[]> => {
  const url: string = userId
    ? `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    : "https://jsonplaceholder.typicode.com/albums";

  return await (await fetch(url)).json();
};

export const getAlbum = async (id: number): Promise<Album> => {
  const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  return album.json();
};
