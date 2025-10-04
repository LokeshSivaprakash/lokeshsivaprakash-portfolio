# Internal Audit (Technology) Portfolio — Lokesh Sivaprakash

This is a lightweight, responsive portfolio website designed to showcase audit-style projects aligned to CISA domains.

## 🔧 How to use
1. Replace placeholder PDFs in `/assets` with your real reports (same filenames or update links in `index.html`).
2. Update contact details and LinkedIn handle in the Contact section.
3. Optional: add your resume and portfolio index PDFs to `/assets` and update the buttons.
4. Deploy (choose one):
   - **GitHub Pages**: push to a repo, enable Pages for `main` branch / `/root`.
   - **Netlify/Vercel**: drag & drop the folder or connect the repo.
   - **Cloudflare Pages**: new project → upload folder.

## 🧩 Structure
```
.
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── Lokesh_Resume.pdf                 # add your resume
    ├── Internal_Audit_Portfolio_Index.pdf
    ├── Credential_Sheet.pdf
    ├── Access_Control_Audit_Sample.pdf
    ├── SIEM_Log_Audit_Sample.pdf
    ├── Vuln_Audit_Sample.pdf
    ├── Backup_Recovery_Audit_Sample.pdf
    ├── ITGC_Audit_Sample.pdf
    └── App_Audit_Sample.pdf
```

## 📣 SEO
- Uses `<meta>` description, OpenGraph, and JSON‑LD Person schema.
- Add your public LinkedIn URL into the `sameAs` array in the JSON‑LD.

## ♿ Accessibility
- Semantic headings, accessible nav, labels for form inputs, color contrast friendly.

## ✨ Customize
- Colors and layout in `styles.css`.
- Project cards in `index.html` under `#projects` grid.
