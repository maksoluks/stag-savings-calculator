import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — STAG Mechanika Rogowski" },
      { name: "description", content: "Polityka prywatności oraz informacja RODO dla klientów warsztatu STAG Mechanika Rogowski w Jastkowie." },
      { property: "og:title", content: "Polityka prywatności — STAG Mechanika Rogowski" },
      { property: "og:description", content: "Polityka prywatności i RODO." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm text-primary hover:underline">
          {t("privacy.back")}
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{t("privacy.title")}</h1>

        <div className="prose prose-neutral mt-8 max-w-none space-y-5 text-foreground/90 dark:prose-invert">
          {lang === "pl" ? <PrivacyPL /> : <PrivacyEN />}
        </div>
      </main>
    </div>
  );
}

function PrivacyPL() {
  return (
    <>
      <h2 className="text-xl font-semibold">1. Administrator Danych Osobowych</h2>
      <p>
        Administratorem Państwa danych osobowych jest firma Auto Gaz Adam Rogowski z siedzibą w
        Snopków 56A, 21-002 Jastków Poland Kontakt z Administratorem jest możliwy pod adresem e-mail: adam.rogowski.net@gmail.com lub numerem telefonu: 609258834.
      </p>
      <h2 className="text-xl font-semibold">2. Cele i podstawy prawne przetwarzania</h2>
      <p>
        Państwa dane będą przetwarzane w celu:
      </p>
      <p>
      realizacji usługi serwisowej, montażu instalacji LPG oraz wystawienia niezbędnej dokumentacji (podstawa: art. 6 ust. 1 lit. b RODO – wykonanie umowy);
      </p>
      <p>
      wypełnienia obowiązków prawnych ciążących na Administratorze, np. wystawiania faktur i przechowywania dokumentacji księgowej (podstawa: art. 6 ust. 1 lit. c RODO);
      </p>
      <p>
      ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami (podstawa: art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes).
      </p>
      <h2 className="text-xl font-semibold">3. Okres przechowywania danych</h2>
      <p>
        Dane będą przechowywane przez okres niezbędny do realizacji usługi, a po 
        jej zakończeniu przez czas wymagany przepisami prawa podatkowego (5 lat) 
        lub do upływu terminu przedawnienia ewentualnych roszczeń.
      </p>
      <h2 className="text-xl font-semibold">4. Odbiorcy danych</h2>
      <p>
        Odbiorcami Państwa danych mogą być podmioty uprawnione do uzyskania danych 
        na podstawie przepisów prawa, biura rachunkowe, firmy kurierskie oraz dostawcy 
        oprogramowania technicznego niezbędnego do obsługi instalacji gazowych.
      </p>
      <h2 className="text-xl font-semibold">5. Prawa osoby, której dane dotyczą</h2>
      <p>
      Przysługuje Państwu prawo do:
      </p>
      <p>dostępu do swoich danych oraz otrzymania ich kopii;</p>
      <p>usunięcia danych lub ograniczenia ich przetwarzania;</p>
      <p>wniesienia sprzeciwu wobec przetwarzania;</p>
      <p>wniesienia skargi do Organu Nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych.</p>
      <h2 className="text-xl font-semibold">6. Pliki cookies</h2>
      <p>
        Strona internetowa wykorzystuje wyłącznie pliki cookies niezbędne do działania (preferencje
        języka i motywu) oraz osadzony serwis Google Maps. Nie używamy plików cookies do profilowania
        marketingowego.
      </p>
      <h2 className="text-xl font-semibold">7. Dobrowolność podania danych</h2>
      <p> Podanie danych osobowych (takich jak imię, nazwisko, numer rejestracyjny pojazdu, numer telefonu) jest dobrowolne, ale niezbędne do przyjęcia pojazdu do serwisu i wykonania usługi.</p>
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <h2 className="text-xl font-semibold">1. Data controller</h2>
      <p>
        The data controller is STAG Mechanika Rogowski, DW809 56A, 21-002 Jastków, Poland, phone
        +48 609 258 834.
      </p>
      <h2 className="text-xl font-semibold">2. Scope of processed data</h2>
      <p>
        We only process data necessary to provide LPG installation and service — including name,
        phone number, vehicle data, and information required by homologation and tax regulations.
      </p>
      <h2 className="text-xl font-semibold">3. Purpose and legal basis</h2>
      <p>
        Data is processed under Art. 6(1)(b) and (c) GDPR — performance of contract and compliance
        with legal obligations of the controller.
      </p>
      <h2 className="text-xl font-semibold">4. Retention</h2>
      <p>Data is kept for the time required to deliver the service and as required by applicable law.</p>
      <h2 className="text-xl font-semibold">5. Your rights</h2>
      <p>
        You have the right to access, rectify, erase, restrict processing, portability, and to lodge
        a complaint with the supervisory authority.
      </p>
      <h2 className="text-xl font-semibold">6. Cookies</h2>
      <p>
        The website uses only strictly necessary cookies (language and theme preferences) and the
        embedded Google Maps service. We do not use cookies for marketing profiling.
      </p>
      <h2 className="text-xl font-semibold">7. Contact</h2>
      <p>For any data-related matters, please reach out by phone or in person at the workshop.</p>
    </>
  );
}
