import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pl" | "en";

const dict = {
  pl: {
    "nav.calc": "Kalkulator",
    "nav.about": "O nas",
    "nav.gallery": "Galeria",
    "nav.reviews": "Opinie",
    "nav.contact": "Kontakt",
    "brand.name": "STAG Mechanika Rogowski",
    "brand.tag": "Autoryzowany Serwis STAG · Jastków",

    "hero.eyebrow": "Autoryzowany Serwis STAG",
    "hero.title": "Profesjonalny montaż instalacji LPG. Realna oszczędność na każdym kilometrze.",
    "hero.subtitle": "Rodzinny warsztat z wieloletnim doświadczeniem. Czysty, estetyczny montaż, gwarancja i serwis na lata.",
    "hero.cta": "Zadzwoń teraz: 609 258 834",
    "hero.cta_sub": "Wycena gratis · od wtorku 07:00",

    "calc.title": "Policz, ile zaoszczędzisz",
    "calc.subtitle": "Przesuń suwaki i zobacz, jak szybko inwestycja się zwróci.",
    "calc.km": "Miesięczny przebieg",
    "calc.cons": "Średnie spalanie",
    "calc.kmUnit": "km",
    "calc.consUnit": "l / 100 km",
    "calc.monthly": "Oszczędność miesięczna",
    "calc.yearly": "Oszczędność roczna",
    "calc.payback": "Zwrot instalacji",
    "calc.months": "mies.",
    "calc.note": "Założenia: benzyna 6,40 zł/l · LPG 3,20 zł/l · LPG pali o ~17% więcej · średni montaż 3 500 zł. Wartości orientacyjne.",

    "about.eyebrow": "O nas",
    "about.title": "Rodzinny warsztat. Konkretne, uczciwe podejście.",
    "about.p1": "Od lat zajmujemy się montażem i serwisem instalacji LPG. Pan Adam zna każdą śrubkę pod maską — od klasyków po nowoczesne silniki bezpośredniego wtrysku.",
    "about.p2": "Jako Autoryzowany Serwis STAG montujemy wyłącznie sprawdzone komponenty, z pełną gwarancją producenta i fachowym serwisem na lata.",
    "about.b1": "Autoryzowany Serwis STAG",
    "about.b2": "Gwarancja na montaż",
    "about.b3": "Wycena gratis",

    "gallery.eyebrow": "Galeria",
    "gallery.title": "Czysto, estetycznie, na lata.",
    "brands.title": "Wybierz markę swojego samochodu",
    "brands.subtitle": "Montujemy instalacje LPG w samochodach każdej marki — od klasyków po nowoczesne silniki bezpośredniego wtrysku.",

    "reviews.eyebrow": "Opinie Google",
    "reviews.title": "Nasza ocena to 4.9 / 5",
    "reviews.subtitle": "na podstawie ponad 140 opinii w Google",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Wpadnij do warsztatu lub zadzwoń",
    "contact.phone": "Telefon",
    "contact.hours": "Godziny otwarcia",
    "contact.hoursValue": "Wtorek – Piątek: 07:00 – 17:00\nSobota: 08:00 – 13:00\nNiedziela – Poniedziałek: zamknięte",
    "contact.address": "Adres",
    "contact.addressValue": "DW809 56A, 21-002 Jastków",
    "contact.fb": "Facebook",
    "contact.rodo": "Polityka prywatności / RODO",

    "footer.rights": "Wszelkie prawa zastrzeżone.",

    "privacy.title": "Polityka prywatności i RODO",
    "privacy.back": "← Powrót do strony głównej",
  },
  en: {
    "nav.calc": "Calculator",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "brand.name": "STAG Rogowski Mechanic",
    "brand.tag": "Authorized STAG Service · Jastków",

    "hero.eyebrow": "Authorized STAG Service",
    "hero.title": "Professional LPG installations. Real savings on every kilometer.",
    "hero.subtitle": "A family-run workshop with years of experience. Clean, tidy installs, full warranty and long-term service.",
    "hero.cta": "Call now: +48 609 258 834",
    "hero.cta_sub": "Free quote · open from Tuesday 07:00",

    "calc.title": "See how much you'll save",
    "calc.subtitle": "Drag the sliders and watch the payback time drop.",
    "calc.km": "Monthly mileage",
    "calc.cons": "Average consumption",
    "calc.kmUnit": "km",
    "calc.consUnit": "L / 100 km",
    "calc.monthly": "Monthly savings",
    "calc.yearly": "Yearly savings",
    "calc.payback": "Install payback",
    "calc.months": "mo.",
    "calc.note": "Assumptions: petrol 6.40 PLN/L · LPG 3.20 PLN/L · LPG burns ~17% more · average install 3,500 PLN. Indicative figures.",

    "about.eyebrow": "About",
    "about.title": "Family workshop. Straightforward, honest service.",
    "about.p1": "We've been fitting and servicing LPG systems for years. Adam knows every bolt under the hood — from classics to modern direct-injection engines.",
    "about.p2": "As an Authorized STAG Service we use only certified components, with full manufacturer warranty and proper long-term support.",
    "about.b1": "Authorized STAG Service",
    "about.b2": "Warranty on every install",
    "about.b3": "Free quote",

    "gallery.eyebrow": "Gallery",
    "gallery.title": "Clean, tidy, built to last.",
    "brands.title": "Choose your car brand",
    "brands.subtitle": "We fit LPG systems in cars of every make — from classics to modern direct-injection engines.",

    "reviews.eyebrow": "Google Reviews",
    "reviews.title": "Our rating is 4.9 / 5",
    "reviews.subtitle": "based on 140+ Google reviews",

    "contact.eyebrow": "Contact",
    "contact.title": "Drop by the workshop or give us a call",
    "contact.phone": "Phone",
    "contact.hours": "Opening hours",
    "contact.hoursValue": "Tuesday – Friday: 07:00 – 17:00\nSaturday: 08:00 – 13:00\nSunday – Monday: closed",
    "contact.address": "Address",
    "contact.addressValue": "DW809 56A, 21-002 Jastków, Poland",
    "contact.fb": "Facebook",
    "contact.rodo": "Privacy policy / GDPR",

    "footer.rights": "All rights reserved.",

    "privacy.title": "Privacy policy & GDPR",
    "privacy.back": "← Back to home",
  },
} as const;

export type DictKey = keyof (typeof dict)["pl"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pl");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (saved === "pl" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (k: DictKey) => dict[lang][k];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useI18n outside LanguageProvider");
  return ctx;
}

// Theme
type ThemeCtx = { theme: "light" | "dark"; toggle: () => void };
const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial =
      saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme outside ThemeProvider");
  return ctx;
}
