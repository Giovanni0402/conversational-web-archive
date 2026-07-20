# Conversational Web Browsing Wikia

Sito statico che raccoglie le linee guida per il design di interazioni vocali con il web.
Progetto di Ingegneria Informatica, Politecnico di Milano. Tutor: Ludovica Piro.

Sito online: https://giovanni0402.github.io/conversational-web-archive/

## Aprirlo

Doppio click su `index.html`. Non serve un server: i contenuti stanno in `data/content.js`,
quindi funziona sia in locale sia online.

## Modificare i contenuti (editor)

Apri `editor.html` con doppio click. Ha tre schede (Guidelines, Categories, Design patterns);
in ognuna si può aggiungere, modificare ed eliminare una voce. Nei design pattern le caselle
scelgono quali linee guida appartengono a ciascuno (è il mapping).

Le modifiche restano in memoria finché non premi "Download content.js". Il file scaricato va
messo in `data/`, sostituendo quello vecchio; riaprendo `index.html` compaiono le modifiche.

In alternativa si può modificare `data/content.js` a mano. Ogni linea guida ha:
`id`, `categoryId`, `type` (`browsing`/`scaffolding`), `title`, `description`,
`whatToDo` (lista), `examples`, `related` (lista di id), `status` (`complete`/`pending`).
Con `status: "complete"` il contenuto viene mostrato.

## Modificare le pagine About e Contacts

`about.html` e `contacts.html` sono pagine statiche: il testo non passa dall'editor, si
modifica direttamente nel file. Aprilo con un editor di testo e cambia quello che c'è dentro
i tag: `<h1>` e il `<p>` sotto per l'introduzione, `<h2>` e `<p>` dentro ogni
`<article class="about-block">` per le singole sezioni. Per aggiungere una sezione basta
copiare un blocco `<article class="about-block">` e cambiarne il testo.

Il footer sta in fondo a ogni pagina (`<footer class="site-footer">`): per cambiarne i testi
va modificato in tutte le pagine (`index`, `category`, `component`, `about`, `contacts`).

## Struttura

```
conversational-web-archive/
├── index.html          homepage
├── category.html       consultazione per categoria
├── component.html      consultazione per design pattern
├── about.html          pagina About (testo statico)
├── contacts.html       pagina Contacts (testo statico)
├── editor.html         editor dei contenuti
├── assets/
│   ├── css/style.css   stile
│   ├── img/            logo Politecnico usato nel footer
│   └── js/app.js       caricamento dati e rendering
├── data/
│   └── content.js      tutti i contenuti (gestiti dall'editor)
└── docs/
    ├── information-architecture.mermaid   diagramma della struttura
    └── come-aggiornare-il-mapping.md      come aggiornare il mapping
```

## Stato dei contenuti

- 9 categorie, 7 design pattern, 32 linee guida (21 browsing B1–B21, 11 scaffolding S1–S11).
- 12 linee guida complete; le altre sono classificate e marcate "in arrivo".
- Il mapping linea guida / design pattern segue il file `Mapping linee guida design pattern.xlsx`
  della tutor. È provvisorio e da validare: vedi `docs/come-aggiornare-il-mapping.md`.

## Deploy su GitHub Pages

Carica il contenuto della cartella nella root del repository, poi Settings > Pages,
Source "Deploy from a branch", branch `main`, cartella `/ (root)`. Sito statico, nessun build.
