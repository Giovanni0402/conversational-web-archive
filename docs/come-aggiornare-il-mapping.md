# Aggiornare il mapping linee guida / design pattern

Come è organizzata la sezione "Design pattern" del sito e come modificarla quando il mapping
verrà validato o cambiato. Vale sia dall'editor visuale sia a mano nel file dei dati.

## Cos'è

Oltre alla consultazione per categoria, il sito permette di leggere le linee guida per design
pattern del Web: raggruppamenti più generali a cui ogni linea guida è associata. Il mapping
attuale riproduce il file della tutor `progetto-triennale-sitoweb/Mapping linee guida design pattern.xlsx`.

## Mapping attuale (7 design pattern)

| Design pattern | Linee guida |
|---|---|
| Input management | B10, B14, B17, B20, S4, S6, B21 |
| Data protection | S11, B7, B18, B19, S2, B8 |
| User guidance | B5 |
| Information display | B1, B2, B3, B4 |
| Repair | B13, B15, S7, S9, S8, S10 |
| Site navigation | B12, B6, S3, S5 |
| Dialogue and chatbot personality | B9, B11, B16, S1 |

Nell'Excel alcune celle contengono il numero di riga della linea guida invece del testo
(26 = B21, 13 = B7, 23 = B18, 24 = B19, 28 = S2, 14 = B8, 34 = S8, 36 = S10). Sono state
risolte e incluse qui. Con questa mappatura ogni linea guida compare una sola volta.

Il mapping è provvisorio: la tutor lo ha definito più generale rispetto ai requisiti e prevede
uno studio dedicato per validarlo. Alcune associazioni sotto "Data protection" (B7, B18, B19)
sembrano vicine ad altri temi e vanno confermate con lei.

## Modo 1: dall'editor

1. Apri `editor.html` con doppio click.
2. Vai sulla scheda "Design patterns".
3. Per ogni pattern puoi cambiare nome, descrizione e, con le caselle di spunta, quali linee
   guida vi appartengono (spunta = inclusa).
4. "+ New design pattern" aggiunge un pattern, "Delete design pattern" lo elimina.
5. Premi "Download content.js" e rimetti il file scaricato in `data/`, sostituendo quello vecchio.
6. Ricarica `index.html`.

Nella scheda "Categories" si aggiungono o eliminano categorie allo stesso modo (eliminando una
categoria usata da alcune linee guida, l'editor avvisa prima).

## Modo 2: a mano

Il mapping sta in `data/content.js`, nell'array `components`. Ogni pattern è un oggetto:

```js
{
  "id": "comp-input-management",
  "name": "Input management",
  "description": "Patterns about ...",
  "guidelineIds": ["B10", "B14", "S4"],
  "tentative": true
}
```

Per aggiornarlo basta modificare la lista `guidelineIds`, usando gli id delle linee guida
(B1–B21 browsing, S1–S11 scaffolding). Note:

- gli id in `guidelineIds` devono esistere tra le `guidelines`, altrimenti vengono ignorati;
- una linea guida può stare in più pattern;
- per un pattern nuovo copia un oggetto e cambia `id`, `name`, `description`, `guidelineIds`;
- quando il mapping sarà validato, metti `"tentative": false`.

Il testo delle linee guida (titolo, descrizione, esempi) si gestisce nella scheda "Guidelines"
o nell'array `guidelines`: il mapping usa solo gli id, quindi le due cose sono indipendenti.
