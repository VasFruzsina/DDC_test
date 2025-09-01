
# DDC_test

Vue 3 + Vite alapú mini projekt, egy egyszerű projekt nyilvántartó alkalmazás. Célja bemutatni a modern Vue-eszközök használatát, illetve egy egyszerű, localStorage-re épülő CRUD megvalósítása.

## Fő funkciók
- Projektek listázása, keresése, szerkesztése, törlése
- Új projekt hozzáadása űrlapon keresztül
- Adatok tárolása localStorage-ben
- Toast üzenetek sikeres létrehozás, szerkesztés esetén
- Reszponzív, TailwindCSS alapú UI

## Fő könyvtárstruktúra
- `src/components/UI/` – újrahasznosítható UI elemek (gomb, input, táblázat, toast, stb.)
- `src/components/layouts/` – oldalnézetek (lista, űrlap, főoldal)
- `src/components/level1/` – űrlapok, navigáció
- `src/components/composables/` – újrahasznosítható composition API logika (toast, storage)
- `src/utils/` – formázók, validátorok
- `src/types/` – típusdefiníciók (pl. ProjectForm)
- `src/router/` – Vue Router konfiguráció


## Futtatás (Node.js környezetben)
1. Telepítsd a függőségeket:
   
	npm install

2. Indítsd el a fejlesztői szervert:
   
	npm run dev

3. Nyisd meg a böngészőben a megadott címet (pl. http://localhost:5173)

### Ajánlott Node.js verzió
Node.js >= 18 ajánlott.

### Ajánlott böngésző
Legfrissebb Chrome, Edge vagy Firefox.

## Docker használat

1. **Buildeld az image-et:**
   
	docker build -t ddc-test .

2. **Indítsd el a konténert:**
   
	docker run -p 8080:80 ddc-test

	Ezután a http://localhost:8080 címen eléred az alkalmazást.

## Fő technológiák
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Alkotók
- Feladat kidolgozása: Digitális Fejlesztési Központ, Győr
- Megvalósítás: Vas Fruzsina