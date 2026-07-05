import { useState } from "react";
import type { Brand } from "@/lib/brands";

type Props = {
  brand: Brand;
  className?: string;
};

export function BrandLogo({ brand, className = "" }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        aria-hidden="true"
        className={`flex items-center justify-center rounded-md bg-muted font-bold text-muted-foreground ${className}`}
        style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
      >
        {brand.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${brand.iconSlug}`}
      alt={`${brand.name} logo`}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
