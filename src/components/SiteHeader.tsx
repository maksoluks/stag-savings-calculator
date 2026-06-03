import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, Flame } from "lucide-react";
import { useState } from "react";
import { useI18n, useTheme, type DictKey } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const navItems: { id: string; key: DictKey }[] = [
  { id: "kalkulator", key: "nav.calc" },
  { id: "o-nas", key: "nav.about" },
  { id: "galeria", key: "nav.gallery" },
  { id: "opinie", key: "nav.reviews" },
  { id: "kontakt", key: "nav.contact" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Flame className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">{t("brand.name")}</span>
          <span className="sm:hidden">STAG Rogowski</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-muted/50 px-1 py-0.5 text-xs font-semibold sm:flex">
            <button
              onClick={() => setLang("pl")}
              className={`rounded-full px-2 py-1 transition-colors ${lang === "pl" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-pressed={lang === "pl"}
            >
              PL
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {t(n.key)}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-1 rounded-full border border-border bg-muted/50 p-1 text-xs font-semibold sm:hidden">
              <button
                onClick={() => setLang("pl")}
                className={`flex-1 rounded-full px-2 py-1 ${lang === "pl" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                PL
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex-1 rounded-full px-2 py-1 ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
