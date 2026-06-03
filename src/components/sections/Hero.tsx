import { Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-workshop.jpg";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/85 via-black/70 to-black/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.25),transparent_55%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
            {t("hero.eyebrow")}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{t("hero.subtitle")}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+48609258834"
              className="cta-pulse group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              {t("hero.cta")}
            </a>
            <span className="text-sm text-white/60">{t("hero.cta_sub")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
