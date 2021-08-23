# Velkommen til API-workshop! 🤓

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆Oppgave: Her er hva du skal gjøre
- 💡Tips: Litt ekstra info som kan være greit å være for å løse en oppgave
- 🚨Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du _kan_ løse oppgaven
- 🧠Til videre læring. Lenker og tips til hva man kan lese mer om for å få en dypere forståelse.

# DEL 1

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

### Oppgave 2

### Oppgave 3

Dette er fint, men for å gjøre applikasjonen enda bedre vil vi også hente detaljer om hvert tilsyn. Finn filen `oppgave2.ts` for å løse dette.

### Konklusjon

Gratulerer! 🎉 Du har nå fått koblet sammen frontend med et eksisterende api, og er nå ferdig med del to av workshopen.

# DEL 3
