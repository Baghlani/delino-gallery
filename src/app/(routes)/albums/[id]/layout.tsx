import Button from "@/components/Button";
import { HiChevronLeft } from "react-icons/hi2";

export default function AlbumLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Button type="outlined" href="/albums" className="mb-4 space-x-2 ps-2">
        <HiChevronLeft className="size-4" />
        <div>Back to albums</div>
      </Button>
      {children}
    </>
  );
}
