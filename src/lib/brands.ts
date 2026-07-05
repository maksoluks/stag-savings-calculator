import bmw1a from "@/assets/brands/BMW_1a.webp";
import bmw1b from "@/assets/brands/BMW_1b.webp";
import honda1a from "@/assets/brands/HONDA_1a.webp";
import honda1b from "@/assets/brands/HONDA_1b.webp";
import honda2a from "@/assets/brands/HONDA_2a.webp";
import honda2b from "@/assets/brands/HONDA_2b.webp";
import skoda1a from "@/assets/brands/SKODA_1a.webp";
import skoda1b from "@/assets/brands/SKODA_1b.webp";
import opel1a from "@/assets/brands/opel_1a.webp";
import opel2b from "@/assets/brands/opel_2b.webp";
import toyota1a from "@/assets/brands/toyota_1a.webp";
import toyota1b from "@/assets/brands/toyota_1b.webp";
import volvo1a from "@/assets/brands/volvo_1a.webp";
import volvo1b from "@/assets/brands/volvo_1b.webp";

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
  {
    id: "bmw",
    name: "BMW",
    slug: "bmw",
    iconSlug: "bmw",
    photos: [
      { src: bmw1a, alt: "Montaż instalacji LPG STAG w samochodzie BMW — ujęcie 1" },
      { src: bmw1b, alt: "Montaż instalacji LPG STAG w samochodzie BMW — ujęcie 2" },
    ],
  },
  { id: "audi", name: "Audi", slug: "audi", iconSlug: "audi", photos: [] },
  { id: "mercedes", name: "Mercedes-Benz", slug: "mercedes", iconSlug: "mercedes", photos: [] },
  { id: "vw", name: "Volkswagen", slug: "volkswagen", iconSlug: "volkswagen", photos: [] },
  {
    id: "toyota",
    name: "Toyota",
    slug: "toyota",
    iconSlug: "toyota",
    photos: [
      { src: toyota1a, alt: "Montaż instalacji LPG STAG w samochodzie Toyota — ujęcie 1" },
      { src: toyota1b, alt: "Montaż instalacji LPG STAG w samochodzie Toyota — ujęcie 2" },
    ],
  },
  { id: "ford", name: "Ford", slug: "ford", iconSlug: "ford", photos: [] },
  {
    id: "opel",
    name: "Opel",
    slug: "opel",
    iconSlug: "opel",
    photos: [
      { src: opel1a, alt: "Montaż instalacji LPG STAG w samochodzie Opel — ujęcie 1" },
      { src: opel2b, alt: "Montaż instalacji LPG STAG w samochodzie Opel — ujęcie 2" },
    ],
  },
  {
    id: "volvo",
    name: "Volvo",
    slug: "volvo",
    iconSlug: "volvo",
    photos: [
      { src: volvo1a, alt: "Montaż instalacji LPG STAG w samochodzie Volvo — ujęcie 1" },
      { src: volvo1b, alt: "Montaż instalacji LPG STAG w samochodzie Volvo — ujęcie 2" },
    ],
  },
  {
    id: "skoda",
    name: "Škoda",
    slug: "skoda",
    iconSlug: "skoda",
    photos: [
      { src: skoda1a, alt: "Montaż instalacji LPG STAG w samochodzie Škoda — ujęcie 1" },
      { src: skoda1b, alt: "Montaż instalacji LPG STAG w samochodzie Škoda — ujęcie 2" },
    ],
  },
  { id: "renault", name: "Renault", slug: "renault", iconSlug: "renault", photos: [] },
  { id: "peugeot", name: "Peugeot", slug: "peugeot", iconSlug: "peugeot", photos: [] },
  {
    id: "honda",
    name: "Honda",
    slug: "honda",
    iconSlug: "honda",
    photos: [
      { src: honda1a, alt: "Montaż instalacji LPG STAG w samochodzie Honda — ujęcie 1" },
      { src: honda1b, alt: "Montaż instalacji LPG STAG w samochodzie Honda — ujęcie 2" },
      { src: honda2a, alt: "Montaż instalacji LPG STAG w samochodzie Honda — ujęcie 3" },
      { src: honda2b, alt: "Montaż instalacji LPG STAG w samochodzie Honda — ujęcie 4" },
    ],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
