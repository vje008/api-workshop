# Velkommen til API-workshop! 🤓

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆Oppgave: Her er hva du skal gjøre
- 💡Tips: Litt ekstra info som kan være greit å være for å løse en oppgave
- 🚨Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du _kan_ løse oppgaven
- 🧠Til videre læring. Lenker og tips til hva man kan lese mer om for å få en dypere forståelse.

# DEL 1

I denne delen skal vi lære oss å konstruere requester og bruke disse for å hente ut data fra et åpent api som eies av Digitaliseringsdirektoratet ved hjelp av verktøyet Postman. 

## Oppsett

Dersom du ikke allerede har lastet ned Postman, gjør det nå. https://www.postman.com/downloads/. Det er alt du trenger til denne delen!

## Oppgaver

### Oppgave 1

Vi starter veldig enkelt og skal bare hente ut restaurantene i listen fra https://hotell.difi.no/?dataset=mattilsynet/smilefjes/tilsyn. 

Ta en titt på all dataen du får ut. Denne skal vi i senere oppgaver vise i vår egen tjeneste 💥

<details><summary>🚨Løsningsforslag</summary>
Pass på at du gjør en get request og legg inn urlen under

```ts
https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn
```

</details>


### Oppgave 2

Nå skal vi ikke hente ut alle de 100 første restaurantene. Istedet skal vi hente ut alle restauranter som oppfyller et krav. Forslaget vårt er å velge et postnummer, f. eks. 7030 i Trondheim. Får du det til med en variabel, må du gjerne legge til flere.

<details><summary>💡 Tips</summary>
Vi må huske på å ha med ```?``` før våre parametere
</details>

<details><summary>🚨Løsningsforslag</summary>
Bytt ut urlen i oppgave 1 med den under

```ts
https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?postnr=7030

</details>

### Konklusjon

Godt jobbet! Nå er du ferdig med del 1 og har lært deg å gjøre enkle kall til et åpent api 💯


# DEL 2

I denne delen skal vi ta det et hakk videre. Nå skal vi se på hvordan vi kan konsumere data fra et eksisterende api inn vår egen frontend-applikasjon.
##TODO Skrive noe om applikasjonen og hva den gjør.

## Oppsett

Før vi starter. Om du ikke har gjort det allerede må du klone dette repoet. https://github.com/bekk/api-workshop/

Om du ikke har jobbet med git og github kan du lese mer om [git](https://git-scm.com/book/en/v2), og hvordan man kloner repoer fra [GitHub](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository). Om du bare vil komme i gang kan [Github Desktop](https://desktop.github.com/) være en fin løsning.

Når du har fått klonet repoet åpner du det i en egnet editor. Om du ikke har en installert er [Visual Studio Code](https://code.visualstudio.com/) en av de mest populære.

Åpne en terminal og naviger til rootmappen av repoet. Her må du kjøre et to kommandoer for å få applikasjonen til å starte.
Først må vi laste ned alle pakker applikasjonen trenger for å starte. Dette gjøres ved å kjøre denne kommandoen.

```bash
npm install
```

Deretter skal vi starte opp applikasjonen med:

```bash
npm run start
```

Når applikasjonen starter skal nettleseren din automatisk åpnes med applikasjonen. Om den ikke gjør det kan du gå inn på nettadressen http://localhost:3000/

## Oppgaver

Når du trykker på "Hent tilsyn" i appen skjer det ingenting. Dette er fordi vi må koble sammen frontend med backend.

### Oppgave 1

Finn filen `oppgave1.ts`. Her skal vi gjøre applikasjonen i stand til å hente en liste med tilsyn.

<details><summary>🚨Løsningsforslag</summary>
Bytt ut innholdet i url-variablen til dette.

```ts
const url = "https://smilefjes.herokuapp.com/tilsyn";
```

</details>

Når du har fått løst oppgaven skal appen vise en liste med tilsyn. Dette er fint, men vi vil gjerne kun hente dataen vi faktisk har lyst på. Dette skal vi se videre på i oppgave 2.

<details><summary>🧠 Dypdykk</summary>
Om du så litt etter la du merke til at vi brukte fetch til å hente data. Om du har lyst til å lage flere webapplikasjoner som henter data fra web kommer du garantert til å ha nytte av å kunne mer om dette. MDN har en fin guide [her](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

```ts
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

</details>

### Oppgave 2

Finn filen `oppgave2.ts`. Her skal vi gjøre applikasjonen i stand til å hente ut kun de tilsynene vi har lyst på ved å bruke query params.

<details><summary>💡 Tips</summary>

#### Query Params

Husk at queryparams legges til på slutten av url'en på følgende format `?variabel1=verdiPåVariabel1&variabel2=verdiPåvariabel2`.

En hel url på da seende ut som dette.

```ts
"http://example.com/movies?year=2021&genre=thriller";
```

#### String/tekststreng i javascript

Det finnes mange måter å håndtere tekststrenger med variabler i javascript. Den letteste er kanskje å bare plusse alle de ulike strengene sammen på denne måten:

```js
const year = "2021";
const genre = "thriller";

const url =
  "http://example.com/movies?" + "year=" + year + "&" + "genre=" + genre;
```

Men javascript har også noe som heter Template literals. Dette pleier ofte å bli ganske mye lettere å lese når det blir flere variabler. Her er akkurat samme tekststreng ved bruk Template literals. Legg merke til bruk av back tics `

```js
const year = "2021";
const genre = "thriller";

const url = `http://example.com/movies?year=${year}&genre=${genre}`;
```

</details>

<details><summary>🚨Løsningsforslag</summary>
Bytt ut innholdet i url-variablen til dette.

```ts
const url = `https://smilefjes.herokuapp.com/tilsyn?postnummer=${postnummer}&poststed=${poststed}&smilefjes=${smilefjes}`;
```

</details>

<details><summary>🧠 Dypdykk</summary>
Du kan gjøre ganske mye kult med Template literals. Ta en titt [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for meg eksempler.
</details>

### Oppgave 3

Nå har vi gjort applikasjonen i stand til ikke bare hente tilsyn, men også hente de tilsynene vi har lyst på basert på query parameterne vi sender inn. Nå skal vi se på hvordan vi kan gå frem får å hente ut detaljer om et tilsyn. Finn filen `oppgave3.ts` for å løse dette.

<details><summary>💡 Tips</summary>
For å løse oppgaven må du ta i bruke et stiparameter (path-params). Stiparametre brukes ofte ved at man sender inn id'en til ressursen man har lyst til å hente. Sti parametre legges til på slutten av stien følgende format `/stiParameter`.

En hel url på da seende ut som dette.

```ts
"http://example.com/movie/123";
```

</details>

<details><summary>🚨Løsningsforslag</summary>
Bytt ut innholdet i url-variablen til dette.

```ts
const url = `https://smilefjes.herokuapp.com/tilsyn/${tilsynId}`;
```

</details>

### Konklusjon

Gratulerer! 🎉 Du har nå fått koblet sammen frontend med et eksisterende api, og er nå ferdig med del to av workshopen.

# DEL 3

I del 3 skal vi se på hvordan en backend kan fungere. Vi kommer til å kjøre vår egen backend lokalt på maskinen.

## Oppgaver

På samme måte som i del 2 må vi laste ned, installere og kjøre opp backend. Kildekoden til backend finner du på [https://github.com/bekk/api-workshop-backend](https://github.com/bekk/api-workshop-backend).

Klon repoet og installer programvaren på [samme måte som i del 2](https://github.com/bekk/api-workshop#oppsett). Husk å bytt URL!

Etter prosjektet er lastet ned naviger til backend-mappen og kjør npm install for å installere programvaren, og npm run start for å starte backend.

```bash
npm install
npm run start
```

Når man kjører "npm run start" vil backend vil starte opp lokalt på http://localhost:3003 
Verifisert at backend kjører ved å se at meldingen "Cannot GET /" dukker opp når du åpner http://localhost:3003 i nettleseren. 

### Oppgave 1

I del 1 brukte vi Postman for å kjøre requests mot en tjeneste ute på internett. Nå skal vi bruke bruke postman for å hente data fra vår backend som kjører lokalt på maskinen. Bytt ut URL fra del 1 til å gå mot vår lokale backend.

<details><summary>🚨Løsningsforslag</summary>
Sett endepunkt-URL i postman til å være `http://localhost:3003/tilsyn`

</details>


### Oppgave 2
Bytt ut endepunktene i frontend-løsningen til å gå mot den lokale backend-tjenesten.

<details><summary>🚨Løsningsforslag</summary>
I filen `oppgave1.ts` i frontend-prosjektet sett url-variabelen til å være:

```ts
const url = "http://localhost:3003/tilsyn";
```

I filen `oppgave2.ts` i frontend-prosjektet sett url-variabelen til å være:

```ts
const url = `http://localhost:3003/tilsyn?postnummer=${postnummer}&poststed=${poststed}&smilefjes=${smilefjes}`;
```

I filen `oppgave3.ts` i frontend-prosjektet sett url-variabelen til å være:

```ts
const url = `http://localhost:3003/tilsyn/${tilsynId}`;
```

</details>


### Oppgave 3
Lag et nytt endepunkt i backend `/hei` som returnerer `"hei"`. Verifiser at det fungerer med å bruke postman.

</details>

<details><summary>🧠 Dypdykk</summary>
...
</details>

<details><summary>🚨Løsningsforslag</summary>
I `app.js` filen legg til:

```js
app.get("/hei", (req, res) => {
  res.send("hei");
});
```

og test endepunktet med postman mot http://localhost:3003/hei og sjekk at reponsen er "hei"

</details>


### Oppgave 4
Lag et endepunkt som kun returnerer et smilefjes basert på tilsyns-id. /tilsyn/{tilsynsId}/fjes og test det med postman.

<details><summary>🚨Løsningsforslag</summary>
I `app.js` filen legg til:

```js
app.get("/tilsyn/:tilsynsId/fjes", (req, res) => {
  const tilsyn = tilsynsListe.find((tilsyn) => {
    return tilsyn.tilsynsId.toString() == req.params.tilsynsId;
  });
  
  var fjes;
  if (tilsyn.smilefjes === "BLID") {
    fjes = ":)";
  } else if (tilsyn.smilefjes === "NØYTRAL") {
    fjes = ":|";
  } else {
    fjes = ":(";
  }

  res.send(fjes);
});
```

og test endepunktet med postman mot `http://localhost:3003/tilsyn/935d9947-2304-4e72-a57c-7f9f03081a1d/fjes`

</details>

### Oppgave 5 (bonus)
Vis simlefjeset fra oppgave 4 i detaljesiden til et tilsyn.

