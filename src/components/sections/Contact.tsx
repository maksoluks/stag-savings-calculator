import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Facebook } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="kontakt" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
        <div className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("contact.title")}</h2>

          <div className="mt-10 space-y-7">
            <ContactRow icon={<Phone className="h-5 w-5" />} label={t("contact.phone")}>
              <a href="tel:+48609258834" className="text-xl font-semibold text-foreground hover:text-primary">
                609 258 834
              </a>
            </ContactRow>
            <ContactRow icon={<Clock className="h-5 w-5" />} label={t("contact.hours")}>
              <p className="whitespace-pre-line text-foreground/90">{t("contact.hoursValue")}</p>
            </ContactRow>
            <ContactRow icon={<MapPin className="h-5 w-5" />} label={t("contact.address")}>
              <p className="text-foreground/90">{t("contact.addressValue")}</p>
            </ContactRow>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Facebook className="h-4 w-4" /> {t("contact.fb")}
            </a>
            <Link
              to="/privacy"
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {t("contact.rodo")}
            </Link>
          </div>
        </div>

        <div className="map-invert min-h-[420px] lg:min-h-full">
          <iframe
            title="Mapa - STAG Rogowski Jastków"
            src="https://www.google.com/maps?q=DW809+56A,+21-002+Jastk%C3%B3w&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} STAG Mechanika Rogowski. {t("footer.rights")}</p>
          <Link to="/privacy" className="hover:text-foreground">
            {t("contact.rodo")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
