# Floppy Disko site

Static HTML site. Deploy on Netlify or GitHub Pages. No build step.

## File structure

```
/
├── index.html
├── who-we-are.html
├── artists.html
├── booking.html
├── style.css
├── README.md
└── images/
    ├── wordstack.svg           (hero — floppy guy)
    ├── Logo(Purple).svg        (favicon)
    ├── posters/
    │   └── poster-1.jpg ... poster-8.jpg
    └── artists/
        ├── dr-dak.jpg
        ├── dj-2.jpg ... dj-6.jpg
        ├── producer-1.jpg, producer-2.jpg
        └── designer-1.jpg, designer-2.jpg
```

## Image filenames the site expects

| Where it lives | Filename | Status |
|---|---|---|
| Hero on homepage | `images/wordstack.svg` | You have this |
| Favicon (browser tab icon) | `images/Logo(Purple).svg` | You have this |
| Event posters | `images/posters/poster-1.jpg` through `poster-8.jpg` | Add when ready |
| Dr. Dak photo | `images/artists/dr-dak.jpg` | Add when ready |
| Other artist photos | `images/artists/dj-2.jpg` etc. (see artists.html) | Add when ready |

If any image is missing, the site falls back gracefully — gray placeholder boxes appear instead.

## What's already filled in

- Hero, favicon references
- Bandcamp link (floppydisko.bandcamp.com)
- Real contact info (info@floppydisko.com, dakotaboyle@gmail.com)
- Social links (IG @floppy_disko, @drdakmusic, SoundCloud)
- Festival credits (Bonnaroo, ACL, SXSW, Jupiter Disco, Sable, Kingdom, Marlow, Cosmic Pickle)
- "Who We Are" copy (draft — edit if you want different wording)
- Dr. Dak's artist card with his name and role

## What you'll edit yourself

**artists.html** — Fill in names and roles for the other 9 members. Each card has a comment above it showing which slot it is (DJ 2, Producer 1, etc.). Update:

```html
<p class="artist-name">Name</p>
<p class="artist-role">Role · Style</p>
```

If your roster numbers change (5 DJs instead of 6, or 3 producers), duplicate or delete entire `<div class="artist">` blocks as needed.

## Deploy steps (short version)

1. Push these files to a GitHub repo
2. Connect repo to Netlify (free)
3. Test on the Netlify preview URL
4. Once happy, point floppydisko.com DNS at Netlify in GoDaddy
5. Wait 1–4 hours for DNS to propagate

(Detailed migration steps were covered in the chat — keep that conversation open.)

## Notes

- The favicon filename has parentheses in it (`Logo(Purple).svg`). This works in URLs but is fragile — if anything breaks, the first place to check is whether your hosting properly escapes the parens. Easy fix: rename it to `favicon.svg` and update the four HTML files. Just simpler.
- The Bandcamp link is in 4 files. If you ever change it, search and replace `floppydisko.bandcamp.com` across the project.
- The site is fully mobile responsive. Nav wraps, image grids collapse to 2 columns at 700px and 1 column at 400px.
