# Monitoring Frontier AI

A taxonomy, annotated bibliography, and frank assessment of runtime
monitoring for frontier AI models — the use of smaller or weaker models,
and small probes trained on internal activations, to flag misbehavior in
larger models.

> **What this is.** I prepared this as a gift for a friend who wanted a way
> in to the subfield, and I'm making it public in case it's useful to other
> people in the same position. **It is not a professional or hard-set
> report.** It is a single-curator AI-assisted compilation, produced in
> hours rather than the months a real review would take. I (donjguido) did
> not independently review the underlying papers — the annotations and the
> critical assessment reflect Claude's read of the literature, framed and
> arranged by me. Treat it as a starting point for further reading, not as
> an authoritative field summary.
>
> **Corrections welcome.** If you spot an outdated claim, a broken link, a
> missing foundational paper, or a replication that updates a cited result,
> please [open an issue](../../issues/new/choose). Issues are the canonical
> way to propose changes; a maintainer edits the YAML in `/data` and the
> site rebuilds.

**Live site:** _paste deploy URL after first deploy_
**Last reviewed:** 2026-04-25

## What's in the repo

```
data/                     The source of truth. Edit YAML, rebuild the site.
  taxonomy.yaml             category tree (rendered)
  entries.yaml              bibliography entries (rendered)
  organizations.yaml        ecosystem map (stored, not yet rendered)
  open_problems.yaml        open problems (stored, not yet rendered)
src/
  pages/                    Astro routes
  layouts/, components/     shared layout + entry card
  styles/global.css         all the styling
  data.ts                   YAML loader + helpers
.github/
  workflows/deploy.yml      build-and-deploy to GitHub Pages
  ISSUE_TEMPLATE/           contribution templates
LICENSE                   CC BY 4.0 (text) + MIT (code)
```

## Local build

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview
```

Machine-readable exports ship at `/data/entries.json` and
`/data/taxonomy.json`.

## Deploy to GitHub Pages

The included GitHub Actions workflow publishes to GitHub Pages on push to
`main`. Before first deploy:

1. In `astro.config.mjs`, set `site` to your Pages URL and `base` to
   `/<repo-name>/` (or `/` if deploying to a custom domain).
2. In repo settings → Pages, set source to **GitHub Actions**.
3. Push to `main`.

The build is fully static; any host serving a directory of HTML works
(Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Suggested GitHub repo settings

- **Description (under 350 chars):** *A taxonomy, annotated bibliography,
  and frank assessment of runtime monitoring for frontier AI models. A
  single-curator, AI-assisted shallow review — gift-resource, not an
  authoritative field summary.*
- **Topics (tags):** `ai-safety`, `ai-alignment`, `frontier-ai`,
  `ai-monitoring`, `interpretability`, `llm`, `bibliography`, `astro`,
  `static-site`
- **License:** Creative Commons Attribution 4.0
- **Issues:** enabled (this is the contribution channel)
- **Discussions:** optional
- **Pages:** source = GitHub Actions

## Contributing

Use one of the issue templates:

- [Suggest a new bibliography entry](../../issues/new?template=suggest-entry.yml)
- [Flag an outdated or superseded claim](../../issues/new?template=flag-outdated.yml)
- [Report a broken link](../../issues/new?template=report-broken-link.yml)
- [Anything else](../../issues/new?template=other.yml)

PRs are not the V1 contribution path — issues are easier for a casual
reader to file, and a maintainer makes the actual edit.

## V2 ideas (not built yet)

- Per-entry permalink pages with "related entries"
- Ecosystem page rendering `data/organizations.yaml`
- Open-problems page rendering `data/open_problems.yaml`
- Filter UI (year, organization, tag)
- Client-side search (Pagefind or Fuse.js)
- Dark mode
- RSS feed of added/updated entries

## License

- **Text content** (site copy, annotations, YAML data): CC BY 4.0
- **Site source code** (Astro templates, TypeScript, CSS): MIT

See [LICENSE](LICENSE) for full terms.
