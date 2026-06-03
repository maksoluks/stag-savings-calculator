import { useMemo, useState } from "react";
import { Fuel, PiggyBank, TrendingUp, Timer } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useI18n } from "@/lib/i18n";

const PETROL_PRICE = 6.4; // PLN/L
const LPG_PRICE = 3.2;
const LPG_OVERHEAD = 1.17;
const INSTALL_COST = 3500;

function fmtPLN(v: number) {
  return new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(Math.max(0, v)) + " zł";
}

export function Calculator() {
  const { t } = useI18n();
  const [km, setKm] = useState(2000);
  const [cons, setCons] = useState(8);

  const { monthly, yearly, payback } = useMemo(() => {
    const petrol = (km / 100) * cons * PETROL_PRICE;
    const lpg = (km / 100) * cons * LPG_OVERHEAD * LPG_PRICE;
    const monthly = petrol - lpg;
    return {
      monthly,
      yearly: monthly * 12,
      payback: monthly > 0 ? INSTALL_COST / monthly : 0,
    };
  }, [km, cons]);

  return (
    <section id="kalkulator" className="border-y border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Fuel className="h-3.5 w-3.5" /> LPG
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("calc.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("calc.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-foreground">{t("calc.km")}</label>
                  <span className="text-2xl font-bold tabular-nums text-primary">
                    {km.toLocaleString("pl-PL")} {t("calc.kmUnit")}
                  </span>
                </div>
                <Slider
                  value={[km]}
                  onValueChange={(v) => setKm(v[0])}
                  min={200}
                  max={8000}
                  step={100}
                  className="mt-4"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-foreground">{t("calc.cons")}</label>
                  <span className="text-2xl font-bold tabular-nums text-primary">
                    {cons.toFixed(1)} {t("calc.consUnit")}
                  </span>
                </div>
                <Slider
                  value={[cons * 10]}
                  onValueChange={(v) => setCons(v[0] / 10)}
                  min={40}
                  max={200}
                  step={1}
                  className="mt-4"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-3 sm:grid-cols-3">
            <ResultCard icon={<PiggyBank className="h-5 w-5" />} label={t("calc.monthly")} value={fmtPLN(monthly)} />
            <ResultCard icon={<TrendingUp className="h-5 w-5" />} label={t("calc.yearly")} value={fmtPLN(yearly)} highlight />
            <ResultCard
              icon={<Timer className="h-5 w-5" />}
              label={t("calc.payback")}
              value={`${Math.ceil(payback)} ${t("calc.months")}`}
            />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t("calc.note")}</p>
      </div>
    </section>
  );
}

function ResultCard({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-colors ${
        highlight
          ? "border-primary/40 bg-primary text-primary-foreground"
          : "border-border bg-card text-card-foreground"
      }`}
    >
      <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {icon}
        {label}
      </div>
      <div className="mt-6 text-3xl font-bold tabular-nums sm:text-4xl">{value}</div>
    </div>
  );
}
