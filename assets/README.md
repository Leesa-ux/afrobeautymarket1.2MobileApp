# App icons & splash sources

Drop two source images here, then run `npm run assets` to generate every
icon/splash size for both platforms (uses `@capacitor/assets`).

| File | Size | Purpose |
|------|------|---------|
| `icon.png` | 1024×1024 | App icon (no transparency, no rounded corners — the OS masks it) |
| `splash.png` | 2732×2732 | Launch screen, brand logo centered on a safe area |
| `splash-dark.png` | 2732×2732 | *(optional)* dark-mode launch screen |

After generating:

```bash
npm run assets     # writes into ios/ and android/ native projects
npx cap sync
```

Brand palette reference (from the web app): `brand-crimson`, `brand-cobalt`,
`brand-gold` on cream/off-white. Keep the icon simple and legible at 40px.
