/* FLOPPY DISKO — MEDIA
   This file feeds the Media page (/media.html). Newest goes at the top of each list.

   VIDEOS
   Upload the video to the Floppy Disko YouTube channel, then add a line here.
   The id is the part after "v=" in the YouTube link:
     https://www.youtube.com/watch?v=eGpmJFs29zI  ->  youtube: "eGpmJFs29zI"

   For a short clip hosted on the site itself, upload an .mp4 (keep it under
   25 MB — GitHub's upload page rejects anything bigger) to /images/gallery/
   and use  clip: "filename.mp4"  instead of  youtube: "..."

   PHOTOS
   1. Resize to about 1600px on the long side, save as JPG.
   2. Upload to /images/gallery/  (name them like 261010-big-house-01.jpg).
   3. Add one line per photo below.
   The Photos section stays hidden until there is at least one photo listed.
*/
window.FD_VIDEOS = [
  { youtube: "eGpmJFs29zI", title: "Floppy Disko at Ice House Radio", caption: "Ice House Radio · Jun 2026" }
];

window.FD_PHOTOS = [
  // { file: "261010-big-house-01.jpg", caption: "Big House at Stardust Garage · Oct 2026", credit: "Photo: Name" },
];
