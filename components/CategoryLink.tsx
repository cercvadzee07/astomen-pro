import Link from "next/link";
import type { Category } from "@/types/category";

/** Category links go to /category/[slug], or open the external site (Star Registry) */
export default function CategoryLink({
  category,
  className,
  onClick,
  children,
}: {
  category: Category;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (category.externalUrl) {
    return (
      <a
        href={category.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={`/category/${category.slug}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
