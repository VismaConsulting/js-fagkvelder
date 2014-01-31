# Workshop
Dette er en workshop for å lære litt om Grunt.

## Ting du må gjøre før du begynner
* Installer Git
* Installer node.js
* Klon dette prosjektet
* cd til prosjektmappa i et kommandovindu

## Grunt, grunt
Gjør disse oppgavene. Nå!

1. cd inn i grunt-mappa
1. Installer grunt-cli.
1. Lag en package.json-fil for prosjektet. Vi skal ha en dependency til en grunt-versjon som er rundt 0.4.2.
1. Kjør `npm install`
1. Legg til Gruntfile.js og få den til å lese inn package.json som package
1. Legg til en grunt-plugin, `grunt-htmlhint` i package.json som kan hjelpe oss med å finne feil i html-filer.
1. Legg til pluginen i gruntfilen, og konfigurer den til å finne alle de 9 feilene som er i index.html.
1. Rett disse feilene.
1. Legg så til en ny plugin, `grunt-contrib-uglify`,som kan hjelpe deg med å minimere (uglify) Javascript-filer.
1. Legg til pluginen i gruntfilen, og konfigurer den til å minimere `assets/js/base.js` og legge den minimerte filen i `build\js\`
1. Legg så til pluginen `grunt-contrib-jshint` for å sjekke filen `assets/js/badparts.js`
1. Legg til funksjonalitet for å kjøre disse stegene hver gang kildefilene forandres. Bruk pluginen `grunt-contrib-watch`.



## Bower

1. cd inn i bower-mappa
1. Installer bower globalt ved hjelp av npm
1. Installer jquery ved hjelp av bower
1. Avinstaller jquery
1. Installer jquery på nytt, men nå i en annen mappe: `js/lib`
1. Installer backbone i versjon 1.1.0
1. Bruk bower til å søke etter bootstrap


## Require
1. cd inn i require-mappa
1. Install requirejs globalt med npm
1. Legg til en bower.json-fil med navn, version og dependencies. Legg til jquery, backbone, underscore og requirejs i siste versjon
1. Legg til `<script data-main="js/main" src="js/lib/requirejs/require.js"></script>` rett før body i index-html
    * Det denne gjør er å si ifra til require.js at `js/main` er inngangsporten til appen vår.
1. Lag så main.js-filen.
1. Legg inn `require.config({});` i toppen av main.js og fyll den med paths til jquery, backbone og underscore.
1. Legg inn shims i require.config for å styre avhengigheter.
1. Lag filen `js/views/app.js`
1. I app.js, bruk require.js sin define-metode på starten av fila til å hente inn backbone, og eksponer den som variabelen `Backbone`
1. Inni define-metode, lim inn fra app.js på denne gisten: https://gist.github.com/andersem/949691ca202381734dee
1. På slutten av main.js lim inn fra main.js på samme gisten.
1. Sjekk ut index.html en browser med js-konsollen.
1. Legg så til fila `build/app.build.js`
1. Putt her det som står i gisten.
1. Bruk r.js til å bygge prosjektet: `r.js -o build\app.build.js`



