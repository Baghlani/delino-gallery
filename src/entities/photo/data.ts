const getPhotos = async (albumId: number): Promise<Photo[]> => {
  const photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {
    cache: "force-cache",
  });
  return photos.json();
};

export const getPhoto = async (id: number): Promise<Photo> => {
  const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    cache: "force-cache",
  });
  return photo.json();
};
