import { Photo } from "./types";

export const getPhotos = async (albumId: number): Promise<Photo[]> => {
  const photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60,
    },
  });
  return photos.json();
};

export const getPhoto = async (id: number): Promise<Photo> => {
  const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60,
    },
  });
  return photo.json();
};
