# Lury Beauty OEM

Conversion-focused private label false eyelash OEM/ODM website for global beauty brands, wholesale buyers, lash studios and online sellers.

## Purpose

This project is a B2B website for paid samples, private label false eyelashes, custom lash styles and OEM/ODM packaging inquiries. Lury Beauty is presented accurately as a Qingdao trading and sourcing supplier working with manufacturing partners in Pingdu.

## Core buyer routes

- `/sample-kit` — eight-style paid sample request and USD invoice path
- `/markets/thailand` — Thailand buyer guide with Thai summary
- `/markets/united-kingdom` — UK buyer guide
- `/markets/united-states` — US buyer guide
- `/oem` — OEM/ODM service brief
- `/about` — transparent Qingdao supplier identity and order role
- `/products` — W01-W04 and B01-B04 catalog
- `/llms.txt` — concise entity and sourcing information for AI crawlers

Sales WhatsApp is configured centrally in `src/app/data/siteConfig.ts` as `+86 183 6665 6532`.

## Local Development

```bash
npm run dev
```

On Windows PowerShell, if script execution blocks `npm`, use:

```bash
npm.cmd run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Start

```bash
npm run start
```

## Deployment

Deployment target: Vercel

Recommended Vercel settings:

- Framework Preset: Next.js
- Install Command: npm ci
- Build Command: npm run build
- Output Directory: leave empty for Vercel auto-detection
- Environment Variables: none currently required
