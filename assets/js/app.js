// Rendering del sito: legge i contenuti da data/content.js e costruisce le pagine
// (home, categoria, design pattern). Nessun server: funziona anche da file://.
// I testi non si toccano qui, si modificano dall'editor (editor.html).

// Icone a linea (set Feather). Ogni voce è il contenuto di un <svg>, il colore segue currentColor.
var ICONS = {
  message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'
};
function svgIcon(name) {
  return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.doc) + "</svg>";
}

// Accento e icona per categoria e design pattern.
var CAT_STYLE = {
  "cat-mapping":       { accent: "#2f9e8f", soft: "#e4f4f1", icon: "message" },
  "cat-recognition":   { accent: "#3b74c4", soft: "#e7eefb", icon: "eye" },
  "cat-user-control":  { accent: "#7a57c7", soft: "#efe9fa", icon: "sliders" },
  "cat-consistency":   { accent: "#c75792", soft: "#fbe9f3", icon: "refresh" },
  "cat-error":         { accent: "#d8693f", soft: "#fbeae1", icon: "alert" },
  "cat-communication": { accent: "#4f63c4", soft: "#e9ecfb", icon: "users" },
  "cat-help":          { accent: "#3f9d63", soft: "#e6f4ea", icon: "book" },
  "cat-status":        { accent: "#2f9bc4", soft: "#e2f1f8", icon: "bell" },
  "cat-trust":         { accent: "#c98a2f", soft: "#f8efe0", icon: "lock" }
};
function catStyle(id) { return CAT_STYLE[id] || { accent: "#2f6d59", soft: "#e7f0ec", icon: "doc" }; }

var COMP_STYLE = {
  "comp-input-management":   { accent: "#3b74c4", soft: "#e7eefb", icon: "edit" },
  "comp-data-protection":    { accent: "#c98a2f", soft: "#f8efe0", icon: "shield" },
  "comp-user-guidance":      { accent: "#3f9d63", soft: "#e6f4ea", icon: "compass" },
  "comp-information-display": { accent: "#2f9bc4", soft: "#e2f1f8", icon: "layout" },
  "comp-repair":             { accent: "#d8693f", soft: "#fbeae1", icon: "tool" },
  "comp-site-navigation":    { accent: "#7a57c7", soft: "#efe9fa", icon: "navigation" },
  "comp-dialogue":           { accent: "#c75792", soft: "#fbe9f3", icon: "chat" }
};
function compStyle(id) { return COMP_STYLE[id] || { accent: "#2f6d59", soft: "#e7f0ec", icon: "grid" }; }

// Escape dei testi prima di inserirli nell'HTML.
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function getParam(name) { return new URLSearchParams(window.location.search).get(name); }

// Copia il codice dell'esempio negli appunti; con fallback per l'apertura da file://.
function copyCode(btn) {
  var codeEl = btn.parentNode.querySelector("code");
  var text = codeEl ? codeEl.innerText : "";
  var feedback = function () {
    var old = btn.textContent;
    btn.textContent = "Copied ✓"; btn.classList.add("copied");
    setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1400);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(feedback, function () { fallbackCopy(text); feedback(); });
  } else { fallbackCopy(text); feedback(); }
}
function fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  ta.remove();
}

// Filtra la lista di sinistra sul testo della ricerca e nasconde i gruppi vuoti.
function filterDetailList(q) {
  q = (q || "").trim().toLowerCase();
  document.querySelectorAll("#gl-groups .gl-item").forEach(function (it) {
    var g = DETAIL_BYID[it.dataset.id] || {};
    var hay = (g.id + " " + (g.title || "") + " " + (g.description || "")).toLowerCase();
    it.style.display = (!q || hay.indexOf(q) >= 0) ? "" : "none";
  });
  var anyVisible = false;
  document.querySelectorAll("#gl-groups .gl-list").forEach(function (listEl) {
    var visible = Array.prototype.filter.call(listEl.children, function (c) { return c.style.display !== "none"; }).length;
    if (visible) anyVisible = true;
    if (listEl.previousElementSibling) listEl.previousElementSibling.style.display = visible ? "" : "none";
  });
  var note = document.getElementById("gl-noresults");
  if (note) note.style.display = anyVisible ? "none" : "";
}

// Dati in memoria (content.js). Il fetch dei JSON è solo un ripiego per l'uso su server.
async function loadData() {
  if (window.ARCHIVE_DATA) return window.ARCHIVE_DATA;
  var r = await Promise.all([
    fetch("data/categories.json").then(function (x) { return x.json(); }),
    fetch("data/components.json").then(function (x) { return x.json(); }),
    fetch("data/guidelines.json").then(function (x) { return x.json(); })
  ]);
  return { categories: r[0], components: r[1], guidelines: r[2] };
}

// Stato della pagina di dettaglio: linee guida correnti e mappa id -> linea guida.
var DETAIL_LIST = [];
var DETAIL_BYID = {};

function detailListItem(g, activeId) {
  var quiet = g.status !== "complete" ? " gl-item--quiet" : "";
  var active = g.id === activeId ? " gl-item--active" : "";
  return '<a class="gl-item' + quiet + active + '" href="#' + esc(g.id) + '" data-id="' + esc(g.id) + '">' +
    '<span class="guideline__id">' + esc(g.id) + "</span>" +
    '<span class="gl-item__title">' + esc(g.title) + "</span></a>";
}

// Lista di sinistra, divisa in Browsing e Scaffolding.
function detailListHtml(guidelines, activeId) {
  var browsing = guidelines.filter(function (g) { return g.type === "browsing"; });
  var scaffolding = guidelines.filter(function (g) { return g.type === "scaffolding"; });
  var html = "";
  if (browsing.length) {
    html += '<h2 class="group-title">Browsing guidelines</h2><div class="gl-list">' +
      browsing.map(function (g) { return detailListItem(g, activeId); }).join("") + "</div>";
  }
  if (scaffolding.length) {
    html += '<h2 class="group-title">Scaffolding guidelines</h2><div class="gl-list">' +
      scaffolding.map(function (g) { return detailListItem(g, activeId); }).join("") + "</div>";
  }
  return html || '<p style="color:var(--text-soft)">No guidelines in this section.</p>';
}

// Pannello di destra per una linea guida.
function guidelineDetailHtml(g) {
  var typeTag = g.type === "scaffolding"
    ? '<span class="tag tag--scaffolding">Scaffolding</span>'
    : '<span class="tag tag--browsing">Browsing</span>';
  var head = '<div class="detail-pane__head"><span class="guideline__id">' + esc(g.id) + "</span>" +
    '<h2 class="detail-pane__title">' + esc(g.title) + "</h2>" + typeTag + "</div>";

  if (g.status !== "complete") {
    return head + '<p class="detail-pane__pending">Content coming soon.</p>';
  }

  var body = "";
  if (g.description) body += "<p>" + esc(g.description) + "</p>";

  if (g.whatToDo && g.whatToDo.length) {
    body += '<div class="whatToDo"><h4>What to do</h4><ul>' +
      g.whatToDo.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></div>";
  }

  if (g.examples && g.examples.length) {
    body += "<h4>Examples</h4>";
    g.examples.forEach(function (ex) {
      var label = ex.title ? '<p class="example__label">' + esc(ex.title) + "</p>" : "";
      if (ex.type === "code") {
        body += '<div class="example">' + label +
          '<div class="code-wrap"><button class="code-copy" type="button" onclick="copyCode(this)">Copy</button>' +
          '<pre class="code"><code>' + esc(ex.content) + "</code></pre></div></div>";
      } else {
        body += '<div class="example example--interaction">' + label + "<p>" + esc(ex.content) + "</p></div>";
      }
    });
  }

  // Linee guida collegate: card con colore/icona della categoria di destinazione.
  if (g.related && g.related.length) {
    var cards = g.related.map(function (rid) {
      var rg = DETAIL_BYID[rid];
      if (!rg) return "";
      var rs = catStyle(rg.categoryId);
      return '<a class="related-card" href="category.html?id=' + esc(rg.categoryId) + "#" + esc(rid) + '"' +
        ' style="--accent:' + rs.accent + ';--soft:' + rs.soft + '">' +
        '<span class="related-card__icon">' + svgIcon(rs.icon) + "</span>" +
        '<span class="related-card__text"><span class="related-card__id">' + esc(rg.id) + "</span>" +
        esc(rg.title) + "</span></a>";
    }).join("");
    if (cards) body += '<div class="related"><h4>Related guidelines</h4><div class="related-grid">' + cards + "</div></div>";
  }

  return head + '<div class="detail-pane__body">' + body + "</div>";
}

// Mostra la linea guida id nel pannello e la evidenzia in lista.
// doScroll: su mobile porta in vista il pannello (solo su scelta o link, non all'avvio).
function selectGuideline(id, doScroll) {
  var pane = document.getElementById("detail-pane");
  if (!pane) return;
  var g = DETAIL_BYID[id];
  if (!g || !DETAIL_LIST.some(function (x) { return x.id === id; })) {
    g = DETAIL_LIST.find(function (x) { return x.status === "complete"; }) || DETAIL_LIST[0];
    if (!g) { pane.innerHTML = ""; return; }
    id = g.id;
  }
  pane.innerHTML = guidelineDetailHtml(g);
  pane.scrollTop = 0;
  var items = document.querySelectorAll(".gl-item");
  items.forEach(function (it) { it.classList.toggle("gl-item--active", it.dataset.id === id); });
  if (doScroll && window.matchMedia("(max-width: 820px)").matches) {
    pane.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Costruisce la pagina di dettaglio e seleziona la voce iniziale (hash o prima completa).
function renderDetailPage(headerHtml, list, byId) {
  DETAIL_LIST = list;
  DETAIL_BYID = byId;
  var hash = window.location.hash.slice(1);
  var hadHash = hash && list.some(function (g) { return g.id === hash; });
  var selId = hadHash ? hash : (list.find(function (g) { return g.status === "complete"; }) || list[0] || {}).id;
  document.getElementById("main-view").innerHTML = headerHtml +
    '<div class="detail-layout">' +
    '<div class="detail-list">' +
      '<input class="gl-search" type="search" placeholder="Search a guideline…" aria-label="Search guidelines" oninput="filterDetailList(this.value)">' +
      '<div id="gl-groups">' + detailListHtml(list, selId) +
        '<p id="gl-noresults" class="gl-noresults" style="display:none">No guideline found.</p>' +
      "</div>" +
    "</div>" +
    '<div class="detail-pane" id="detail-pane" aria-live="polite"></div></div>';
  selectGuideline(selId, hadHash);
}

// Home: fasce delle categorie (con anteprime) e schede dei design pattern.
async function initHome() {
  var data = await loadData();

  var catCards = document.getElementById("cat-cards");
  if (catCards) {
    catCards.innerHTML = data.categories.map(function (c) {
      var s = catStyle(c.id);
      var inCat = data.guidelines.filter(function (g) { return g.categoryId === c.id; });
      // anteprima: prime 2 linee guida della categoria.
      var preview = inCat.slice(0, 2).map(function (g) {
        return '<a class="mini-card" href="category.html?id=' + esc(c.id) + "#" + esc(g.id) + '">' +
          '<span class="mini-card__icon">' + svgIcon(s.icon) + "</span>" +
          '<span class="mini-card__text"><span class="mini-card__id">' + esc(g.id) + "</span>" +
          esc(g.title) + "</span></a>";
      }).join("");
      // se ce ne sono più di 2, un riquadro "vedi tutte" verso la pagina della categoria.
      var moreTile = "";
      if (inCat.length > 2) {
        moreTile = '<a class="mini-card mini-card--all" href="category.html?id=' + esc(c.id) + '">' +
          '<span class="mini-card__text">See all ' + inCat.length + ' guidelines</span>' +
          '<span class="mini-card__go">' + svgIcon("arrow") + "</span></a>";
      }
      var cards = preview + moreTile;
      var count = inCat.length + (inCat.length === 1 ? " guideline" : " guidelines");
      return '<section class="cat-band" style="--accent:' + s.accent + ';--soft:' + s.soft + '">' +
        '<a class="cat-band__head" href="category.html?id=' + esc(c.id) + '">' +
        '<span class="cat-band__icon">' + svgIcon(s.icon) + "</span>" +
        "<div><h3>" + esc(c.name) + "</h3><p>" + esc(c.description) + "</p></div>" +
        '<span class="cat-band__count">' + count + "</span></a>" +
        (cards ? '<div class="cat-band__cards">' + cards + "</div>" : "") +
        "</section>";
    }).join("");
  }

  var stats = document.getElementById("hero-stats");
  if (stats) {
    var done = data.guidelines.filter(function (g) { return g.status === "complete"; }).length;
    stats.innerHTML =
      '<span><b>' + data.categories.length + "</b> categories</span>" +
      '<span><b>' + data.components.length + "</b> design patterns</span>" +
      '<span><b>' + data.guidelines.length + "</b> guidelines</span>" +
      '<span><b>' + done + "</b> complete</span>";
  }

  var compCards = document.getElementById("comp-cards");
  if (compCards) {
    compCards.innerHTML = data.components.map(function (c) {
      var s = compStyle(c.id);
      return '<a class="card" href="component.html?id=' + esc(c.id) + '" style="--accent:' + s.accent + ';--soft:' + s.soft + '">' +
        '<span class="card__icon">' + svgIcon(s.icon) + "</span>" +
        '<span class="card__body"><h3>' + esc(c.name) + "</h3><p>" + esc(c.description) + "</p></span></a>";
    }).join("");
  }
}

// Elenco nella barra laterale (categorie o design pattern), con la voce corrente evidenziata.
function renderRailList(container, items, page, activeId, label) {
  if (!container) return;
  container.innerHTML = "<h3>" + esc(label) + "</h3><ul>" + items.map(function (it) {
    return '<li><a href="' + page + "?id=" + esc(it.id) + '"' +
      (it.id === activeId ? ' aria-current="page"' : "") + ">" + esc(it.name) + "</a></li>";
  }).join("") + "</ul>";
}

// Pagina categoria: categoria dall'URL (o la prima), intestazione e sue linee guida.
async function initCategory() {
  var data = await loadData();
  var byId = {};
  data.guidelines.forEach(function (g) { byId[g.id] = g; });
  var id = getParam("id") || data.categories[0].id;
  var cat = data.categories.find(function (c) { return c.id === id; }) || data.categories[0];
  var s = catStyle(cat.id);

  renderRailList(document.getElementById("rail-list"), data.categories, "category.html", cat.id, "Categories");

  document.title = cat.name + " - Conversational Web";
  var list = data.guidelines.filter(function (g) { return g.categoryId === cat.id; });
  var header =
    '<div class="cat-header" style="--accent:' + s.accent + ';--soft:' + s.soft + '">' +
    '<span class="cat-header__icon">' + svgIcon(s.icon) + "</span>" +
    "<div><h1>" + esc(cat.name) + "</h1><p>" + esc(cat.description) + "</p></div></div>";
  renderDetailPage(header, list, byId);
}

// Pagina design pattern: come la categoria, ma le linee guida arrivano da comp.guidelineIds.
async function initComponent() {
  var data = await loadData();
  var byId = {};
  data.guidelines.forEach(function (g) { byId[g.id] = g; });
  var id = getParam("id") || data.components[0].id;
  var comp = data.components.find(function (c) { return c.id === id; }) || data.components[0];

  renderRailList(document.getElementById("rail-list"), data.components, "component.html", comp.id, "Design patterns");

  document.title = comp.name + " - Conversational Web";
  var s = compStyle(comp.id);
  var list = (comp.guidelineIds || []).map(function (gid) { return byId[gid]; })
    .filter(function (g) { return Boolean(g); });
  var header =
    '<div class="cat-header" style="--accent:' + s.accent + ';--soft:' + s.soft + '">' +
    '<span class="cat-header__icon">' + svgIcon(s.icon) + "</span>" +
    "<div><h1>" + esc(comp.name) + "</h1><p>" + esc(comp.description) + "</p></div></div>";
  renderDetailPage(header, list, byId);
}

// Barra laterale a scomparsa: hamburger per aprire, X per chiudere, backdrop su mobile.
function initRailToggle() {
  var shell = document.querySelector(".app-shell");
  if (!shell) return;
  var rail = shell.querySelector(".rail");
  if (!rail) return;
  if (!rail.id) rail.id = "site-rail";

  var open = document.createElement("button");
  open.className = "rail-toggle"; open.type = "button";
  open.setAttribute("aria-label", "Open menu");
  open.setAttribute("aria-controls", rail.id);
  open.innerHTML = svgIcon("menu");

  var close = document.createElement("button");
  close.className = "rail-close"; close.type = "button";
  close.setAttribute("aria-label", "Close menu");
  close.innerHTML = svgIcon("close");
  rail.insertBefore(close, rail.firstChild);

  var backdrop = document.createElement("div");
  backdrop.className = "rail-backdrop";

  // Apre/chiude e tiene coerenti aria e focus. Da chiusa la barra è fuori schermo
  // e va resa inert, così non la si raggiunge con Tab.
  function setCollapsed(state, moveFocus) {
    shell.classList.toggle("nav-collapsed", state);
    open.classList.toggle("is-visible", state);
    open.setAttribute("aria-expanded", state ? "false" : "true");
    if ("inert" in rail) rail.inert = state;
    rail.setAttribute("aria-hidden", state ? "true" : "false");
    if (moveFocus) { (state ? open : close).focus(); }
  }

  open.addEventListener("click", function () { setCollapsed(false, true); });
  close.addEventListener("click", function () { setCollapsed(true, true); });
  backdrop.addEventListener("click", function () { setCollapsed(true, true); });

  // Hamburger subito dopo lo skip-link, così "Skip to content" resta il primo tab stop
  // anche a menu chiuso (è position:fixed, non tocca il layout).
  var skip = document.querySelector(".skip-link");
  if (skip && skip.parentNode === document.body) document.body.insertBefore(open, skip.nextSibling);
  else document.body.insertBefore(open, document.body.firstChild);
  document.body.appendChild(backdrop);

  var mq = window.matchMedia("(max-width: 820px)");
  setCollapsed(mq.matches, false);
  // Al passaggio del breakpoint reimposta lo stato, così la barra non compare/sparisce a metà resize.
  function onBreakpoint(e) { setCollapsed(e.matches, false); }
  if (mq.addEventListener) mq.addEventListener("change", onBreakpoint);
  else if (mq.addListener) mq.addListener(onBreakpoint);
}

document.addEventListener("DOMContentLoaded", function () {
  initRailToggle();
  var page = document.body.dataset.page;
  var run = { home: initHome, category: initCategory, component: initComponent }[page];
  if (run) run().catch(function (err) { console.error(err); });
  window.addEventListener("hashchange", function () {
    if (page !== "category" && page !== "component") return;
    var id = window.location.hash.slice(1);
    if (id) selectGuideline(id, true);
  });
});
