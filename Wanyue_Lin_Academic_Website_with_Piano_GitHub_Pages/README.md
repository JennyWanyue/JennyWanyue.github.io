# Wanyue (Jenny) Lin — Academic Website

A ready-to-deploy personal academic homepage for GitHub Pages. The visual language is inspired by clean academic websites, including the reference supplied by the user (https://yfxiao16.github.io/); this implementation is independently written.

## What's included

- `index.html` — About, News, Publications, Research, Experience, Contact, and a link to the piano page
- `piano.html` — Music page with documented piano award, solo and chamber performances, and ensembles
- `styles.css` — custom responsive styling, mobile/desktop, no external fonts
- `script.js` — publication filters, citation copy, mobile menu
- `assets/Wanyue_Lin_CV.pdf` — linked CV (copied from the supplied CV)
- `assets/favicon.svg` — simple site icon
- `.nojekyll` — GitHub Pages build helper

## Deploy on GitHub Pages (recommended)

1. Create a GitHub account, if you do not already have one.
2. Create a **public** repository named `<your-github-username>.github.io` (replace the placeholder with your *actual* GitHub username). If this exact repository already exists, use it instead.
3. Upload **all files and the `assets` folder** from this folder into the repository **root**. Do not upload only the ZIP file.
4. In the repository, go to **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, and folder **/(root)**, then Save. (The exact UI may differ.)
5. Your homepage should be accessible at `https://<your-github-username>.github.io/` once GitHub Pages finishes its build.

For an existing repository with a different name, the URL is generally `https://<your-github-username>.github.io/<repo-name>/` and the relative paths used by this site are compatible.

## Update content

Edit `index.html` for your bio, projects, publication titles, news, and links. Edit `piano.html` for piano performances and recognition. Edit `styles.css` to change colors or design. Replace `assets/Wanyue_Lin_CV.pdf` when your CV changes.

### Replace the initials with your headshot (optional)

The site currently displays a **WL placeholder** because no portrait was provided. Add a photo as `assets/profile.jpg`, then find:

```html
<div class="portrait" aria-hidden="true">WL</div>
```

Replace it with:

```html
<div class="portrait"><img src="assets/profile.jpg" alt="Portrait of Wanyue Lin" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>
```

### About the DATE manuscript

The current site shows the DATE project as a **manuscript under review**, without adding a paper PDF or an unverified author list. Check the relevant conference's anonymous review / preprint rules before publicizing the manuscript or adding author information.

### About your contact details

The site displays your public Berkeley email and includes a downloadable CV. If you do not want your phone number visible through a public CV download, replace the linked PDF with a web-safe version that omits your phone number.

## Local testing

Open `index.html` in your browser, or run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- No backend, paid service, third-party analytics, or account integration required.
- The DOI links and Google Scholar URL are from the supplied CV and have been checked where possible.
- Dates and project statuses reflect the current CV as of November 2026; update them as your research progresses.

### Piano page

The `piano.html` page includes the documented 2024 Honorable Mention at the Friends of Music Concerto & Aria Competition, the May 2025 solo piano recital, two earlier solo performances, two chamber performances, and participation in two WashU ensembles. Only one music award was specified in the CV; please add other awards once verified. No unprovided recital photographs, recordings, or award certificates were invented.
