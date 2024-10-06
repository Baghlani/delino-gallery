"use client";

import { SelectBox } from "@/components/SelectBox";
import { User } from "@/entities/user/types";
import { useRouter, useSearchParams } from "next/navigation";

export function UserSelect({ users }: { users: User[] }) {
  const router = useRouter();
  const selectedUser = useSearchParams().get("userId");

  return (
    <SelectBox
      placeholder="Select a user"
      items={users.map((user) => ({ value: user.id.toString(), label: user.name }))}
      selected={selectedUser ?? "0"}
      onChange={(value) => {
        if (value !== "0") router.push(`/albums?userId=${value}`);
        else router.push("/albums");
      }}
    />
  );
}
