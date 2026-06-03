import { CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import mechanic from "@/assets/gallery-mechanic.jpg";

export function About() {
  const { t } = useI18n();
  return (
    <section id="o-nas" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative">
          <img
            src={mechanic}
            alt="Adam Rogowski przy pracy"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <div className="text-xs font-medium text-muted-foreground">STAG</div>
                <div className="text-sm font-semibold">Authorized Service</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("about.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("about.title")}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("about.p1")}</p>
          <p className="mt-4 text-lg text-muted-foreground">{t("about.p2")}</p>

          <ul className="mt-8 space-y-3">
            {[
              { icon: <ShieldCheck className="h-5 w-5 text-primary" />, label: t("about.b1") },
              { icon: <Wrench className="h-5 w-5 text-primary" />, label: t("about.b2") },
              { icon: <CheckCircle2 className="h-5 w-5 text-primary" />, label: t("about.b3") },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-3 text-foreground">
                {b.icon}
                <span className="font-medium">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
