import { getUsers } from "@/entities/user/data";
import { notFound } from "next/navigation";
import { getAlbums } from "../../../entities/album/data";
import AlbumsList from "./components/AlbumsList";
import UserSelect from "./components/UserSelect";

export const revalidate = 86400; //1 day in seconds

export const generateMetadata = async ({
  searchParams: { userId },
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  const users = await getUsers();
  const userName = userId && users.find((user) => user.id === +userId)?.name;

  return {
    title: `${userName ? `${userName}'s ` : ""}Albums list | Delino Gallery`,
    description: `a list of Delino's albums ${userName && `from ${userName}`}`,
  };
};

export default async function AlbumsListPage({
  searchParams: { userId },
}: {
  searchParams: { userId: string };
}) {
  const albums = await getAlbums(+userId);
  const users = await getUsers();
  const userName = userId && users.find((user) => user.id === +userId)?.name;

  if (userId && !userName) return notFound();

  return (
    <div className="pb-8">
      <div className="mb-4 space-y-2">
        <h1 className="font-extraligh text-xl text-white md:text-2xl">
          Discover {albums.length} albums {userId && `from ${userName}`}
        </h1>
      </div>
      <UserSelect users={users} />
      <AlbumsList albums={albums} />
    </div>
  );
}
