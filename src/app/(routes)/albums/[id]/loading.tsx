import { ImSpinner10 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ImSpinner10 className="animate-spin text-7xl text-white" />
    </div>
  );
}
