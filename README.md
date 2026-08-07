# interior coffee — Website

Statische Website von Jenny Kluth · interior coffee.
Marketing. Branding. Content. Freshly brewed for lifestyle brands.

## Inhalt

| Datei | Seite |
|---|---|
| `index.html` | Startseite (Hero-Banner, Leistungen, Projekte, Kurzvorstellung) |
| `leistungen.html` | Die vier Bausteine + Preisorientierung |
| `projekte.html` | Favvity, JoPiRo, CODELLO, Branding-Projekte |
| `ueber-mich.html` | Über Jenny, Arbeitsweise, interior coffee |
| `kontakt.html` | E-Mail und Social-Kanäle |
| `impressum.html` | Impressum (DE/EN) |
| `datenschutz.html` | Datenschutzerklärung (DE/EN) |
| `assets/` | Logos und Bilder |

Schriften (CLASSICO, DM Sans), Styles und die Seitenbilder sind in die HTML-Dateien eingebettet. Der Ordner `assets/` muss mit hochgeladen werden — daraus laden Navigation und Footer die Logos.

### assets/

| Datei | Verwendung |
|---|---|
| `ic-mark.png` / `ic-mark-white.png` | **ic**-Monogramm, freigestellt (transparent) — Navigation |
| `favicon.png`, `apple-touch-icon.png` | Browser-Tab / Homescreen — ic auf Linen |
| `wordmark-white.png` / `wordmark-trim.png` | Wortmarke „interior coffee", freigestellt (Footer) |
| `logo-favvity.png`, `logo-jopiro.png`, `logo-codello.png` | Kundenlogos, freigestellt (transparent, Off Black) |
| übrige Dateien | Projekt- und Stimmungsbilder |

Es gibt keine externen Abhängigkeiten und keinen Build-Schritt.

## Veröffentlichen mit GitHub Pages

1. Alle Dateien dieses Ordners ins Repository legen (Wurzelverzeichnis oder `/docs`).
2. Im Repository: **Settings → Pages**.
3. Unter *Source* den Branch wählen und den Ordner (`/` oder `/docs`) setzen.
4. Speichern. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/<repo>/` erreichbar.

Für eine eigene Domain (z. B. `interior-coffee.com`) unter *Settings → Pages → Custom domain* eintragen und beim Domain-Anbieter einen CNAME auf `<benutzername>.github.io` setzen.

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
