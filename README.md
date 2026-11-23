# VigiReal website

Marketing site, `/support` and `/privacy` pages for the VigiReal iOS app
(bundle `org.vigireal.app`). Next.js 16 App Router, Tailwind CSS 4, TypeScript. Dark theme only,
matching the app.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Edit

- `app/site.ts` — every name, URL and email in one place. Set `appStoreUrl` when the listing is live
  and the "Coming soon" pills become real App Store buttons.
- `app/page.tsx` — home. `app/support/page.tsx` — FAQ + contact. `app/privacy/page.tsx` — policy.
- `public/img/shots/*.png` — real simulator screenshots (iPhone 18 Pro, dark appearance), captured with
  `xcrun simctl launch … -VigiRealSkipIntro YES -VigiRealInitialState NY -VigiRealInitialTab <tab>` from
  the iOS project, then `sips -Z 1957`.
- `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` — generated metadata.

## Deploy

Static-friendly; any Next.js host (Vercel, Netlify, Cloudflare) works with zero config.
