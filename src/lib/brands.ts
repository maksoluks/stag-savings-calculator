// Automatyczne wykrywanie marek i zdjęć.
//
// Jak dodać nową markę:
//   1. Wrzuć logo do  src/assets/brand-logos/{Nazwa}.svg  (np. "BMW.svg", "Mercedes-Benz.svg").
//      Nazwa marki = nazwa pliku bez rozszerzenia. Slug = ta sama nazwa zamieniona na małe litery.
//
// Jak dodać zdjęcia realizacji dla marki:
//   1. Utwórz (jeśli nie istnieje) folder  src/assets/brands/{slug}/  (np. "bmw", "mercedes-benz").
//   2. Wrzuć tam pliki .webp / .jpg / .jpeg / .png / .avif — pojawią się automatycznie w galerii.
//
// Marka pojawi się na liście, jeśli istnieje dla niej logo LUB folder ze zdjęciami.

export type BrandPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  /** Lokalne logo (URL). Puste = użyj fallbacku (simpleicons.org, potem inicjał). */
  logoUrl?: string;
  photos: BrandPhoto[];
};

// Wszystkie logo w src/assets/brand-logos/
const logoModules = import.meta.glob(
  "@/assets/brand-logos/*.{svg,png,webp,jpg,jpeg,avif}",
  { eager: true, import: "default", query: "?url" },
) as Record<string, string>;

// Wszystkie zdjęcia w src/assets/brands/{slug}/*
const photoModules = import.meta.glob(
  "@/assets/brands/*/*.{webp,jpg,jpeg,png,avif}",
  { eager: true, import: "default" },
) as Record<string, string>;

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type Draft = {
  name: string;
  slug: string;
  logoUrl?: string;
  photos: BrandPhoto[];
};

const brandsMap = new Map<string, Draft>();

// 1) Marki z lokalnych logo
for (const [path, url] of Object.entries(logoModules)) {
  const filename = path.split("/").pop() ?? "";
  const name = filename.replace(/\.[^.]+$/, "");
  const slug = slugify(name);
  if (!slug) continue;
  const existing = brandsMap.get(slug);
  if (existing) {
    existing.logoUrl = url;
    existing.name = name;
  } else {
    brandsMap.set(slug, { name, slug, logoUrl: url, photos: [] });
  }
}

// 2) Zdjęcia z folderów src/assets/brands/{slug}/
for (const [path, url] of Object.entries(photoModules)) {
  const parts = path.split("/");
  const folder = parts[parts.length - 2] ?? "";
  const slug = slugify(folder);
  if (!slug) continue;

  const filename = parts[parts.length - 1] ?? "";
  const baseName = filename.replace(/\.[^.]+$/, "");

  let entry = brandsMap.get(slug);
  if (!entry) {
    entry = { name: capitalize(folder), slug, photos: [] };
    brandsMap.set(slug, entry);
  }
  entry.photos.push({
    src: url,
    alt: `Montaż instalacji LPG STAG — ${entry.name} (${baseName})`,
  });
}

// Stabilne sortowanie zdjęć po nazwie pliku (naturalne)
for (const b of brandsMap.values()) {
  b.photos.sort((a, z) =>
    a.src.localeCompare(z.src, undefined, { numeric: true, sensitivity: "base" }),
  );
}

export const BRANDS: Brand[] = Array.from(brandsMap.values())
  .sort((a, z) => a.name.localeCompare(z.name, "pl"))
  .map((b) => ({ id: b.slug, name: b.name, slug: b.slug, logoUrl: b.logoUrl, photos: b.photos }));

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
