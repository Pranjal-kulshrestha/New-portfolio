// ---------- data ----------
const GH = "https://github.com/Pranjal-kulshrestha";
const LINKS = {
  github: GH,
  linkedin: "https://www.linkedin.com/in/pranjal-kulshrestha9897/",
  gfg: "https://www.geeksforgeeks.org/user/pranjalkulshresth9897/",
  email: "pranjalkulshresth9897@gmail.com",
};

const PROJECTS = [
  {
    title: "RAG Doc Assistant", year: 2026, cat: "ai", label: "RAG · Hybrid Search", glyph: "[1] cited",
    hue: 22, url: `${GH}/rag-doc-assistant`,
    desc: "Ask questions about PDFs and web pages. BM25 + vector search fused with Reciprocal Rank Fusion; every answer cites its sources.",
    tags: ["LangChain", "Chroma", "BM25", "FastAPI"],
  },
  {
    title: "LangGraph Multi-Agent Researcher", year: 2026, cat: "ai", label: "Agents · LangGraph", glyph: "plan → research → critic",
    hue: 200, url: `${GH}/langgraph-researcher`,
    desc: "Planner, parallel researchers, writer and critic agents with a revision loop and human-in-the-loop approval via interrupts.",
    tags: ["LangGraph", "Claude", "Tavily", "Checkpoints"],
  },
  {
    title: "LLM Eval Harness + Guardrails", year: 2026, cat: "ai", label: "Evals · Safety", glyph: "PASS ✓ 1.00",
    hue: 140, url: `${GH}/llm-eval-guardrails`,
    desc: "Prompt-injection and PII guards, schema repair, LLM-as-judge metrics and CI gates that fail builds on regressions.",
    tags: ["Evals", "Guardrails", "Pydantic", "GitHub Actions"],
  },
  {
    title: "Agentic Text-to-SQL Copilot", year: 2026, cat: "ai web", label: "Agents · Full Stack", glyph: "SELECT * ✓",
    hue: 280, url: `${GH}/text-to-sql-copilot`,
    desc: "LangGraph agent writes safe read-only SQL, self-corrects from DB errors, and charts results in a React UI.",
    tags: ["LangGraph", "sqlglot", "React", "Recharts"],
  },
  {
    title: "OSHA Analyser", year: 2025, cat: "ai", label: "RAG · Compliance", glyph: "⚠ flagged: 3",
    hue: 35, url: null,
    desc: "Automated OSHA compliance analysis for a US client: n8n workflows + RAG over safety documents to flag violations.",
    tags: ["n8n", "RAG", "Vector Stores", "NLP"],
  },
  {
    title: "HealthBot", year: 2025, cat: "ai", label: "RAG · Healthcare", glyph: "♥ async",
    hue: 345, url: null,
    desc: "Healthcare chatbot with hybrid semantic + keyword retrieval and an async pipeline for concurrent users.",
    tags: ["LangChain", "Hybrid Search", "Async"],
  },
  {
    title: "Plant Disease Prediction", year: 2024, cat: "ml", label: "Computer Vision", glyph: "92% acc",
    hue: 100, url: GH,
    desc: "OpenCV + CNN in TensorFlow/Keras that classifies plant diseases from leaf images with 92% accuracy.",
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
  },
  {
    title: "PICATO — Food App", year: 2024, cat: "web", label: "Full Stack", glyph: "🛒 checkout",
    hue: 10, url: GH,
    desc: "Food-ordering app with SSR, dynamic routing, cart, order and payment flow, and a mobile-first UI.",
    tags: ["Next.js", "Tailwind", "SSR"],
  },
  {
    title: "Voting App", year: 2024, cat: "web", label: "Web App", glyph: "vote++",
    hue: 220, url: GH,
    desc: "A full-stack voting web application.",
    tags: ["Web App", "Full Stack"],
  },
  {
    title: "Hand Gesture Recognition", year: 2023, cat: "ml", label: "Computer Vision", glyph: "✋ → ⌨",
    hue: 260, url: GH,
    desc: "Hand gesture recognition with computer vision and machine learning.",
    tags: ["Python", "Computer Vision", "ML"],
  },
];

const SKILLS = ["Python", "LangChain", "LangGraph", "RAG", "Vector DBs", "Claude / OpenAI APIs", "LLM Evals", "Guardrails",
  "FastAPI", "Next.js", "React", "Node.js", "Express", "MongoDB", "SQL", "TensorFlow", "scikit-learn", "OpenCV",
  "n8n", "Langflow", "Docker", "GitHub Actions", "Tailwind CSS"];

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function artBg(hue) {
  return `radial-gradient(120% 100% at 15% 0%, hsl(${hue} 90% 58% / .9), transparent 55%),
          radial-gradient(90% 90% at 100% 100%, hsl(${hue + 50} 85% 45% / .8), transparent 60%), #0d0e10`;
}

// ---------- render ----------
function renderWork() {
  $("#workGrid").innerHTML = PROJECTS.map((p) => `
    <article class="card reveal" data-cat="${p.cat}">
      <div class="card-art">
        <div class="art" style="background:${artBg(p.hue)}"></div>
        <span class="year">${p.year}</span>
        <span class="glyph">${p.glyph}</span>
      </div>
      <div class="card-body">
        <span class="mono" style="color:var(--muted)">${p.label}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
      ${p.url ? `<a class="card-link" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.title} on GitHub"></a><span class="arrow">↗</span>` : ""}
    </article>`).join("");
  $("#workCount").textContent = PROJECTS.length;

  $("#indexList").innerHTML = PROJECTS.map((p, i) => `
    <li><a href="${p.url || "#work"}" ${p.url ? 'target="_blank" rel="noopener"' : ""} data-i="${i}">
      <span class="i-title">${p.title}</span><span class="i-cat">${p.label}</span><span class="i-year">${p.year}</span>
    </a></li>`).join("");

  $("#skillCloud").innerHTML = SKILLS.map((s) => `<span>${s}</span>`).join("");
}

function setupFilters() {
  $$(".chip").forEach((chip) => chip.addEventListener("click", () => {
    $$(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.filter;
    $$(".card").forEach((card) => card.classList.toggle("hide", f !== "all" && !card.dataset.cat.split(" ").includes(f)));
  }));
}

// ---------- cursor, glow, magnetic, tilt ----------
function setupPointer() {
  const cursor = $(".cursor");
  let mx = innerWidth / 2, my = innerHeight / 2;
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  document.addEventListener("pointerover", (e) => cursor.classList.toggle("big", !!e.target.closest("a, button, .chip, summary, .client")));

  $$(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  $$(".tilt").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

// ---------- portrait: light blinds + parallax follow the cursor ----------
function setupPortrait() {
  const hero = $(".hero"), portrait = $(".portrait-frame"), blinds = $(".hero-portrait .blinds");
  if (!portrait || reduceMotion) return;
  hero.addEventListener("pointermove", (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    blinds.style.setProperty("--bx", `${x * 60}px`);
    blinds.style.setProperty("--by", `${y * 40}px`);
    portrait.style.transform = `translate(${x * -14}px, ${y * -10}px) rotate(${x * -1.5}deg)`;
  });
  hero.addEventListener("pointerleave", () => { portrait.style.transform = ""; });
}

// ---------- index hover preview ----------
function setupPreview() {
  const preview = $(".preview"), inner = $(".preview-inner");
  $("#indexList").addEventListener("pointermove", (e) => {
    const a = e.target.closest("a[data-i]");
    if (!a) { preview.classList.remove("on"); return; }
    const p = PROJECTS[a.dataset.i];
    inner.style.background = artBg(p.hue);
    inner.textContent = p.glyph;
    preview.style.left = `${e.clientX}px`; preview.style.top = `${e.clientY}px`;
    preview.classList.add("on");
  });
  $("#indexList").addEventListener("pointerleave", () => preview.classList.remove("on"));
}

// ---------- hero entrance, stat counters, nav ----------
function setupHero() {
  [".hero .eyebrow", ".hero-lede", ".cta-row", ".hero-portrait", ".stats"].forEach((sel, i) => {
    const el = $(sel);
    if (!el || reduceMotion) return;
    el.classList.add("fade-in");
    el.style.animationDelay = `${0.25 + i * 0.12}s`;
  });

  const counters = $$("[data-count]");
  const run = () => counters.forEach((el) => {
    const end = Number(el.dataset.count), t0 = performance.now(), dur = 1400;
    (function step(now) {
      const k = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) setTimeout(() => step(performance.now()), 16);
    })(t0);
  });
  if (reduceMotion) counters.forEach((el) => { el.textContent = el.dataset.count; });
  else setTimeout(run, 700);

  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ---------- reveal on scroll ----------
function setupReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
  // Safety net: never leave content hidden if the observer is throttled or unsupported.
  setTimeout(() => $$(".reveal:not(.in)").forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight * 1.5) el.classList.add("in");
  }), 1500);
  addEventListener("scroll", () => $$(".reveal:not(.in)").forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in");
  }), { passive: true });
}

// ---------- clock, year, copy ----------
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("on");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => t.classList.remove("on"), 1800);
}
function setupMisc() {
  const tick = () => { $("#clock").textContent = new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }); };
  tick(); setInterval(tick, 30000);
  $("#year").textContent = new Date().getFullYear();
  $("#copyEmail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(LINKS.email); toast("Email copied ✓"); }
    catch { location.href = `mailto:${LINKS.email}`; }
  });
}

// ---------- terminal ----------
const COMMANDS = {
  help: () => `Commands:
  <span class="c-acc">whoami</span>      who I am
  <span class="c-acc">projects</span>    list projects
  <span class="c-acc">open</span> &lt;n&gt;    open project n on GitHub
  <span class="c-acc">skills</span>      my stack
  <span class="c-acc">experience</span>  career
  <span class="c-acc">clients</span>     teams I've worked with
  <span class="c-acc">contact</span>     how to reach me
  <span class="c-acc">github</span> · <span class="c-acc">linkedin</span> · <span class="c-acc">gfg</span>
  <span class="c-acc">clear</span>       clear screen`,
  whoami: () => `Pranjal Kulshrestha — AI Engineer.
I build RAG systems, LangGraph agents, LLM evals & guardrails,
and the full-stack products around them. Based in India.`,
  projects: () => PROJECTS.map((p, i) => `<span class="c-acc">${String(i + 1).padStart(2, " ")}</span>  ${p.title} <span class="c-mut">· ${p.label} · ${p.year}</span>`).join("\n") + `\n\n<span class="c-mut">Try: open 1</span>`,
  skills: () => SKILLS.join(" · "),
  experience: () => `2025 → now   Adeptimize — Full Stack Developer (AI automation, Next.js)
2024         Celebal Technologies — Data Science Intern
2024         IBM SkillsBuild — AI/ML Intern
2021 → 2025  B.Tech, Jaipur National University`,
  clients: () => "Altcmo · BenchEngage · Amber Electrical · Crown Apex Automation",
  contact: () => `Email     <a href="mailto:${LINKS.email}">${LINKS.email}</a>
LinkedIn  <a href="${LINKS.linkedin}" target="_blank" rel="noopener">pranjal-kulshrestha9897</a>
GitHub    <a href="${LINKS.github}" target="_blank" rel="noopener">Pranjal-kulshrestha</a>`,
  github: () => { open(LINKS.github, "_blank", "noopener"); return "Opening GitHub…"; },
  linkedin: () => { open(LINKS.linkedin, "_blank", "noopener"); return "Opening LinkedIn…"; },
  gfg: () => { open(LINKS.gfg, "_blank", "noopener"); return "Opening GeeksforGeeks…"; },
  sudo: () => "Nice try. Hire me instead → type 'contact'",
};

function setupTerminal() {
  const term = $("#term"), out = $("#termOut"), input = $("#termIn");
  const history = []; let hIdx = 0;
  const print = (html) => { out.innerHTML += html + "\n"; out.scrollTop = out.scrollHeight; };
  let greeted = false;

  function openTerm() {
    term.hidden = false;
    if (!greeted) { print(`<span class="c-mut">Welcome. Type</span> <span class="c-acc">help</span> <span class="c-mut">to explore.</span>\n`); greeted = true; }
    setTimeout(() => input.focus(), 30);
  }
  function closeTerm() { term.hidden = true; }

  $$("[data-open-term]").forEach((b) => b.addEventListener("click", openTerm));
  $("#closeTerm").addEventListener("click", closeTerm);
  term.addEventListener("click", (e) => { if (e.target === term) closeTerm(); });
  addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); openTerm(); }
    if (e.key === "Escape" && !term.hidden) closeTerm();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && history.length) { hIdx = Math.max(0, hIdx - 1); input.value = history[hIdx]; e.preventDefault(); }
    if (e.key === "ArrowDown" && history.length) { hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] || ""; e.preventDefault(); }
    if (e.key === "Tab") {
      e.preventDefault();
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(input.value.trim()));
      if (match) input.value = match;
    }
  });
  $("#termForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value.trim();
    input.value = "";
    if (!raw) return;
    history.push(raw); hIdx = history.length;
    print(`<span class="c-acc">❯</span> ${raw.replace(/</g, "&lt;")}`);
    const [cmd, arg] = raw.toLowerCase().split(/\s+/);
    if (cmd === "clear") { out.innerHTML = ""; return; }
    if (cmd === "open") {
      const p = PROJECTS[Number(arg) - 1];
      if (!p) return print("Usage: open <number from 'projects'>\n");
      if (!p.url) return print(`${p.title} is a client project — no public repo.\n`);
      open(p.url, "_blank", "noopener");
      return print(`Opening ${p.title}…\n`);
    }
    print((COMMANDS[cmd] ? COMMANDS[cmd]() : `command not found: ${cmd.replace(/</g, "&lt;")} — try 'help'`) + "\n");
  });
}

// ---------- init ----------
renderWork();
setupFilters();
setupPointer();
setupPreview();
setupPortrait();
setupHero();
setupReveal();
setupMisc();
setupTerminal();
