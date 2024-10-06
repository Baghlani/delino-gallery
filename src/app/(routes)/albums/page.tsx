import { getUsers } from "@/entities/user/data";
import Link from "next/link";
import { getAlbums } from "../../../entities/album/data";
import { UserSelect } from "./components/UserSelect";

export const generateStaticParams = async () => {
  const users = await getUsers();
  return users.map((user) => ({ userId: user.id.toString() }));
};

export const dynamicParams = false;

export const revalidate = 86400; //1 day in seconds

export const generateMetadata = async ({
  searchParams: { userId },
}: {
  searchParams: { userId: string };
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
  return (
    <div className="pb-8">
      <div className="mb-4 space-y-2">
        <h1 className="font-extraligh text-xl text-white md:text-2xl">
          Discover {albums.length} albums{" "}
          {userId && `from ${users.find((user) => user.id === +userId)?.name}`}
        </h1>
      </div>
      <UserSelect users={users} />
      <div className="mt-3 flex flex-col space-y-4 text-neutral-300 md:text-lg">
        {albums.map((album) => (
          <Link key={album.id} href={`/albums/${album.id}`} prefetch={true}>
            <div className="font-mono text-[15px] text-neutral-100/50">Album #{album.id}</div>
            <h2>{album.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
