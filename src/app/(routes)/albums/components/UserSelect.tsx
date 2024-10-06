"use client";

import { SelectBox } from "@/components/SelectBox";
import { User } from "@/entities/user/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { ImSpinner10 } from "react-icons/im";

export default function UserSelect({ users }: { users: User[] }) {
  const router = useRouter();
  const selectedUser = useSearchParams().get("userId");
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center space-x-2">
      <SelectBox
        placeholder="Select a user"
        items={users.map((user) => ({ value: user.id.toString(), label: user.name }))}
        selected={selectedUser ?? "0"}
        onChange={(value) => {
          startTransition(() => {
            if (value !== "0") router.push(`/albums?userId=${value}`);
            else router.push("/albums");
          });
        }}
      />
      {isPending && <ImSpinner10 className="animate-spin text-xl text-white" />}
    </div>
  );
}
