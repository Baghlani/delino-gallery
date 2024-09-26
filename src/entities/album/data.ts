export const getAlbums = async (): Promise<Album[]> => {
  const albums = await fetch("https://jsonplaceholder.typicode.com/albums", {
    cache: "force-cache",
  });
  return albums.json();
};