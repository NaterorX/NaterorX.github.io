# Copilot Instructions for this repository 🧭

Purpose
- Concise guidance for AI coding agents to be immediately productive on this small static portfolio site.

Big picture
- Static client-side portfolio: `index.html` (main landing + sections), `tps.html` (TP listings), `style.css`, `script.js` and an `assets/` directory referenced for PDFs and CV.
- No build system, no server-side code. Live previews are via opening `index.html` or running a simple static server.

Key files & patterns (explicit examples)
- `index.html`: single-page-style layout using section `id`s (e.g., `#parcours`, `#competences`, `#projets`, `#contact`) for anchor navigation.
- `tps.html`: lists downloadable TP PDFs (links like `assets/tp_vlan.pdf`, `assets/tp_csharp.pdf`). Verify referenced assets exist when editing.
- `style.css`: uses CSS variables in `:root` (e.g., `--primary-color`, `--accent-color`) — prefer using these variables for color/theme updates.
- `script.js`: minimal JS using an `IntersectionObserver` to add `.visible` to elements with `.fade-in`. When adding animations, follow this approach: add `fade-in` CSS class then let JS toggle `visible`.

External integrations
- Google Fonts (`Poppins`) and Font Awesome loaded via CDN in the HTML. Network connectivity is required for those resources.
- Static assets (CV, PDFs) live in `assets/` and are linked directly; ensure filenames and paths match exactly.

Development workflows
- Run locally by opening `index.html` in a browser for quick checks.
- For a local server (recommended to avoid file:// issues):
  - Python: `python -m http.server 8000` (serve from repo root)
  - Or use VS Code Live Server extension for instant reload.
- Debugging: use browser DevTools for console errors and Network tab to confirm fonts, Font Awesome, and PDFs load correctly.

Project-specific conventions
- Language: content is in French (`<html lang="fr">`). Preserve or update language strings consistently.
- Replace the placeholder text before publishing: `Ton Nom`, `Ton Prénom`, `tonemail@exemple.com`, CV file `assets/mon_cv.pdf`.
- Visual changes: prefer editing `style.css` using the existing variables and small utility classes rather than inlining styles.

What agents should avoid / verify
- Do not add a build system without explicit instruction — the project is intentionally minimal.
- When adding new assets (images, PDFs), update `tps.html` or `index.html` links and confirm files are present in `assets/`.
- Keep external deps minimal; prefer CDN usage already present unless adding a reasoned improvement.

Suggested first tasks for contributors
- Replace personal placeholders with real data and check all `assets/` links.
- Add alt text to any images and ensure headings follow semantic order.

If anything here is unclear or you want me to expand a section (examples for tests, CI, or PR templates), tell me which area to improve and I'll iterate. ✅
