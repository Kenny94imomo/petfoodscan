# PetScreen

A pet food label screener: scan a product's barcode and get an at-a-glance
safety grade, flagged ingredients with plain-language explanations, and the
guaranteed analysis — for dogs and cats.

Implemented from the "PetScreen App" Claude Design prototype as a React +
TypeScript + Vite web app.

## Screens

- **Home** — headline stats, recent scans, and the primary "Scan a product" action
- **Scan** — simulated camera view with barcode framing and scan animation
- **Result** — grade badge, verdict, avoid/caution/safe counts, summary, and top concerns
- **Product detail** — safety score bar, full ingredient breakdown, guaranteed analysis
- **History** — every scanned product with dates
- **Pets** — pet profiles and settings (recall alerts, data sources)

On desktop the app renders inside an iPhone-style device frame (matching the
design preview); on phones it fills the viewport.

## Development

```sh
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run preview  # serve the production build
```

## Notes

- Product data is a mock catalog in `src/data/products.ts`; the barcode scan is
  simulated (`src/config.ts` controls which product it "finds").
- Grade (A–E) and ingredient risk (safe/caution/avoid) color systems live in
  `src/theme.ts`.
