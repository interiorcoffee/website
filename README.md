# interior coffee — Website

Statische Website von Jenny Kluth · interior coffee.
Marketing. Branding. Content. Freshly brewed for lifestyle labels.

## Inhalt

| Datei | Seite |
|---|---|
| `index.html` | Startseite (Hero-Banner, Leistungen, Projekte, Kurzvorstellung) |
| `leistungen.html` | Die vier Bausteine + Preisorientierung |
| `markenblick.html` | Angebotsseite Markenblick Studio und Markenblick Check (nur Deutsch, statisches HTML, Schriften aus `assets/fonts/`) |
| `projekte.html` | Projekte CODELLO, FAVVITY, JoPiRo, Branding (statisches HTML, DE/EN, Bilder in `assets/projekte/`) |
| `ueber-mich.html` | Über Jenny, Arbeitsweise, interior coffee |
| `kontakt.html` | E-Mail und Social-Kanäle |
| `impressum.html` | Impressum (DE/EN) |
| `datenschutz.html` | Datenschutzerklärung (DE/EN) |
| `assets/` | Logos und Bilder |

Bilder, Schriften und Scripts der Seiten liegen als eigene Dateien in `assets/build/`. Die Dateinamen enthalten einen Fingerabdruck (z. B. `img.5694a47eb9.webp`), damit Browser sie dauerhaft zwischenspeichern und nach einem Update automatisch die neue Version laden. Der Ordner `assets/` muss komplett mit hochgeladen werden.

### Nach einem neuen Design-Export

Exportierte Seiten kommen als gepacktes Bundle (eine einzige, sehr große HTML-Datei, die sich erst im Browser auspackt). Vor dem Hochladen einmal entpacken:

```
cd tools
npm install
node unbundle.mjs .. index.html
```

Den Dateinamen der exportierten Seite einsetzen. Das Skript schreibt Bilder (große Fotos als WebP, max. 2000 px breit), Schriften und Scripts nach `assets/build/` und ersetzt die Seite durch eine schlanke Version. Alte, nicht mehr verwendete Dateien in `assets/build/` dürfen gelöscht werden.

### assets/

| Datei | Verwendung |
|---|---|
| `ic-mark.png` / `ic-mark-white.png` | **ic**-Monogramm, freigestellt (transparent) — Navigation |
| `favicon.png`, `apple-touch-icon.png` | Browser-Tab / Homescreen — ic auf Linen |
| `wordmark.svg` / `wordmark-linen.svg` | Wortmarke „interior coffee“ (gemeinsamer f Querstrich), Off Black für die Menüleiste, Linen für den Footer |
| `wordmark-white.png` / `wordmark-trim.png` | bisheriger getippter Schriftzug, nicht mehr verwendet |
| `logo-favvity.png`, `logo-jopiro.png`, `logo-codello.png` | Kundenlogos, freigestellt (transparent, Off Black) |
| übrige Dateien | Projekt- und Stimmungsbilder |

Die Website lädt keine externen Abhängigkeiten. Ein Build-Schritt ist nur nach einem neuen Design-Export nötig (siehe oben).

## Veröffentlichen mit GitHub Pages

1. Alle Dateien dieses Ordners ins Repository legen (Wurzelverzeichnis oder `/docs`).
2. Im Repository: **Settings → Pages**.
3. Unter *Source* den Branch wählen und den Ordner (`/` oder `/docs`) setzen.
4. Speichern. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/<repo>/` erreichbar.

Für eine eigene Domain (z. B. `interior-coffee.com`) unter *Settings → Pages → Custom domain* eintragen und beim Domain-Anbieter einen CNAME auf `<benutzername>.github.io` setzen.

## Cookies & Analyse

Google Analytics (`G-DVK0M3BREL`) ist eingebunden, wird aber **erst nach Einwilligung** geladen. Beim ersten Besuch erscheint ein Hinweis unten auf der Seite; ohne Klick auf „einverstanden" wird kein Skript von Google geladen und kein Analyse-Cookie gesetzt. Die Entscheidung liegt im `localStorage` (`ic-consent`) und ist über den Footer-Link „Cookie-Einstellungen" jederzeit änderbar. Die Logik steckt in jeder HTML-Datei, eine separate Datei ist nicht nötig.

## Vorbereitete Datenschutz-Abschnitte

In `datenschutz.html` liegen drei Abschnitte bereit, die derzeit **nicht** angezeigt werden: Stripe und Substack. Sie werden erst gebraucht, wenn die Dienste tatsächlich im Einsatz sind — bis dahin bitte ausgeschaltet lassen. Freischalten geht nur über die Quelldatei im Design-Projekt, nicht in der exportierten HTML.

## Mobile

Alle Seiten sind responsiv: Raster brechen ab ca. 780 px auf eine Spalte um, Schriftgrößen skalieren mit der Fensterbreite, Navigation und Footer laufen um. Getestet von 360 px bis 1920 px.

## Sprachen

Oben rechts lässt sich zwischen **DE** und **EN** umschalten. Die Wahl wird im Browser gespeichert und gilt für alle Seiten.

## Anpassen

Die Dateien sind kompiliert — Inhalte werden am besten in den Quelldateien geändert und neu exportiert. Für schnelle Korrekturen (Tippfehler, Preise, Links) lässt sich der Text auch direkt in der jeweiligen HTML-Datei suchen und ersetzen.

Zu prüfen vor dem Livegang:
- Die **ab-Preise** auf `leistungen.html` sind Richtwerte und sollten durch die echten ersetzt werden.
- Die Datenschutzerklärung ist eine Vorlage — vor Veröffentlichung rechtlich prüfen lassen.

## Kontakt

hello@interior-coffee.com · [Instagram](https://instagram.com/interior.coffee) · [TikTok](https://tiktok.com/@interior.coffee) · [LinkedIn](https://www.linkedin.com/in/jenny-kluth-interior-coffee/) · [Pinterest](https://pinterest.com/InteriorCoffee)
