import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";
import { BrandLogo } from "@/components/BrandLogo";

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

      <nav aria-label={t("brands.title")} className="mt-8 -mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
        <ul className="flex gap-4 sm:grid sm:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <li key={b.id} className="shrink-0">
              <Link
                to="/montaz-lpg/$brandSlug"
                params={{ brandSlug: b.slug }}
                aria-label={`${t("brands.viewLabel")} ${b.name}`}
                className="group flex h-28 w-32 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary hover:bg-accent/40 hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_45%,transparent)] focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:h-32 sm:w-full"
              >
                <BrandLogo
                  brand={b}
                  className="h-10 w-auto opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert dark:group-hover:invert-0"
                />
                <span className="text-xs font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                  {b.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
