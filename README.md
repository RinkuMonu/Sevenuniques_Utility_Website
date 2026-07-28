# Finunique Utility Website

Customer-facing Next.js website for Finunique services, payments, insurance,
loans, PAN services, travel, account access, and company information.

## Start here

- [Project structure](docs/PROJECT_STRUCTURE.md) — complete page and folder map.
- [App routes](src/app/README.md) — where public pages and API routes live.
- [Components](components/README.md) — component ownership and placement rules.
- [Public assets](public/README.md) — image and document folder map.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before handing off a change:

```bash
npm run lint
npm run build
```

## Important conventions

- Public URLs are represented by folders inside `src/app/`.
- Shared UI belongs in `components/`, grouped by feature.
- Static images and documents belong in `public/`, grouped by page or service.
- Backend proxy endpoints belong in `src/app/api/`.
- Do not move route folders merely for visual organization; moving a Next.js
  route can change its URL. Update the project map when adding a route.
