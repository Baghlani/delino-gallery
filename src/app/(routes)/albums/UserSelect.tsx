"use client";

import { User } from "@/entities/user/types";
import { useRouter } from "next/navigation";

export function UserSelect({ users }: { users: User[] }) {
  const router = useRouter();

  return (
    <select
      onChange={(e) => {
        const userId = e.target.value;
        if (userId) router.push(`/albums?userId=${userId}`);
        else router.push("/albums");
      }}
    >
      <option value="">All users</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
