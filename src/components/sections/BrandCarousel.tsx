import { useI18n } from "@/lib/i18n";

type Brand = { name: string; slug: string };

const BRANDS: Brand[] = [
  { name: "BMW", slug: "bmw" },
  { name: "Audi", slug: "audi" },
  { name: "Mercedes-Benz", slug: "mercedes" },
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "Toyota", slug: "toyota" },
  { name: "Ford", slug: "ford" },
  { name: "Opel", slug: "opel" },
  { name: "Volvo", slug: "volvo" },
  { name: "Škoda", slug: "skoda" },
  { name: "Renault", slug: "renault" },
  { name: "Peugeot", slug: "peugeot" },
  { name: "Honda", slug: "honda" },
];

export function BrandCarousel() {
  const { t } = useI18n();
  return (
    <div className="mb-16">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t("brands.title")}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{t("brands.subtitle")}</p>
      </div>

      <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
        <ul className="flex gap-4 sm:grid sm:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <li key={b.slug} className="shrink-0">
              <div
                className="group flex h-28 w-32 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_45%,transparent)] sm:h-32 sm:w-full"
              >
                <img
                  src={`https://cdn.simpleicons.org/${b.slug}`}
                  alt={`${b.name} logo`}
                  loading="lazy"
                  className="h-10 w-auto opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert dark:group-hover:invert-0"
                />
                <span className="text-xs font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                  {b.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
