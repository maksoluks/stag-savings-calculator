import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Marcin K.",
    text: "Pan Adam to fachowiec z prawdziwego zdarzenia. Montaż STAG-a w moim Octavii zrobiony perfekcyjnie, instalacja prawie niewidoczna pod maską. Polecam w 100%.",
  },
  {
    name: "Agnieszka W.",
    text: "Profesjonalna obsługa, uczciwa cena i konkretne podejście do klienta. Auto chodzi jak na benzynie, oszczędność ogromna. Dziękuję!",
  },
  {
    name: "Tomasz P.",
    text: "Najlepszy warsztat LPG w okolicy Lublina. Wszystko wytłumaczone, papiery załatwione, gwarancja na lata. Wracam i polecam znajomym.",
  },
  {
    name: "Kamil R.",
    text: "Świetna robota przy moim BMW. Bezpośredni wtrysk, a wszystko działa bez zarzutu. Pan Adam zna się na rzeczy.",
  },
  {
    name: "Joanna S.",
    text: "Rodzinna atmosfera, uczciwe podejście. Czekam już półtora roku — instalacja chodzi bezawaryjnie. Polecam każdemu.",
  },
  {
    name: "Piotr Z.",
    text: "Wszystko zrobione na czas i porządnie. Cena adekwatna do jakości. 5 gwiazdek w pełni zasłużonych.",
  },
];

export function Reviews() {
  const { t } = useI18n();
  return (
    <section id="opinie" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("reviews.eyebrow")}</span>
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("reviews.title")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("reviews.subtitle")}</p>
        </div>

        <div className="mt-14">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {reviews.map((r, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-foreground/90">"{r.text}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        {r.name.charAt(0)}
                      </div>
                      <div className="text-sm font-semibold">{r.name}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
