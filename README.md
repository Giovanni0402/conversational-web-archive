# Conversational Web Browsing Wikia

Sito statico che raccoglie le linee guida per il design di interazioni vocali con il web.
Progetto di Ingegneria Informatica, Politecnico di Milano. Tutor: Ludovica Piro.

Sito online: https://giovanni0402.github.io/conversational-web-archive/
Editor: https://giovanni0402.github.io/conversational-web-archive/editor.html

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

## Struttura

```
conversational-web-archive/
├── index.html          homepage
├── category.html       consultazione per categoria
├── component.html      consultazione per design pattern
├── editor.html         editor dei contenuti
├── assets/
│   ├── css/style.css   stile
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

## Requisiti coperti

- HTML5 semantico, accessibilità di base (skip link, landmark, `aria-*`, focus visibile,
  navigazione da tastiera).
- Responsive, ottimizzato anche per mobile/iPhone.
- Contenuti separati dal codice, modificabili senza toccare l'HTML.
- Apribile con doppio click in locale


