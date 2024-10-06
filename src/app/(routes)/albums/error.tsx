"use client";

import Button from "@/components/Button";

export default function Error() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5 text-white/90">
      <h2 className="text-4xl font-bold">Oops! there is an error</h2>
      <p className="text-lg">we can't fetch the albums, pleasetry again later :/</p>
      <div className="flex space-x-2 max-[480px]:!mt-6 max-[480px]:flex-col max-[480px]:space-x-0 max-[480px]:space-y-2 max-[480px]:self-start">
        <Button onClick={() => (window.location.href = "/albums")}>View all Albums</Button>
        <Button onClick={() => window.location.reload()}>Refresh the page</Button>
      </div>
    </div>
  );
}
