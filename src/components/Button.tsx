import Link from "next/link";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & ({ href: string; onClick?: never } | { onClick: () => void; href?: never });

export default function Button({
  className,
  href,
  onClick,
  children,
}: ButtonProps) {
  const Component: React.ElementType = href ? Link : "button";
  return (
    <Component
      className="mx-auto block w-fit rounded-md bg-white px-8 py-2 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/50"
      {...(href ? { href } : { onClick })}
    >
      {children}
    </Component>
  );
}
