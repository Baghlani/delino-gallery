import { cn } from "@/lib/cn";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  type?: "solid" | "outlined";
  children: React.ReactNode;
} & ({ href: string; onClick?: never } | { onClick: () => void; href?: never });

export default function Button({
  className,
  type = "solid",
  href,
  onClick,
  children,
}: ButtonProps) {
  const Component: React.ElementType = href ? Link : "button";
  const baseClasses =
    "inline-flex items-center justify-center rounded-md py-2 transition-all duration-300 space-x-2 hover:shadow-lg";
  const solidClasses = "bg-white px-8 font-semibold text-black hover:shadow-white/50";
  const outlinedClasses =
    "self-start bg-transparent text-white ring-2 hover:shadow-[var(--tw-ring-color)] font-light px-4";
  return (
    <Component
      className={cn(
        baseClasses,
        {
          [solidClasses]: type === "solid",
          [outlinedClasses]: type === "outlined",
        },
        className,
      )}
      {...(href ? { href } : { onClick })}
    >
      {children}
    </Component>
  );
}
