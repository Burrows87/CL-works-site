# CL Works — Website

Static, responsive and bilingual (Italian / English) website for CL Works. Built with plain HTML, CSS and JavaScript; no build tools or dependencies required.

## Files

- `index.html` — page content and metadata
- `styles.css` — responsive visual design
- `script.js` — language toggle and current year
- `assets/favicon.svg` — site icon

## Preview locally

Open `index.html` in a browser. No install or build step is needed.

## Publish with GitHub Pages

1. Create a **new public repository** named `clworks-site` under the GitHub account `Burrows87`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the top level).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. GitHub will show the temporary `https://burrows87.github.io/clworks-site/` address when the site is deployed.

## Connect `clworks.it` later

Do not change DNS until you are ready to publish the site on the main domain. Before connecting a custom domain, check the current DNS records in Aruba and preserve all email-related MX, SPF, DKIM and DMARC records.

For the apex domain `clworks.it`, GitHub Pages commonly uses these A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

IPv6 AAAA records may also be configured according to the current GitHub Pages documentation. Add `clworks.it` in **Settings → Pages → Custom domain** and follow the exact DNS instructions GitHub presents. Enable **Enforce HTTPS** after the certificate is ready.

The file `CNAME` is intentionally not included yet: configure the custom domain in GitHub Pages first, then add or let GitHub create the CNAME file as directed.

Official guide: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## Before launch

- Confirm that `hello@clworks.it` is an active inbox or replace it in `index.html`.
- Review the copy and project descriptions.
- Confirm the Looply URL is correct.
- Add privacy/legal pages if analytics, forms, cookies or other relevant services are introduced.
- Keep Looply's existing hosting and DNS records unchanged while preparing this site.
