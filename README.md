# Pranjal Kulshrestha — Portfolio

Personal portfolio for an AI Engineer: RAG systems, LangGraph agents, LLM evals and full-stack products.

**Live:** https://pranjal-kulshrestha.github.io/New-portfolio/

## Highlights

- **Editorial hero:** serif-accent headline over a blueprint grid, a portrait with an orange "light blinds" overlay that slides with the cursor, floating status cards and counting stats.
- **Client work showcase:** real client sites in browser frames that glow in each brand's colour on hover.
- **Portfolio terminal:** press `/` or `Ctrl/⌘ + K` and type `help`. Commands: `whoami`, `projects`, `open <n>`, `skills`, `experience`, `clients`, `contact`, `github`, `linkedin`, `gfg`. Supports history (↑/↓) and tab-completion.
- **Capability rows** with a sweep highlight, and a blend-mode custom cursor.
- **Index list** with a floating preview that follows the cursor.
- **Filterable work grid** (GenAI / ML / Web), clients marquee, 3D tilt cards, magnetic CTA, live IST clock, copy-email toast.
- Respects `prefers-reduced-motion`; responsive down to 360px.

## Stack

Plain HTML, CSS and JavaScript. No framework or build step, so it deploys anywhere static.

## Run locally

```bash
python -m http.server 4321
```

Then open http://localhost:4321.

## Edit content

Projects and skills live at the top of `main.js` in the `PROJECTS` and `SKILLS` arrays. Career, clients and FAQ are in `index.html`.

Design inspired by the ProLab Framer template, rebuilt from scratch.
