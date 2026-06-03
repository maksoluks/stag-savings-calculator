import { useI18n } from "@/lib/i18n";
import engine from "@/assets/gallery-engine1.jpg";
import car from "@/assets/gallery-car1.jpg";
import tank from "@/assets/gallery-tank.jpg";
import suv from "@/assets/gallery-suv.jpg";
import mechanic from "@/assets/gallery-mechanic.jpg";

export function Gallery() {
  const { t } = useI18n();
  return (
    <section id="galeria" className="border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("gallery.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("gallery.title")}</h2>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          <Tile src={mechanic} className="col-span-2 row-span-2" alt="Mechanic" />
          <Tile src={engine} className="col-span-2" alt="LPG engine install" />
          <Tile src={tank} alt="LPG tank" />
          <Tile src={car} alt="Car" />
          <Tile src={suv} className="col-span-2" alt="SUV on lift" />
        </div>
      </div>
    </section>
  );
}

function Tile({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-card shadow-sm ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
