import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Calculator } from "@/components/sections/Calculator";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STAG Mechanika Rogowski — Autoryzowany montaż LPG · Jastków" },
      {
        name: "description",
        content:
          "Rodzinny warsztat i Autoryzowany Serwis STAG w Jastkowie. Profesjonalny montaż i serwis instalacji LPG. Wycena gratis. Tel. 609 258 834.",
      },
      { property: "og:title", content: "STAG Mechanika Rogowski — Autoryzowany montaż LPG · Jastków" },
      {
        property: "og:description",
        content: "Profesjonalny montaż instalacji LPG. Autoryzowany Serwis STAG. 4.9/5 w Google.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Calculator />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
