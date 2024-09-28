"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Error() {
  const { back } = useRouter();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5 text-white/90">
      <h2 className="text-4xl font-bold">Oops! Something went wrong</h2>
      <p className="text-lg">tell the support team there is a 500 error :/</p>

      <Button onClick={() => back()}>Go back</Button>
    </div>
  );
}
