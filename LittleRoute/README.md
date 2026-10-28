# LittleRoute — School Bus & Student Transport

A complete static front-end website and sample parent dashboard. Navy **#142B4A**, sky blue **#3282B8**, pale blue **#EAF4FC**, white and black form the brand palette. Images, videos, Manrope/DM Sans fonts and SVG icons are bundled locally.

## Open locally

Open this folder in VS Code and use Live Server on `dist/index.html`. No dependency installation is needed. Alternatively:

```bash
python -m http.server 8000 --directory dist
```

Visit `http://localhost:8000`.

## Pages and layouts

There are 16 pages: Home 1, Home 2, About Us, Services, Routes & Coverage, Fee Structure, Safety Policy, Contact Us, Privacy Policy, four service detail pages, Login, Parent Dashboard and 404.

Both homepages have seven main sections. Every other public content page has six and a single final CTA. Login has six functional groups; the dashboard overview has six panels. Dashboard tabs are task-specific views.

The homepages use distinct full-width panoramic image heroes. Home 1 places the vehicle on the right and copy/video access on the left. Home 2 reverses the composition and adds a three-item journey-information band. Mobile layouts put the text above the image to retain legibility and the vehicle framing. Services and Routes have separate panoramic CTA backgrounds; other CTAs retain their varied image/content layouts. No content photo repeats across pages, including the login CSS background. The shared logo and video posters have their expected brand/playback roles.

Home 2 has three balanced service cards. About uses a heading above an aligned video/story row, mission/vision, timeline and values. Contact preparation has one shared heading over its photograph and step cards. Services includes five evenly weighted planning steps, ending with confirmation of the pickup and handover routine.

## Footer and newsletter

The desktop footer has five columns in one row: brand/social links, Explore LittleRoute, Helpful links, Get in touch, and Newsletter. Newsletter sits immediately beside Get in touch, the third information column. Both link lists contain five equally spaced items. Illustrative contact details and the FAQ link are in Get in touch. Privacy and Safety Policy remain adjacent in the bottom row beside Back to top and the 2026 copyright. The footer changes with the display theme: light in light mode, dark in dark mode. Social icons share the website; they are not invented company profiles.

The newsletter form is a browser-local frontend preview. It validates an email, stores it with a date in `localStorage` under `lr-newsletter`, restores the saved state on the same device, and offers a Clear saved email control. It does not contact a mailing-list provider or deliver email. The form displays this limitation. Privacy Policy documents the preference, and Clear demo data also removes it. The earlier downloadable email-enquiry box remains removed.

## Edit and rebuild

- `dist/app.js`: templates, sample data and browser interactions.
- `dist/image-fit-profile.css`: corrected panoramic image fitting and the parent profile dropdown.
- `dist/panorama-newsletter.css`: hero banners, photo CTA backgrounds, footer/newsletter and five-step alignment.
- `dist/alignment-refresh.css`: photo/card/content alignment and explicit footer themes.
- `dist/journey-refresh.css`: media, CTA and consistent navy button styling.
- `dist/brand-refresh.css`: palette, logo and control design.
- Remaining CSS: base layouts, dashboard, navigation, service pages and responsive rules.
- `dist/assets/`: all local media, fonts and licences.
- `ASSETS.md`: image sources, prompts and the current photo placement index.

After a template change:

```bash
node scripts/build.mjs
node --check dist/app.js
```

The generated HTML and runtime JavaScript use the same templates. Node is only needed to refresh pre-rendered markup after edits. Static hosting requires no backend or packages.

## Sample parent account

Email: `parent@littleroute.example`  
Password: `LittleRoute26!`

The prefilled account is a frontend demonstration, not secure authentication. No password is stored. Dashboard directly opens invented family records.

The parent space includes child selection, routes/stops/timings, morning and afternoon views, a schematic bus journey simulation, attendance, a local absence planner, sample fee previews/receipts and alerts. No GPS, student database, payment provider or notification delivery is connected. Payment previews save an idempotent per-child sample record and never request financial credentials or transfer money.

The Contact form downloads an enquiry draft, the fee calculator downloads an estimate, and receipts are sample text files. No form books transport or sends a message. Absence and read-alert state stay in the browser. Schools, routes, timings, fees, contact details and proposed service standards are illustrative. Stock/generated imagery does not depict an operated LittleRoute fleet or enrolled pupils.

## Deployment to Netlify

For an existing manual deployment, open the site's Deploys page and drop the updated **dist** folder into its deploy area. For GitHub-connected Netlify, commit and push the project; set `dist` as the publish directory and leave the build command empty when this project is at the repository root. Do not use the ZIP itself as the publish directory.

## Checks

All 16 pages are checked for HTML nesting, valid local assets/links/anchors, unique IDs, required sections, one CTA per public page, five footer columns, matching five-link lists, five Services planning steps and 43 globally distinct content-photo placements. Checks also cover newsletter validation/persistence/clearing/storage failures, route search, fee estimates, 404 navigation and the hero video. Six local films use H.264/YUV420p with native controls and user-initiated playback. Full browser visual/responsive review remains unavailable in the current environment.

## Image fitting and parent profile

Panoramic CTA images are excluded from the card-only 3:2 aspect-ratio rules. Their image boxes now fill the banner with the correct panoramic source proportions. Desktop banner heights scale at wide widths to preserve vehicle framing; mobile layouts retain a separate image frame. The image layout checks cover the vehicle region from 1024px to 3840px desktop widths.

The dashboard MR avatar is an accessible disclosure button. It opens account information for Meera Rao, including the parent email, children, selected child and assigned route, plus a Log out action. Clicking outside, moving focus away, Escape, or the close button dismisses the panel. Arrow Down opens it and focuses logout. Theme/RTL styling and mobile placement are included. Child selection refreshes the shown details. Logout stops the simulated journey, clears the frontend session and remembered-login flag, and returns to Login while keeping local transport records.

The dashboard DEMO MODE badge and top sample-account banner are removed. The existing Help, Privacy and relevant tracking/payment actions continue to explain the frontend scope. Profile/dropdown, newsletter, route search, fee estimate, recovery-page, markup and asset checks pass. Browser-based visual review remains unavailable.

## Footer and fee CTA refinement

The footer newsletter starts without a demo-signup caption or empty caption spacing. Accessible status feedback still appears after saving or clearing an address, and saved addresses retain the local-only delivery disclosure. The Fee Structure CTA eyebrow aligns with its heading, paragraph and button using logical start alignment, including RTL.
