(function () {
  const A = window.ARCHIVE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const THEME_KEY = "palmitessa-theme";
  const CHECK_KEY = "palmitessa-pulls";
  const QUIZ_KEY = "palmitessa-quiz";

  const state = {
    view: "home",
    chapter: 0,
    treeLine: "minnesota",
    person: null,
    quiz: 0,
    quizLocked: false,
    quizScore: 0,
    map: null,
    markers: {},
    searchHits: [],
    searchI: 0
  };

  function person(id) {
    return A.people[id];
  }

  function sourceById(id) {
    for (const group of Object.values(A.sources)) {
      const hit = group.find((s) => s.id === id);
      if (hit) return hit;
    }
    return null;
  }

  function md(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  function chip(status) {
    const labels = {
      documented: "Documented",
      hypothesis: "Hypothesis",
      notfound: "Not found",
      living: "Living · published only",
      family: "Family account",
      lead: "Lead"
    };
    return `<span class="chip chip-${status}">${labels[status] || status}</span>`;
  }

  function parseHash() {
    const raw = (location.hash || "#/").replace(/^#/, "");
    const parts = raw.split("/").filter(Boolean);
    return { view: parts[0] || "home", arg: parts[1] || "", rest: parts.slice(2) };
  }

  function go(path) {
    if (!path.startsWith("#")) path = "#/" + path.replace(/^\//, "");
    if (location.hash === path) render();
    else location.hash = path;
  }

  window.addEventListener("hashchange", render);

  function setActiveNav(view) {
    const mapView = view === "learn" ? "learn" : view;
    $$(".nav a").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.view === mapView);
    });
    $("#nav")?.classList.remove("open");
    $("#menu-toggle")?.setAttribute("aria-expanded", "false");
  }

  function render() {
    const { view, arg } = parseHash();
    state.view = view;
    setActiveNav(view);
    const main = $("#app");
    if (state.map) {
      state.map.remove();
      state.map = null;
      state.markers = {};
    }
    const pages = {
      home: renderHome,
      story: () => renderStory(arg),
      tree: () => renderTree(arg),
      line: renderLine,
      timeline: renderTimeline,
      places: () => renderPlaces(arg),
      iv: renderIV,
      clusters: renderClusters,
      research: renderResearch,
      people: () => renderPeople(arg),
      learn: () => renderQuiz(arg),
      privacy: renderPrivacy
    };
    (pages[view] || renderHome)();
    setPageMeta(view, arg);
    if (view === "home") main.querySelector(".hero")?.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  }

  function setPageMeta(view, arg) {
    const titles = {
      home: "Palmitessa family archive",
      story: "Story · Palmitessa family archive",
      tree: "Family tree · Palmitessa family archive",
      line: "Two sides · Palmitessa family archive",
      timeline: "Timeline · Palmitessa family archive",
      places: "Places · Palmitessa family archive",
      iv: "The IV · Palmitessa family archive",
      clusters: "Other clusters · Palmitessa family archive",
      research: "Research desk · Palmitessa family archive",
      people: "People · Palmitessa family archive",
      learn: "Learn · Palmitessa family archive",
      privacy: "Privacy · Palmitessa family archive"
    };
    document.title = titles[view] || titles.home;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && window.SITE) desc.setAttribute("content", window.SITE.description);
  }

  function renderHome() {
    const peopleN = Object.keys(A.people).length;
    const placeN = A.places.length;
    const qN = A.questions.length;
    $("#app").innerHTML = `
      <section class="hero">
        <img src="assets/monopoli-harbor.jpg" alt="White limestone old town and colorful fishing boats on the Adriatic at sunset">
        <div class="hero-shade"></div>
        <div class="hero-inner">
          <p class="kicker" style="color:#e8c48a">Private family archive</p>
          <h1>Palmitessa</h1>
          <p class="lede">A rare Italian name from the Adriatic town of Monopoli, a grocery on Seven Corners in St. Paul, and a documented path that reaches Indiana. This archive keeps what a record shows apart from what a family remembers, and from what is only likely.</p>
          <div class="hero-actions">
            <a class="primary-btn" href="#/story/name">Begin the story</a>
            <a class="ghost-btn" href="#/line">See both sides</a>
            <a class="ghost-btn" href="#/places">Open the map</a>
          </div>
          <div class="hero-meta">
            <span>Subject <b>Poaolo Dominic Palmitessa IV</b></span>
            <span>Reported DOB <b>29 July 1992</b></span>
            <span>Working line <b>Minnesota</b></span>
          </div>
        </div>
      </section>

      <section class="band band-cream">
        <div class="wrap">
          <p class="kicker">How to read this</p>
          <div class="section-head">
            <h2 class="display" style="font-size:2.2rem">Three kinds of knowing.</h2>
          </div>
          <p class="lede">${md(A.meta.scope)}</p>
          <div class="legend" style="margin-top:18px">
            ${chip("documented")} a record was opened
            ${chip("family")} the subject’s account of his own line
            ${chip("hypothesis")} reasonable but unproven
            ${chip("notfound")} searched, not invented
            ${chip("living")} named only as already published
          </div>
          <div class="grid-4" style="margin-top:28px">
            <div class="stat card"><b>13th</b><span>in Monopoli</span></div>
            <div class="stat card"><b>1914</b><span>Joseph born there</span></div>
            <div class="stat card"><b>1966</b><span>Indiana arrival</span></div>
            <div class="stat card"><b>4</b><span>Paolos in the line</span></div>
          </div>
        </div>
      </section>

      <section class="band">
        <div class="wrap">
          <div class="section-head">
            <div>
              <p class="kicker">Explore</p>
              <h2 class="display" style="font-size:2.2rem">Ways into the archive</h2>
            </div>
          </div>
          <div class="grid-3">
            ${portal("story/name", "assets/monopoli-harbor.jpg", "The story", "Seven chapters from Puglia to Plymouth. Read it in order.")}
            ${portal("line", "assets/monopoli-street.jpg", "Two sides", "Palmitessa on the left, Rudd on the right, Dom in the middle.")}
            ${portal("tree", "assets/stpaul-grocery.jpg", "Full tree", "Minnesota line, Rudd household, Scranton and Maine clusters.")}
            ${portal("timeline", "assets/stpaul-grocery.jpg", "Timeline", "From an 18th-century palazzo to a 2022 obituary.")}
            ${portal("places", "assets/indiana-square.jpg", "Places", "Monopoli, St. Paul, Grundy Center, Plymouth, and unconnected clusters.")}
            ${portal("iv", "assets/research-desk.jpg", "The IV question", "Paolo, Joseph, Jerry, Poaolo, Poaolo IV, Paolo — four of that given name; IV is still only on Dom.")}
            ${portal("clusters", "assets/monopoli-street.jpg", "Other clusters", "Scranton, Maine/N.H., Reading, Rochester, Hudson County — documented, unlinked.")}
            ${portal("research", "assets/research-desk.jpg", "Research desk", `${qN} open questions, priority pulls, and the source list.`)}
            ${portal("learn", "assets/research-desk.jpg", "Test yourself", "Six questions on what is proven versus what is only likely.")}
          </div>
        </div>
      </section>

      <section class="band band-ink">
        <div class="wrap">
          <p class="kicker" style="color:#e8c48a">The line, as the subject tells it</p>
          <h2 class="display" style="font-size:2.4rem;max-width:22ch">Then IV, then Paolo, and Violet.</h2>
          <p class="muted" style="max-width:68ch;margin:16px 0 28px">Paolo Domenico (1879–1962) → Joseph F. (1914–2007) → Jerry Palmitessa → Poaolo Dominic Palmitessa (b. 1970, no suffix) → Poaolo IV (b. 1992) → Paolo Dominic (b. 2023, no suffix). Four of those men are named Paolo or Poaolo. IV is a styling on the subject, not a number passed to his son. Violet Ann Palmitessa (b. 2025) is his daughter.</p>
          <div class="lineage">
            ${glance("1", "Paolo Domenico", "Paolo — immigrant")}
            ${glance("2", "Joseph Frank", "Not a Paolo")}
            ${glance("3", "Jerry", "Not a Paolo")}
            ${glance("4", "Poaolo", "Dad, b. 1970. No suffix.")}
            ${glance("5", "Poaolo IV", "Documented styling, 2006.")}
            ${glance("6", "Paolo", "Son, b. 2023. No suffix.")}
          </div>
          <p style="margin-top:22px"><a class="primary-btn" href="#/iv">See the numbering test</a></p>
        </div>
      </section>

      <section class="band band-cream">
        <div class="wrap">
          <p class="kicker">Held in this file</p>
          <div class="grid-4">
            <div class="stat card"><b>${peopleN}</b><span>named people</span></div>
            <div class="stat card"><b>${placeN}</b><span>mapped places</span></div>
            <div class="stat card"><b>${A.chapters.length}</b><span>story chapters</span></div>
            <div class="stat card"><b>${A.events.length}</b><span>timeline events</span></div>
          </div>
        </div>
      </section>
    `;
  }

  function portal(href, img, title, blurb) {
    return `<a class="portal" href="#/${href}">
      <img src="${img}" alt="">
      <div class="portal-body">
        <h3>${title}</h3>
        <p class="small muted">${blurb}</p>
      </div>
    </a>`;
  }

  function glance(n, name, note) {
    return `<div class="card" style="background:rgba(255,253,248,0.06);border-color:rgba(250,246,238,0.12);color:#faf6ee">
      <div style="font-family:var(--font-display);font-size:2rem;color:#e8c48a">${n}</div>
      <div style="font-family:var(--font-display);font-size:1.15rem;margin:6px 0 8px">${name}</div>
      <div class="small" style="color:rgba(250,246,238,0.65)">${note}</div>
    </div>`;
  }

  function renderStory(id) {
    const i = Math.max(0, A.chapters.findIndex((c) => c.id === id));
    const ch = A.chapters[i] || A.chapters[0];
    state.chapter = i;
    try { localStorage.setItem("palmitessa-chapter", ch.id); } catch (e) {}
    const prev = A.chapters[i - 1];
    const next = A.chapters[i + 1];
    $("#app").innerHTML = `
      <div class="page wrap">
        <div class="progress"><span style="width:${((i + 1) / A.chapters.length) * 100}%"></span></div>
        <div class="story-layout">
          <nav class="chapter-nav" aria-label="Chapters">
            ${A.chapters.map((c, n) => `<a href="#/story/${c.id}" class="${c.id === ch.id ? "is-active" : ""}">${n + 1}. ${c.title}</a>`).join("")}
          </nav>
          <article>
            <p class="kicker">Chapter ${i + 1} of ${A.chapters.length} · ${ch.kicker}</p>
            <h1 class="display" style="font-size:clamp(2rem,5vw,3.4rem);margin-bottom:18px">${ch.title}</h1>
            <figure class="story-figure">
              <img src="${ch.image}" alt="" data-lightbox="${ch.image}" data-caption="${ch.caption.replace(/"/g, "&quot;")}">
              <figcaption>${ch.caption}</figcaption>
            </figure>
            <div class="story-copy">
              ${ch.body.map(block).join("")}
            </div>
            <p class="kicker" style="margin-top:28px">People in this chapter</p>
            <div class="gen-row" style="justify-content:flex-start;margin-top:10px">
              ${ch.people.map(node).join("")}
            </div>
            <div class="story-nav">
              ${prev ? `<a class="ghost-btn dark" href="#/story/${prev.id}">← ${prev.title}</a>` : `<span></span>`}
              ${next ? `<a class="primary-btn" href="#/story/${next.id}">${next.title} →</a>` : `<a class="primary-btn" href="#/line">See both sides →</a>`}
            </div>
          </article>
        </div>
      </div>
    `;
  }

  function block(b) {
    if (b.type === "p") return `<p>${md(b.text)}</p>`;
    if (b.type === "callout") return `<div class="callout ${b.tone}">${md(b.text)}</div>`;
    return "";
  }

  function node(id, extraClass) {
    const p = person(id);
    if (!p) return "";
    const cls = extraClass ? ` ${extraClass}` : "";
    return `<button class="person-node ${p.status}${cls}" type="button" data-person="${p.id}">
      <div class="name">${p.name}</div>
      <div class="years">${p.years || p.role || ""}</div>
      <div class="role">${statusLabel(p.status)}</div>
    </button>`;
  }

  function statusLabel(s) {
    return ({ documented: "Documented", hypothesis: "Hypothesis", notfound: "Not found", living: "Living · published", family: "Family account" }[s] || s);
  }

  function renderLine() {
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Pedigree of the subject</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Two sides of one household</h1>
        <p class="lede">Left is the Palmitessa trail that reaches Indiana. Right is the Rudd household that published the IV styling. Purple cards are family account. Green cards rest on an opened record.</p>
        <div class="legend" style="margin:16px 0 8px">${chip("documented")} ${chip("family")} ${chip("living")} ${chip("hypothesis")}</div>
        <div class="sides">
          <section class="side-col paternal">
            <p class="kicker">Paternal · Palmitessa</p>
            <h2>Minnesota line</h2>
            <p class="small muted">Working pedigree from the 13 September 2026 family account, anchored on published obituaries.</p>
            <div class="flow" style="margin-top:16px">
              <div class="couple">${node("paolo-domenico")}${node("teresa-ippolito")}</div>
              <div class="connector"></div>
              <div class="couple">${node("joseph-frank")}${node("ida-held")}</div>
              <div class="connector"></div>
              <div class="couple">${node("jerry")}${node("susie-shez")}</div>
              <div class="connector"></div>
              ${node("poaolo-father")}
            </div>
          </section>
          <div class="subject-well">
            <div class="connector"></div>
            ${node("poaolo-iv", "subject")}
            <p class="small muted" style="text-align:center;max-width:18ch">Subject. IV styling documented in 2006. Parents are family account.</p>
            <div class="connector"></div>
            <div class="couple">${node("quinn-li")}</div>
            <div class="connector"></div>
            <div class="gen-row">${node("paolo-son")}${node("violet-ann")}</div>
          </div>
          <section class="side-col maternal">
            <p class="kicker">Maternal · Rudd</p>
            <h2>Plymouth household</h2>
            <p class="small muted">Ned’s 2006 obituary names Poaolo Dominic Palmitessa IV among the grandchildren. It never says “son of Amy.”</p>
            <div class="flow" style="margin-top:16px">
              <div class="couple">${node("ned-rudd")}${node("mary-lee-rudd")}</div>
              <div class="connector"></div>
              ${node("amy-burch")}
              <p class="small muted" style="margin:10px 0 0">Maternal aunt, published</p>
              ${node("angela-rudd")}
            </div>
          </section>
        </div>
        <div class="callout family" style="margin-top:28px">Family account, 13 September 2026: father is <strong>Poaolo Dominic Palmitessa, born 1970</strong>, son of Jerry Palmitessa and Susie Shez; mother is <strong>Amy</strong> of the Rudd household; Angela is a maternal aunt. Family account, 18 September 2026: spouse <strong>Quinn Li Xiang (Luther) Palmitessa</strong>; children <strong>Paolo Dominic Palmitessa (2023)</strong>, no suffix, and <strong>Violet Ann Palmitessa (2025)</strong>.</div>
        <div class="grid-2" style="margin-top:16px">
          <div class="card">
            <p class="kicker">Still uncaptioned in public records</p>
            <p class="small">A birth, marriage, or captioned obituary that names Dom’s father as son of Jerry and Susie Shez. Joseph’s 2007 grandson <em>Paolo</em> is a plausible match, not a caption. A public record captioning Amy as Dom’s mother.</p>
          </div>
          <div class="card">
            <p class="kicker">Already on the page</p>
            <p class="small">Joseph born Monopoli, 1914. Joseph and Ida in Indiana from 1966. Hostetler in-laws in Plymouth. Ned Rudd’s 2006 list. Plymouth High School swimmer, 2008–09. Electra Sue (Palmitessa) Fasching’s in-laws naming Susie Shez and a Poaolo Palmitessa.</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderTree(line) {
    state.treeLine = line && A.tree[line] ? line : "minnesota";
    const gens = A.tree[state.treeLine];
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Pedigree</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Family tree</h1>
        <p class="lede">Click anyone for the card, sources, and relations. For Dom’s two sides together, use <a href="#/line">Two sides</a>.</p>
        <div class="tree-toolbar">
          <div class="tabs">
            ${Object.keys(A.tree).map((k) => `<button class="tab ${k === state.treeLine ? "is-active" : ""}" data-line="${k}">${lineLabel(k)}</button>`).join("")}
          </div>
          <div class="legend">${chip("documented")} ${chip("family")} ${chip("hypothesis")} ${chip("living")} ${chip("notfound")}</div>
        </div>
        ${gens.map((g, i) => `
          ${i ? `<div class="connector"></div>` : ""}
          <section class="generation">
            <h3>${g.label}</h3>
            <div class="gen-row">
              ${g.couples ? g.couples.map((pair) => `<div class="couple">${node(pair[0])}${node(pair[1])}</div>`).join("") : ""}
              ${g.people ? g.people.map(node).join("") : ""}
            </div>
            ${g.note ? `<p class="tree-note">${md(g.note)}</p>` : ""}
          </section>
        `).join("")}
        ${state.treeLine === "minnesota" ? `
          <section class="card" style="margin-top:12px">
            <p class="kicker">How to read this line</p>
            <p class="small muted">Joseph’s 2007 obituary lists a grandson Paolo and 21 great-grandchildren. Family account: Dom is a great-grandson; his father is the plausible published match for that grandson Paolo. The Rudd obituaries name Dom as Ned’s grandson on the maternal side.</p>
          </section>` : ""}
      </div>
    `;
    $$("[data-line]").forEach((b) => b.addEventListener("click", () => go("tree/" + b.dataset.line)));
  }

  function lineLabel(k) {
    return { minnesota: "Minnesota line", rudd: "Rudd household", scranton: "Scranton cluster", maine: "Maine / N.H." }[k] || k;
  }

  function renderTimeline() {
    let lastEra = "";
    const items = A.events.map((e) => {
      const era = eraOf(e.year);
      const stamp = era !== lastEra ? `<div class="era">${era}</div>` : "";
      lastEra = era;
      return `${stamp}
        <article class="tl-item ${e.status}" data-status="${e.status}">
          <div class="tl-dot"></div>
          <div class="tl-year">${e.year} · ${statusLabel(e.status)}</div>
          <h3>${e.title}</h3>
          <p>${md(e.text)}</p>
          ${e.people.length ? `<div class="legend" style="margin-top:8px">${e.people.map((id) => `<button class="chip chip-lead" data-person="${id}">${(person(id) || {}).name || id}</button>`).join("")}</div>` : ""}
        </article>`;
    }).join("");
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Chronology</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Timeline</h1>
        <p class="lede">Amber dots are inferred. Terracotta dots rest on an opened record. Purple is the subject’s account of his own line.</p>
        <div class="filters" style="margin:16px 0 24px">
          <button class="filter is-active" data-tl="all">All</button>
          <button class="filter" data-tl="documented">Documented</button>
          <button class="filter" data-tl="family">Family account</button>
          <button class="filter" data-tl="hypothesis">Hypothesis</button>
        </div>
        <div class="timeline" id="timeline">${items}</div>
      </div>
    `;
    $$("[data-tl]").forEach((b) => {
      b.addEventListener("click", () => {
        $$("[data-tl]").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        const f = b.dataset.tl;
        $$(".tl-item").forEach((el) => {
          el.style.display = f === "all" || el.dataset.status === f ? "" : "none";
        });
        $$(".era").forEach((el) => { el.style.display = f === "all" ? "" : "none"; });
      });
    });
  }

  function eraOf(year) {
    const n = parseInt(String(year), 10);
    if (!n) return "Undated";
    if (n < 1900) return "Italy, before the crossing";
    if (n < 1920) return "Immigration window";
    if (n < 1960) return "St. Paul generations";
    if (n < 1990) return "Indiana footprint";
    return "Published lives";
  }

  function renderPlaces(focus) {
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Geography</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Places</h1>
        <p class="lede">Terracotta markers are on the Minnesota / Indiana trail. Slate markers are other Palmitessa clusters with no opened link to Dom. Amber is unconfirmed occupancy or a lead. The solid line is the U.S. trail; the dashed line is the hypothesized Adriatic crossing.</p>
        <div id="map" class="map-wrap"></div>
        <div class="place-list">
          ${A.places.map((p) => `
            <button class="place-card" data-place="${p.id}" type="button">
              <div class="legend">${chip(p.status)}</div>
              <strong style="display:block;margin:8px 0 6px;font-family:var(--font-display);font-size:1.15rem">${p.name}</strong>
              <span class="small muted">${p.blurb}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
    const colors = { documented: "#b85a34", hypothesis: "#a56b1f", living: "#1f4f5d", origin: "#2c6a4e" };
    const map = L.map("map", { scrollWheelZoom: false }).setView([41.5, -40], 3);
    state.map = map;
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap &copy; CARTO",
      maxZoom: 18
    }).addTo(map);
    A.places.forEach((p) => {
      const color = p.line === "origin" ? colors.origin : (colors[p.status] || "#6a6158");
      const m = L.circleMarker([p.lat, p.lng], {
        radius: p.line === "minnesota" || p.line === "origin" || p.line === "rudd" ? 8 : 6,
        color: "#fff",
        weight: 2,
        fillColor: color,
        fillOpacity: 0.95
      }).addTo(map);
      m.bindPopup(`<strong>${p.name}</strong><br>${p.blurb}`);
      state.markers[p.id] = m;
    });
    const trail = ["monopoli", "st-paul", "grundy", "plymouth", "northfield"]
      .map((id) => A.places.find((p) => p.id === id))
      .filter(Boolean)
      .map((p) => [p.lat, p.lng]);
    if (trail.length > 2) {
      L.polyline(trail.slice(1), { color: "#b85a34", weight: 2, opacity: 0.7 }).addTo(map);
      L.polyline(trail.slice(0, 2), { color: "#a56b1f", weight: 2, opacity: 0.8, dashArray: "6 8" }).addTo(map);
    }
    setTimeout(() => map.invalidateSize(), 80);
    $$("[data-place]").forEach((b) => {
      b.addEventListener("click", () => fly(b.dataset.place));
    });
    if (focus && state.markers[focus]) fly(focus);
  }

  function fly(id) {
    const p = A.places.find((x) => x.id === id);
    const m = state.markers[id];
    if (!p || !m || !state.map) return;
    state.map.flyTo([p.lat, p.lng], 8, { duration: 0.8 });
    m.openPopup();
  }

  function renderIV() {
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Onomastics</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">How the “IV” numbering actually works</h1>
        <p class="lede">The paternal line is Paolo, Joseph, Jerry, Poaolo, Poaolo IV, Paolo. Joseph and Jerry are in the line. They are not a missing Paolo. The son is a Paolo with no suffix.</p>
        <div class="count-strip">
          <div class="card">
            <div class="big">4</div>
            <p class="kicker" style="margin-top:8px">Men named Paolo / Poaolo</p>
            <p class="small muted">Immigrant, father, subject, son.</p>
          </div>
          <div class="card">
            <div class="big">IV</div>
            <p class="kicker" style="margin-top:8px">A family styling</p>
            <p class="small muted">Documented on the subject in 2006. Not a filled I–IV chain, and not passed to the 2023 son.</p>
          </div>
        </div>
        <div class="iv-row">
          ${A.iv.map((slot) => {
            const p = slot.person ? person(slot.person) : null;
            return `<article class="iv-card">
              <div class="num">${slot.numeral}</div>
              ${chip(slot.status)}
              ${slot.sameGiven ? `<span class="chip chip-documented">Paolo / Poaolo</span>` : `<span class="chip chip-notfound">Not that given name</span>`}
              <h3 style="margin:10px 0 8px;font-size:1.25rem">${p ? p.name : ""}</h3>
              <p class="small">${md(slot.verdict)}</p>
              ${p ? `<p style="margin-top:10px"><button class="text-btn" data-person="${p.id}">Open card →</button></p>` : ""}
            </article>`;
          }).join("")}
        </div>
        <div class="callout family">Four men in this line have the given name Paolo or Poaolo: the immigrant, the father (no suffix), the subject (IV), and the son (2023, no suffix). IV is a family styling on the subject. It is not a headcount, and it is not a “V” on the next generation.</div>
        <div class="grid-2" style="margin-top:18px">
          <div class="card">
            <p class="kicker">What is documented</p>
            <p>Poaolo Dominic Palmitessa IV in Ned Rudd’s 2006 Plymouth obituary. The spelling Poaolo again in the 2008–09 Plymouth High School swim result. Quinn Li Palmitessa as wife of Dominic Palmitessa of Warsaw, 2022.</p>
          </div>
          <div class="card">
            <p class="kicker">Family account</p>
            <p>The line is Paolo Domenico → Joseph F. → Jerry → Poaolo Dominic (b. 1970, no suffix) → Poaolo IV → Paolo Dominic (b. 2023, no suffix). Daughter: Violet Ann Palmitessa (b. 2025). Spouse: Quinn Li Xiang (Luther) Palmitessa.</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderClusters() {
    const blocks = [
      { title: "A. Scranton / Lackawanna County, Pennsylvania", line: "scranton", text: "Domenico “Domnick” Palmitessa and Victoria Ungaro. Same surname, similar immigrant birth years to Minnesota Paolo Domenico, but different wife, different burial, different death year. Italian town: not found. Treat as a separate family until a shared Italian parent is shown." },
      { title: "B. Biddeford, Maine / Dover, New Hampshire", line: "maine", text: "Jiacomo John Palmittessa (stone spelling Palmittessa), 8 May 1889 – 26 November 1975. A 2016 user note claims a Florida Paolo (17 March 1886 – 1975) was his brother. That is a lead, not a fact. That Florida Paolo is not Minnesota’s Paolo Domenico." },
      { title: "C. Other clusters", line: "other", text: "Reading / Berks County, PA (Donato Palmitessa, 1901–1975). Rochester, NY (Paul, 1887–1956, and Antoinetta C.). Hudson County, NJ (August, d. 1984; Cosmo A., d. 2004). No opened record connects any of them to Dom." }
    ];
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Same surname</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Other U.S. Palmitessa families</h1>
        <p class="lede">Real, documented, and — in every source opened for this brief — unconnected to Dom.</p>
        <div class="card" style="margin:18px 0 22px;overflow:auto">
          <table class="compare-table">
            <thead>
              <tr><th>Cluster</th><th>Immigrant</th><th>Wife</th><th>Burial / last place</th><th>Link to Dom</th></tr>
            </thead>
            <tbody>
              <tr><td>Minnesota (working line)</td><td>Paolo Domenico, 1879–1962</td><td>Teresa Ippolito</td><td>Mendota Heights, MN</td><td>Documented trail to Indiana; family account to Dom</td></tr>
              <tr><td>Scranton, PA</td><td>Domenico “Domnick,” ~1879/80–1968</td><td>Victoria Ungaro</td><td>Cathedral Cemetery, Scranton</td><td>Unproven</td></tr>
              <tr><td>Maine / N.H.</td><td>Jiacomo, 1889–1975</td><td>Clementine Petit</td><td>Biddeford / Dover</td><td>Unproven</td></tr>
              <tr><td>Florida (lead only)</td><td>Paolo, 1886–1975</td><td>—</td><td>Fort Lauderdale</td><td>Unproven; not the Minnesota Paolo</td></tr>
            </tbody>
          </table>
        </div>
        ${blocks.map((b) => `
          <article class="cluster card">
            <div>
              <h2 style="font-size:1.6rem;margin-bottom:10px">${b.title}</h2>
              <p>${b.text}</p>
              <p style="margin-top:12px"><a class="ghost-btn dark" href="#/tree/${b.line === "other" ? "scranton" : b.line}">Open this cluster on the tree</a></p>
            </div>
            <div class="gen-row">
              ${Object.values(A.people).filter((p) => p.line === b.line).slice(0, 6).map((p) => node(p.id)).join("")}
            </div>
          </article>
        `).join("")}
        <div class="callout">Unproven for Scranton Dominic, Florida Paolo (1886), and Jiacomo of Dover. The Minnesota Paolo Domenico is the only immigrant of that name with a documented descendant trail that reaches Indiana and a grandson generation that includes a Paolo/Poaolo.</div>
      </div>
    `;
  }

  function renderResearch() {
    const saved = loadChecks();
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Research desk</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Open questions and sources</h1>
        <p class="lede">FamilySearch record images, Antenati person search, and Ellis Island manifest images were blocked or JS-only in the 1 September 2026 session. Highest-value next steps: Monopoli nati 1879 and 1914, and a 1914–1918 passenger list.</p>
        <div class="grid-2" style="margin:22px 0">
          <div>
            <h2 style="font-size:1.4rem;margin-bottom:10px">Open questions</h2>
            <ol class="priority">${A.questions.map((q) => `<li>${q}</li>`).join("")}</ol>
          </div>
          <div>
            <h2 style="font-size:1.4rem;margin-bottom:10px">Priority pulls</h2>
            <ol class="priority">${A.pulls.map((q, i) => `
              <li>
                <label class="check-row">
                  <input type="checkbox" data-pull="${i}" ${saved.includes(i) ? "checked" : ""}>
                  <span>${q}</span>
                </label>
              </li>`).join("")}</ol>
            <div class="card" style="margin-top:14px">
              <p class="kicker">Portals</p>
              <p class="small"><a href="https://antenati.cultura.gov.it/search-registry/?localita=Monopoli" target="_blank" rel="noopener">Antenati · Monopoli registries</a><br>
              <a href="https://www.familysearch.org/en/wiki/Monopoli,_Bari,_Puglia,_Italy_Genealogy" target="_blank" rel="noopener">FamilySearch wiki · Monopoli</a><br>
              <a href="https://www.statueofliberty.org/discover/heritagesearch/" target="_blank" rel="noopener">Ellis Island Heritage Search</a></p>
            </div>
          </div>
        </div>
        ${Object.entries(A.sources).map(([group, items]) => `
          <h2 style="font-size:1.3rem;margin:22px 0 10px">${group}</h2>
          <div class="grid-2">
            ${items.map((s) => `<article class="source-card"><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></article>`).join("")}
          </div>
        `).join("")}
      </div>
    `;
    $$("[data-pull]").forEach((box) => {
      box.addEventListener("change", () => {
        const next = $$("[data-pull]").filter((el) => el.checked).map((el) => Number(el.dataset.pull));
        try { localStorage.setItem(CHECK_KEY, JSON.stringify(next)); } catch (e) {}
      });
    });
  }

  function loadChecks() {
    try {
      const raw = JSON.parse(localStorage.getItem(CHECK_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) {
      return [];
    }
  }

  function renderPrivacy() {
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Private archive</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">Privacy and scope</h1>
        <p class="lede">This file is a private family archive. The research uses published obituaries, Find A Grave memorials, and a family account the subject gave for his own parents and paternal grandparents. The site itself is not meant for search engines or a public Pages URL.</p>
        <div class="grid-2" style="margin-top:22px">
          <div class="card">
            <p class="kicker">What is here</p>
            <p>Names, dates, towns, and relationships that already appear in public records, or that the subject supplied for this archive. Each claim is labeled documented, family account, hypothesis, or not found.</p>
          </div>
          <div class="card">
            <p class="kicker">What is not here</p>
            <p>Current addresses, phone numbers, email addresses, Social Security numbers, private photographs, and unpublished records of living people. No dates, relatives, or towns are invented.</p>
          </div>
        </div>
        <div class="callout" style="margin-top:18px">Living people besides Dom are named only where obituaries already name them, or where the subject supplied the name. Place photographs are atmospheric stand-ins, not family property.</div>
        <h2 style="font-size:1.5rem;margin:28px 0 10px">What this site stores</h2>
        <p>No accounts. No analytics pixels. Theme preference, research-desk check marks, and quiz score stay in your browser’s local storage on this device. Clearing site data removes them.</p>
        <h2 style="font-size:1.5rem;margin:28px 0 10px">Maps and fonts</h2>
        <p>Map tiles come from CARTO / OpenStreetMap when you open Places. Fonts load from Google Fonts. Those third parties may see that a browser requested a file. The family data itself is not sent to them.</p>
        <h2 style="font-size:1.5rem;margin:28px 0 10px">Corrections</h2>
        <p>If a published fact is wrong, or a living person named from an obituary wants the name removed from this presentation, open an issue on <a href="https://github.com/spicefiendd/palmitessa-family-history" rel="noopener">the repository</a>.</p>
      </div>
    `;
  }

  function renderPeople(letter) {
    const list = Object.values(A.people).sort((a, b) => a.name.localeCompare(b.name));
    const letters = [...new Set(list.map((p) => p.name[0].toUpperCase()))];
    const shown = letter ? list.filter((p) => p.name[0].toUpperCase() === letter.toUpperCase()) : list;
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Index</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">People</h1>
        <p class="lede">${list.length} names from published sources. Press <kbd>/</kbd> to search across the whole archive.</p>
        <div class="alpha-bar">
          <a class="tab ${!letter ? "is-active" : ""}" href="#/people">All</a>
          ${letters.map((L) => `<a class="tab ${letter === L ? "is-active" : ""}" href="#/people/${L}">${L}</a>`).join("")}
        </div>
        <div class="people-grid">${shown.map((p) => node(p.id)).join("")}</div>
      </div>
    `;
  }

  function renderQuiz() {
    const i = state.quiz;
    const q = A.quiz[i];
    const done = i >= A.quiz.length;
    $("#app").innerHTML = `
      <div class="page wrap">
        <p class="kicker">Learn</p>
        <h1 class="display" style="font-size:clamp(2rem,5vw,3.2rem)">What do the records actually say?</h1>
        <p class="lede">Six questions drawn from the brief. The right answer is always the more careful one.</p>
        <div class="progress"><span style="width:${(Math.min(i, A.quiz.length) / A.quiz.length) * 100}%"></span></div>
        ${done ? `
          <div class="card">
            <h2 style="font-size:2rem;margin-bottom:10px">${state.quizScore} of ${A.quiz.length} on the first pass.</h2>
            <p>Documented facts stay documented. Hypotheses stay labeled. Gaps stay gaps. The Minnesota line is the trail that reaches Indiana — and it is still not a closed proof.</p>
            <p style="margin-top:16px">
              <a class="primary-btn" href="#/research">Open the research desk</a>
              <button class="ghost-btn dark" id="quiz-reset" type="button">Try again</button>
            </p>
          </div>` : `
          <div class="card">
            <p class="small muted">Question ${i + 1} of ${A.quiz.length}</p>
            <h2 class="quiz-q">${q.q}</h2>
            <div id="choices">${q.choices.map((c, n) => `<button class="choice" data-i="${n}" type="button">${c}</button>`).join("")}</div>
            <div class="quiz-explain hidden" id="explain"><div class="callout">${q.why}</div>
              <p style="margin-top:12px"><button class="primary-btn" id="quiz-next" type="button">${i + 1 === A.quiz.length ? "Finish" : "Next question"}</button></p>
            </div>
          </div>`}
      </div>
    `;
    $("#quiz-reset")?.addEventListener("click", () => {
      state.quiz = 0;
      state.quizLocked = false;
      state.quizScore = 0;
      renderQuiz();
    });
    $$(".choice").forEach((b) => {
      b.addEventListener("click", () => {
        if (state.quizLocked) return;
        state.quizLocked = true;
        const pick = Number(b.dataset.i);
        if (pick === q.answer) state.quizScore += 1;
        $$(".choice").forEach((c) => {
          const n = Number(c.dataset.i);
          if (n === q.answer) c.classList.add("correct");
          if (n === pick && pick !== q.answer) c.classList.add("wrong");
        });
        $("#explain").classList.remove("hidden");
      });
    });
    $("#quiz-next")?.addEventListener("click", () => {
      state.quiz += 1;
      state.quizLocked = false;
      try { localStorage.setItem(QUIZ_KEY, String(state.quizScore)); } catch (e) {}
      renderQuiz();
    });
  }

  function openPerson(id) {
    const p = person(id);
    if (!p) return;
    state.person = id;
    const drawer = $("#drawer");
    const sources = (p.sources || []).map(sourceById).filter(Boolean);
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <p class="kicker">${p.role || ""}</p>
          <h2 class="display" style="font-size:1.8rem">${p.name}</h2>
          <p class="muted">${p.years || ""}</p>
        </div>
        <button class="icon-btn" type="button" id="close-drawer" aria-label="Close">✕</button>
      </div>
      <div style="margin:12px 0">${chip(p.status)}</div>
      ${p.aka?.length ? `<p class="small muted">Also: ${p.aka.join(" · ")}</p>` : ""}
      ${p.born ? `<p><strong>Born.</strong> ${p.born}</p>` : ""}
      ${p.died ? `<p><strong>Died.</strong> ${p.died}</p>` : ""}
      ${p.place ? `<p><strong>Place.</strong> ${p.place}</p>` : ""}
      ${p.burial ? `<p><strong>Burial.</strong> ${p.burial}</p>` : ""}
      <p>${md(p.summary)}</p>
      ${(p.notes || []).map((n) => `<div class="callout hypothesis">${md(n)}</div>`).join("")}
      ${p.relations?.length ? `<h3 style="margin:18px 0 6px;font-size:1.1rem">Relations</h3><div class="rel-list">${p.relations.map((r) => {
        const q = person(r.id);
        return q ? `<button type="button" data-person="${q.id}"><strong>${r.type}</strong><br>${q.name}</button>` : "";
      }).join("")}</div>` : ""}
      ${sources.length ? `<h3 style="margin:18px 0 6px;font-size:1.1rem">Sources</h3>${sources.map((s) => `<p class="small"><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></p>`).join("")}` : ""}
    `;
    drawer.classList.add("open");
    $("#drawer-backdrop").classList.add("open");
    $("#close-drawer").addEventListener("click", closePerson);
  }

  function closePerson() {
    state.person = null;
    $("#drawer").classList.remove("open");
    $("#drawer-backdrop").classList.remove("open");
  }

  function openSearch() {
    const modal = $("#search-modal");
    modal.classList.add("open");
    const input = $("#search-input");
    input.value = "";
    $("#search-results").innerHTML = `<p class="small muted" style="padding:12px 18px">Names, places, chapters, sources.</p>`;
    input.focus();
  }

  function closeSearch() {
    $("#search-modal").classList.remove("open");
  }

  function runSearch(q) {
    const query = q.trim().toLowerCase();
    if (!query) {
      $("#search-results").innerHTML = "";
      state.searchHits = [];
      return;
    }
    const hits = [];
    Object.values(A.people).forEach((p) => {
      const blob = [p.name, ...(p.aka || []), p.summary, p.role, p.place, p.years].filter(Boolean).join(" ").toLowerCase();
      if (blob.includes(query)) hits.push({ kind: "Person", title: p.name, sub: p.years || p.role, run: () => { closeSearch(); openPerson(p.id); } });
    });
    A.places.forEach((p) => {
      if ((p.name + p.blurb).toLowerCase().includes(query)) hits.push({ kind: "Place", title: p.name, sub: p.blurb, run: () => { closeSearch(); go("places/" + p.id); } });
    });
    A.chapters.forEach((c) => {
      if ((c.title + c.kicker).toLowerCase().includes(query)) hits.push({ kind: "Chapter", title: c.title, sub: c.kicker, run: () => { closeSearch(); go("story/" + c.id); } });
    });
    Object.values(A.sources).forEach((group) => {
      group.forEach((s) => {
        if ((s.title + s.url).toLowerCase().includes(query)) {
          hits.push({ kind: "Source", title: s.title, sub: s.url, run: () => { closeSearch(); window.open(s.url, "_blank", "noopener"); } });
        }
      });
    });
    state.searchHits = hits.slice(0, 24);
    state.searchI = 0;
    $("#search-results").innerHTML = state.searchHits.map((h, i) => `
      <button class="search-hit ${i === 0 ? "active" : ""}" data-i="${i}" type="button">
        <span class="small muted">${h.kind}</span><br><strong>${h.title}</strong>
        <div class="small muted">${h.sub || ""}</div>
      </button>
    `).join("") || `<p class="small muted" style="padding:12px 18px">No matches.</p>`;
    $$(".search-hit").forEach((b) => b.addEventListener("click", () => state.searchHits[Number(b.dataset.i)]?.run()));
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  function openHelp() { $("#help-modal").classList.add("open"); }
  function closeHelp() { $("#help-modal").classList.remove("open"); }

  function openLightbox(src, caption) {
    let box = $("#lightbox");
    if (!box) {
      box = document.createElement("div");
      box.id = "lightbox";
      box.className = "lightbox";
      box.innerHTML = `<img alt=""><p class="sr-only"></p>`;
      document.body.appendChild(box);
      box.addEventListener("click", () => box.classList.remove("open"));
    }
    box.querySelector("img").src = src;
    box.querySelector("img").alt = caption || "";
    box.classList.add("open");
  }

  function bindChrome() {
    $("#search-open")?.addEventListener("click", openSearch);
    $("#search-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "search-modal") closeSearch();
    });
    $("#search-input")?.addEventListener("input", (e) => runSearch(e.target.value));
    $("#drawer-backdrop")?.addEventListener("click", closePerson);
    $("#menu-toggle")?.addEventListener("click", () => {
      const open = $("#nav").classList.toggle("open");
      $("#menu-toggle").setAttribute("aria-expanded", String(open));
    });
    $("#theme-toggle")?.addEventListener("click", toggleTheme);
    $("#help-open")?.addEventListener("click", openHelp);
    $("#help-close")?.addEventListener("click", closeHelp);
    $("#help-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "help-modal") closeHelp();
    });
    document.addEventListener("click", (e) => {
      const photo = e.target.closest("[data-lightbox]");
      if (photo) {
        openLightbox(photo.dataset.lightbox, photo.dataset.caption);
        return;
      }
      const el = e.target.closest("[data-person]");
      if (!el || el.closest(".search-modal")) return;
      e.preventDefault();
      openPerson(el.dataset.person);
    });
    document.addEventListener("keydown", (e) => {
      if ((e.key === "/" || (e.key === "k" && (e.metaKey || e.ctrlKey))) && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "?" && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        e.preventDefault();
        openHelp();
      }
      if (e.key === "Escape") {
        closeSearch();
        closePerson();
        closeHelp();
        $("#lightbox")?.classList.remove("open");
      }
      if ($("#search-modal").classList.contains("open")) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          state.searchI = Math.min(state.searchI + 1, state.searchHits.length - 1);
          paintSearch();
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          state.searchI = Math.max(state.searchI - 1, 0);
          paintSearch();
        }
        if (e.key === "Enter") {
          e.preventDefault();
          state.searchHits[state.searchI]?.run();
        }
      } else if (state.view === "story" && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        if (e.key === "ArrowRight" && A.chapters[state.chapter + 1]) go("story/" + A.chapters[state.chapter + 1].id);
        if (e.key === "ArrowLeft" && A.chapters[state.chapter - 1]) go("story/" + A.chapters[state.chapter - 1].id);
      }
    });
  }

  function paintSearch() {
    $$(".search-hit").forEach((el, i) => el.classList.toggle("active", i === state.searchI));
    $$(".search-hit")[state.searchI]?.scrollIntoView({ block: "nearest" });
  }

  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      applyTheme("dark");
    }
  } catch (e) {}

  bindChrome();
  render();
  window.PalmitessaArchive = { openPerson, go };
})();
