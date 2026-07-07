# Floppy Disko site

Static HTML site. Deploy on Netlify or GitHub Pages. No build step.

## File structure

```
/
├── index.html
├── about-us.html
├── sound.html
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
- "About Us" copy (draft — edit if you want different wording)
- Dr. Dak's artist card with his name and role

## What you'll edit yourself

**artists.html** — Fill in names and roles for the other 9 members. Each card has a comment above it showing which slot it is (DJ 2, Producer 1, etc.). Update:

```html
<p class="artist-name">Name</p>
<p class="artist-role">Role · Style</p>
```

If your roster numbers change (5 DJs instead of 6, or 3 producers), duplicate or delete entire `<div class="artist">` blocks as needed.

## Sound page

`sound.html` embeds a YouTube video and a SoundCloud player, plus direct links to YouTube, SoundCloud, and Bandcamp.

- **YouTube embed**: `sound.html` currently has a placeholder — find `VIDEO_ID_HERE` in the file and replace it with a real video ID (the part of a YouTube URL after `v=`, or after `youtu.be/`). Without this, the embed box will show broken/blank.
- **YouTube channel link**: already set to `youtube.com/@Floppy-Disko`.
- **SoundCloud embed**: points at `soundcloud.com/floppy_disko`. If that handle changes, update the `src` URL in the iframe.

## Booking contact form

`booking.html` has a working contact form built for **Netlify Forms** — no backend code needed, but it only works once deployed to Netlify, not when testing locally.

- **Local testing**: submitting the form on `localhost` will not work — it'll just POST nowhere. This is expected, not a bug. Test it on the live Netlify deploy.
- **Required one-time setup on Netlify's side**: after your first deploy, go to your site's dashboard → Forms, and set up a notification rule so submissions email you (e.g., forward to `info@floppydisko.com`). Netlify detects the form automatically because of the `data-netlify="true"` attribute, but it does **not** email you by default — you have to turn that on yourself.
- Submissions also always show up in the Netlify dashboard under Forms, regardless of whether you set up email notifications.



1. Push these files to a GitHub repo
2. Connect repo to Netlify (free)
3. Test on the Netlify preview URL
4. Once happy, point floppydisko.com DNS at Netlify in GoDaddy
5. Wait 1–4 hours for DNS to propagate

(Detailed migration steps were covered in the chat — keep that conversation open.)

## Notes

- Pages were renamed: `who-we-are.html` → `about-us.html`, `our-sound.html` → `sound.html`. If you've already shared either old URL anywhere (Instagram bio, Google search results, a bookmark), that link will now 404. If this site's been live for a while, consider adding a redirect rule in Netlify (`_redirects` file: `/who-we-are.html /about-us.html 301`) rather than leaving old links dead.
- The favicon filename has parentheses in it (`Logo(Purple).svg`). This works in URLs but is fragile — if anything breaks, the first place to check is whether your hosting properly escapes the parens. Easy fix: rename it to `favicon.svg` and update the four HTML files. Just simpler.
- The Bandcamp link is in 4 files. If you ever change it, search and replace `floppydisko.bandcamp.com` across the project.
- The site is fully mobile responsive. Nav wraps, image grids collapse to 2 columns at 700px and 1 column at 400px.
