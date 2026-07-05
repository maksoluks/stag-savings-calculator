## Cel

Umożliwić dodawanie zdjęć realizacji przypisanych do konkretnej marki (BMW, Audi, Mercedes…), tak aby wyświetlały się na podstronie `/montaz-lpg/$brandSlug`.

## Jak to będzie działać

Każda marka dostaje własną tablicę zdjęć w konfiguracji. Dodanie nowego zdjęcia = wrzucenie pliku do `src/assets/brands/` i dopisanie jednej linii w konfiguracji marki. Żadnych zmian w komponentach.

## Zmiany w kodzie

**1. `src/lib/brands.ts` — rozszerzenie typu `Brand`**

```ts
export type BrandPhoto = {
  src: string;      // import obrazka
  alt: string;      // opis (SEO + dostępność)
  caption?: string; // opcjonalny podpis np. "BMW 320i — montaż STAG Qmax"
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  iconSlug: string;
  photos: BrandPhoto[]; // nowe pole
};
```

Każda pozycja w `BRANDS` dostaje `photos: []` (pusta na start, uzupełniana w miarę dodawania zdjęć).

**2. Struktura plików ze zdjęciami**

```
src/assets/brands/
  bmw/
    bmw-320i-engine.jpg
    bmw-x5-tank.jpg
  audi/
    audi-a4-injectors.jpg
  mercedes/
    ...
```

Importowane bezpośrednio w `brands.ts`:

```ts
import bmw1 from "@/assets/brands/bmw/bmw-320i-engine.jpg";
// ...
{ id: "bmw", name: "BMW", slug: "bmw", iconSlug: "bmw",
  photos: [{ src: bmw1, alt: "Montaż STAG w BMW 320i" }] }
```

**3. Nowy komponent `src/components/BrandGallery.tsx`**

Prosta responsywna siatka (2 kolumny mobile / 3 desktop) z zaokrąglonymi kafelkami, `object-cover`, `loading="lazy"`, hover scale — spójna wizualnie z istniejącą sekcją `Gallery`. Jeśli marka nie ma zdjęć, komponent pokazuje przyjazny placeholder ("Wkrótce dodamy realizacje dla tej marki — zadzwoń: 609 258 834").

**4. `src/routes/montaz-lpg.$brandSlug.tsx`**

Pod istniejącym nagłówkiem dodać sekcję "Realizacje" z `<BrandGallery photos={brand.photos} brandName={brand.name} />`.

## Jak user doda nowe zdjęcie (po wdrożeniu)

1. Wrzuca `.jpg` do `src/assets/brands/{marka}/`.
2. W `src/lib/brands.ts` dopisuje `import` i wpis do `photos: [...]` odpowiedniej marki.
3. Zapisuje — zdjęcie od razu widoczne na `/montaz-lpg/{slug}`.

Alternatywnie może wysłać zdjęcia w czacie i poprosić o przypisanie do konkretnej marki — zajmę się resztą.

## Pytanie do decyzji

Czy chcesz od razu zaczątkowe zdjęcia (np. przepisanie istniejących z `src/assets/gallery-*.jpg` do jakiejś marki na demo), czy zostawiamy wszystkie marki puste do momentu, aż podeślesz prawdziwe zdjęcia realizacji?
