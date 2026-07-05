export type Brand = {
  id: string;
  name: string;
  slug: string;
  iconSlug: string;
};

export const BRANDS: Brand[] = [
  { id: "bmw", name: "BMW", slug: "bmw", iconSlug: "bmw" },
  { id: "audi", name: "Audi", slug: "audi", iconSlug: "audi" },
  { id: "mercedes", name: "Mercedes-Benz", slug: "mercedes", iconSlug: "mercedes" },
  { id: "vw", name: "Volkswagen", slug: "volkswagen", iconSlug: "volkswagen" },
  { id: "toyota", name: "Toyota", slug: "toyota", iconSlug: "toyota" },
  { id: "ford", name: "Ford", slug: "ford", iconSlug: "ford" },
  { id: "opel", name: "Opel", slug: "opel", iconSlug: "opel" },
  { id: "volvo", name: "Volvo", slug: "volvo", iconSlug: "volvo" },
  { id: "skoda", name: "Škoda", slug: "skoda", iconSlug: "skoda" },
  { id: "renault", name: "Renault", slug: "renault", iconSlug: "renault" },
  { id: "peugeot", name: "Peugeot", slug: "peugeot", iconSlug: "peugeot" },
  { id: "honda", name: "Honda", slug: "honda", iconSlug: "honda" },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
