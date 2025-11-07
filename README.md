# Tropi Solutions – Wireframe Site

Branded low‑fi wireframes using Next.js 14 (App Router) + Tailwind. Ready for Vercel.

## Quickstart
```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy
```bash
npm i -g vercel
vercel
vercel --prod
```

## Customize
- Colors: `tailwind.config.ts` (`tropi.*`)
- Fonts: `src/app/layout.tsx` (Poppins + Inter)
- Wireframes: `src/components/TropiWireframes.tsx`
- Booking page: `src/app/book/page.tsx` (embed Calendly/Cal.com)