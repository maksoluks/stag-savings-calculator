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
      <h2 className="text-xl font-semibold">1. Administrator danych</h2>
      <p>
        Administratorem danych osobowych jest STAG Mechanika Rogowski, DW809 56A, 21-002 Jastków,
        tel. 609 258 834.
      </p>
      <h2 className="text-xl font-semibold">2. Zakres przetwarzanych danych</h2>
      <p>
        Przetwarzamy wyłącznie dane niezbędne do realizacji usługi montażu i serwisu instalacji LPG —
        m.in. imię i nazwisko, numer telefonu, dane pojazdu oraz dane wymagane przez przepisy
        homologacyjne i podatkowe.
      </p>
      <h2 className="text-xl font-semibold">3. Cel i podstawa prawna</h2>
      <p>
        Dane przetwarzamy na podstawie art. 6 ust. 1 lit. b i c RODO — w celu wykonania umowy oraz
        realizacji obowiązków prawnych ciążących na administratorze (m.in. wystawianie faktur,
        prowadzenie dokumentacji warsztatowej).
      </p>
      <h2 className="text-xl font-semibold">4. Czas przechowywania</h2>
      <p>
        Dane przechowujemy przez czas niezbędny do wykonania usługi oraz przez okres wymagany
        odrębnymi przepisami, w szczególności podatkowymi i homologacyjnymi.
      </p>
      <h2 className="text-xl font-semibold">5. Twoje prawa</h2>
      <p>
        Masz prawo dostępu do treści swoich danych, ich sprostowania, usunięcia, ograniczenia
        przetwarzania, przenoszenia oraz wniesienia skargi do Prezesa UODO.
      </p>
      <h2 className="text-xl font-semibold">6. Pliki cookies</h2>
      <p>
        Strona internetowa wykorzystuje wyłącznie pliki cookies niezbędne do działania (preferencje
        języka i motywu) oraz osadzony serwis Google Maps. Nie używamy plików cookies do profilowania
        marketingowego.
      </p>
      <h2 className="text-xl font-semibold">7. Kontakt</h2>
      <p>W sprawach dotyczących danych osobowych zapraszamy do kontaktu telefonicznego lub osobistego w warsztacie.</p>
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
