# LittleRoute — School Bus & Student Transport

A responsive, buildless frontend website with 16 pages, two homepage layouts, a parent dashboard, light/dark themes and RTL layout support. Brand colours are navy #142B4A and sky blue #3282B8, with white, black and pale-blue surfaces.

## Files and pages

`dist/` contains the finished website, local fonts, images, icons and six videos. `dist/app.js` holds shared templates and interactions. `dist/review-polish.css` contains the latest team-review refinements and loads after the other stylesheets. `scripts/build.mjs` writes the templates into every HTML page so content is present before JavaScript starts. `ASSETS.md` records the image/video sources and generation history.

Pages: Home 1, Home 2, About, Services, Routes & Coverage, Fee Structure, Contact, Privacy, Safety, Login, Dashboard, 404, and four service-detail pages. Homepages retain seven sections. Public content pages retain six sections, except the single-section 404 page. 404, Privacy and Safety use only the brand and RTL/theme controls above their content, without the main navigation or footer.

The header and footer share identical responsive branding. The Home dropdown has the same plain-link treatment as the other navigation items. Card hover/focus outlines use the secondary blue. The ten existing FAQ groups have different visual treatments and use native accessible disclosures.

## Edit and build

Edit templates/interactions in `dist/app.js` and styles in the CSS files. Then run:

```bash
node --check dist/app.js
node scripts/build.mjs
```

No npm packages or installation are required. Serve `dist/` with your usual local development server, such as VS Code Live Server, to preview the pages and media.

## Netlify deployment

For this source folder alone, use `node scripts/build.mjs` as the build command and `dist` as the publish directory, with no base directory.

The final downloadable ZIP preserves the uploaded GitHub repository structure: its outer `LittleRoute` directory contains `netlify.toml` and an inner `LittleRoute` source folder. The outer configuration sets base to `LittleRoute`, build command to `node scripts/build.mjs`, and publish directory to `dist`. Keep that outer configuration at the GitHub repository root. Copy the updated inner source folder into the matching location in your existing repository, preserving your own `.git` directory. Commit and push to update a GitHub-connected Netlify site.

For a manual Netlify deployment, upload the inner `dist` folder. Do not upload the ZIP as a publish directory.

## Parent portal and login

Sample login: `parent@littleroute.example` / `LittleRoute26!`.

The dashboard uses invented parent, child, school, route and fee records. It includes a schematic journey simulation, child selection, route timings, attendance, an absence planner, alerts and sample fee receipts. It has no connection to real students, GPS, dispatch, payments or notifications.

Login uses the viewport height, with compact portrait and landscape layouts. Extremely short screens or increased text size can scroll within the form panel so controls remain accessible; the page body stays fixed. The eye/eye-off button updates its icon, accessible label and pressed state.

Google and Apple options are frontend interfaces. They clearly explain that provider sign-in is not connected, and never simulate a successful external login. A real launch requires provider configuration and a secure authentication service. Create one opens a validated parent-access request that downloads locally for the family to share with their school. It does not send details or activate a real account. No password is stored.

## Local data and forms

Browser storage retains theme/direction preferences, selected child, sample transport records, remembered sample-login preference and an optional newsletter email. Newsletter signup is local-only, with no email delivery. Contact/access requests, fee estimates and receipts download as text files; they do not book transport, send messages or transfer money. Privacy includes a clear-data action. Contact details are illustrative and use the reserved `.example` domain.

## Validation

The 16 generated pages pass markup, section counts, heading hierarchy, unique ID, ARIA/label, local link/anchor/icon, media and source checks. Images decode correctly and all six videos use H.264/YUV420p. Login checks cover password visibility, theme/RTL, provider notices, focus return, account-request validation/download, sample sign-in and remember-me behavior.

Browser visual/responsive review remains unverified because the browser service cannot initialize in the current environment. CSS viewport constraints are checked in source; a production launch should include a real-browser review.
