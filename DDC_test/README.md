
# DDC_test

Ez egy Vue 3 + Vite alapú projekt, amely egy egyszerű projektkezelő alkalmazás példáját valósítja meg. A projekt célja, hogy bemutassa a modern Vue ökoszisztéma (Pinia, Vue Router, Composition API, TypeScript, TailwindCSS) használatát, valamint a localStorage-alapú CRUD műveleteket.

## Fő funkciók
- Projektek listázása, keresése, szerkesztése, törlése
- Új projekt hozzáadása űrlapon keresztül
- Adatok tárolása localStorage-ben
- Toast üzenetek sikeres, hibás vagy hiányos műveletekhez
- Pinia store előkészítve (bővíthető)
- Responsive, TailwindCSS alapú UI

## Fő könyvtárstruktúra
- `src/components/UI/` – újrahasznosítható UI elemek (gomb, input, táblázat, toast, stb.)
- `src/components/layouts/` – oldalnézetek (lista, űrlap, főoldal)
- `src/components/level1/` – űrlapok, navigáció
- `src/components/composables/` – újrahasznosítható composition API logika (toast, storage)
- `src/utils/` – formázók, validátorok
- `src/types/` – típusdefiníciók (pl. ProjectForm)
- `src/router/` – Vue Router konfiguráció

## Futtatás
1. Telepítsd a függőségeket:

	npm install

2. Indítsd el a fejlesztői szervert:

	npm run dev

3. Nyisd meg a böngészőben a megadott címet (pl. http://localhost:5173)

## Fő technológiák
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Használat
- A projektek a böngésző localStorage-ében tárolódnak.
- A keresőmezővel bármelyik projekt szöveges mezőjére lehet szűrni.
- Toast üzenetek jelennek meg minden fontosabb műveletnél.

## Bővítés
- Új oldalakat a `src/components/layouts/` mappában hozhatsz létre.
- Új utilokat, validátorokat a `src/utils/` mappában helyezhetsz el.

Készítette: VasFruzsina
