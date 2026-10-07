# Floppy Disko site

Static HTML site. Hosted on Netlify from this repo, domain floppydisko.com. No build step: whatever is committed to `main` is what goes live.

## The three things you'll actually update

| I want to... | Edit this | Upload this |
|-|-|-|
| Add an event | `data/events.js` (copy a block, paste at top) | flyer to `images/posters/` |
| Add a video | `data/media.js` (one line with the YouTube id) | nothing — it lives on YouTube |
| Add photos | `data/media.js` (one line per photo) | JPGs to `images/gallery/` |

Each data file has instructions at the top.

**Events move themselves.** An event shows under Upcoming Events until the morning after its date, then appears in Event History automatically. If nothing is upcoming, the homepage says so and points to Instagram.

## File structure

```
/
├── index.html        homepage: upcoming events, event history, venue credits
├── about-us.html
├── sound.html        YouTube + SoundCloud embeds
├── media.html        photo + video gallery
├── booking.html      contact info + Netlify form
├── artists.html      (not linked in the nav yet)
├── style.css
├── site.js           builds the event and media sections — no need to edit
├── data/
│   ├── events.js     <- the event list
│   └── media.js      <- the video and photo lists
└── images/
    ├── posters/      event flyers
    ├── gallery/      photos (and optional short .mp4 clips) for the Media page
    └── artists/
```

## Rules of thumb

* **Filenames are case-sensitive on Netlify.** `DrDak.jpg` and `drdak.jpg` are different files. The name in the data file must match the upload exactly.
* **GitHub's upload page rejects files over 25 MB.** Full videos go on YouTube. Photos should be resized to about 1600px on the long side and saved as JPG before uploading.
* **Flyers:** portrait works best (the poster slots are 3:4).
* **Media nav link:** it is in every page's nav but commented out (`<!-- <a href="/media.html">Media</a> -->`). Remove the `<!--` and `-->` in each HTML file once the gallery has enough in it. The page itself works now at floppydisko.com/media.html.
* **Venue credits list** on the homepage ("Venues and Events") is still edited by hand in `index.html`.

## Photo prep (Windows, needs ffmpeg)

Run in the folder with your photos. Makes web-sized copies in a `web` subfolder:

```powershell
mkdir web -Force | Out-Null
Get-ChildItem *.jpg, *.jpeg, *.png | ForEach-Object {
    ffmpeg -n -i $_.FullName -vf "scale='if(gt(iw,ih),min(1600,iw),-2)':'if(gt(iw,ih),-2,min(1600,ih))'" -q:v 4 (Join-Path web ($_.BaseName + ".jpg"))
}
```
