export type BrandPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  iconSlug: string;
  photos: BrandPhoto[];
};

export const BRANDS: Brand[] = [
  { id: "bmw", name: "BMW", slug: "bmw", iconSlug: "bmw", photos: [] },
  { id: "audi", name: "Audi", slug: "audi", iconSlug: "audi", photos: [] },
  { id: "mercedes", name: "Mercedes-Benz", slug: "mercedes", iconSlug: "mercedes", photos: [] },
  { id: "vw", name: "Volkswagen", slug: "volkswagen", iconSlug: "volkswagen", photos: [] },
  { id: "toyota", name: "Toyota", slug: "toyota", iconSlug: "toyota", photos: [] },
  { id: "ford", name: "Ford", slug: "ford", iconSlug: "ford", photos: [] },
  { id: "opel", name: "Opel", slug: "opel", iconSlug: "opel", photos: [] },
  { id: "volvo", name: "Volvo", slug: "volvo", iconSlug: "volvo", photos: [] },
  { id: "skoda", name: "Škoda", slug: "skoda", iconSlug: "skoda", photos: [] },
  { id: "renault", name: "Renault", slug: "renault", iconSlug: "renault", photos: [] },
  { id: "peugeot", name: "Peugeot", slug: "peugeot", iconSlug: "peugeot", photos: [] },
  { id: "honda", name: "Honda", slug: "honda", iconSlug: "honda", photos: [] },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
