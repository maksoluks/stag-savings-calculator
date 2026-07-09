import { useState } from "react";
import type { Brand } from "@/lib/brands";

type Props = {
  brand: Brand;
  className?: string;
};

export function BrandLogo({ brand, className = "" }: Props) {
  const [stage, setStage] = useState<"local" | "cdn" | "fallback">(
    brand.logoUrl ? "local" : "cdn",
  );

  if (stage === "fallback") {
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

  const src =
    stage === "local" && brand.logoUrl
      ? brand.logoUrl
      : `https://cdn.simpleicons.org/${brand.slug}`;

  return (
    <img
      src={src}
      alt={`${brand.name} logo`}
      loading="lazy"
      onError={() => setStage(stage === "local" ? "cdn" : "fallback")}
      className={className}
    />
  );
}
