import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { BRANDS, getBrandBySlug } from "@/lib/brands";
import { useI18n } from "@/lib/i18n";
import { BrandLogo } from "@/components/BrandLogo";
import { BrandGallery } from "@/components/BrandGallery";

export const Route = createFileRoute("/montaz-lpg/$brandSlug")({
  loader: ({ params }) => {
    const brand = getBrandBySlug(params.brandSlug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.brand.name ?? "LPG";
    return {
      meta: [
        { title: `Montaż LPG ${name} — STAG Mechanika Rogowski · Jastków` },
        {
          name: "description",
          content: `Profesjonalny montaż instalacji LPG w samochodach ${name}. Autoryzowany Serwis STAG w Jastkowie. Wycena gratis.`,
        },
        { property: "og:title", content: `Montaż LPG ${name} — STAG Jastków` },
        {
          property: "og:description",
          content: `Autoryzowany montaż i serwis instalacji LPG STAG w samochodach ${name}.`,
        },
      ],
    };
  },
  component: BrandPage,
  notFoundComponent: BrandNotFound,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            {t("nav.gallery")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{brand.name}</span>
        </nav>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-border bg-card">
            <BrandLogo brand={brand} className="h-14 w-auto" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {t("hero.eyebrow")}
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Montaż LPG {brand.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Autoryzowany montaż instalacji STAG w samochodach {brand.name}. Czysty, estetyczny
              montaż, pełna gwarancja i wieloletnie doświadczenie.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Realizacje</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Nasze montaże instalacji LPG w samochodach {brand.name}.
          </p>
          <div className="mt-6">
            <BrandGallery photos={brand.photos} brandName={brand.name} />
          </div>
        </section>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Inne marki</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
              <li key={b.slug}>
                <Link
                  to="/montaz-lpg/$brandSlug"
                  params={{ brandSlug: b.slug }}
                  className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

function BrandNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-foreground">Marka nieznana</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Nie znaleźliśmy tej marki na liście. Sprawdź galerię marek.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Wróć do galerii
        </Link>
      </div>
    </div>
  );
}
