import type { BrandPhoto } from "@/lib/brands";

type Props = {
  photos: BrandPhoto[];
  brandName: string;
};

export function BrandGallery({ photos, brandName }: Props) {
  if (photos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
        <p className="text-base font-medium text-foreground">
          Wkrótce dodamy realizacje dla marki {brandName}.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Chcesz zobaczyć zdjęcia montażu w Twoim modelu? Zadzwoń:{" "}
          <a href="tel:+48609258834" className="font-semibold text-primary hover:underline">
            609 258 834
          </a>
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {photos.map((p, i) => (
        <li
          key={i}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card shadow-sm"
        >
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {p.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-xs font-medium text-white">{p.caption}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
