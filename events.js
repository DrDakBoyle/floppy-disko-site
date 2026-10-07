/* FLOPPY DISKO — EVENTS
   This one list feeds both "Upcoming Events" and "Event History" on the homepage.

   TO ADD AN EVENT
   1. Upload the flyer to /images/posters/ (portrait works best, e.g. 1080x1350).
   2. Copy one { ... } block below, paste it at the top of the list, change the values.
   3. Commit. That's it.

   You never have to move an event to history by hand: once the date has
   passed (the morning after), it leaves Upcoming and shows up in Event History.

   FIELDS
   date     "YYYY-MM-DD"  (required — decides upcoming vs. history, and the order)
   title    Headline shown while the event is upcoming
   details  The line under the flyer while upcoming (venue · date · time · city)
   tickets  Optional link. If set, a "Tickets" button appears while upcoming.
   poster   Flyer filename inside /images/posters/
   alt      Short description of the flyer (for screen readers and Google)
   label    Small caption shown on the poster in Event History
*/
window.FD_EVENTS = [
  {
    date: "2026-10-10",
    title: "Floppy Disko Presents: Welcome to the Big House",
    details: "Stardust Garage · October 10th · 10PM–Late · Austin, TX",
    tickets: "",
    poster: "261010-big-house-stardust.jpg",
    alt: "Floppy Disko at Stardust Garage, October 10th 2026, 10PM to late",
    label: "Stardust Garage · Oct 2026"
  },
  {
    date: "2026-08-15",
    title: "Disco Disko Disco: Secret Secret Disco — Secret Lineup",
    details: "4319 Terry-O Lane · August 15th · 10PM–Late · Austin, TX",
    poster: "260815-secret-secret-disco.png",
    alt: "Disco Disko Disco presents Secret Secret Disco, secret lineup, Saturday August 15th 2026, 10PM to Late, 4319 Terry-O Lane",
    label: "Secret Secret Disco · Aug 2026"
  },
  {
    date: "2026-08-14",
    title: "Floppy Disko Presents: Farewell to Marlow — DRØ, Hubbble, Kiwi",
    details: "Marlow · August 14th · 9PM–1AM · Austin, TX",
    poster: "260814-farewell-to-marlow.png",
    alt: "Floppy Disko Presents Farewell to Marlow with DRØ, Hubbble, Kiwi, Friday August 14th 2026, 9PM to 1AM",
    label: "Farewell to Marlow · Aug 2026"
  },
  { date: "2026-08-08", poster: "260808-kitty-cohens.png", alt: "Floppy Disko Presents Hubbble, Dr. Dak, Jay Theret at Kitty Cohen's", label: "Kitty Cohen's · Aug 2026" },
  { date: "2026-07-17", poster: "260717-hush-hush-stardust.jpg", alt: "Floppy Disko Presents Hush Hush, Brett Johnson, Jay Theret, Jagdaddy at Stardust Garage", label: "Stardust Garage · Jul 2026" },
  { date: "2026-06-04", poster: "260604-east-end-first-thursday.png", alt: "First Thursday at East End Ballroom", label: "East End · Jun 2026" },
  { date: "2026-03-21", poster: "260321-marlow-dak-hubbble.png", alt: "Dr. Dak and Hubbble at Marlow", label: "Marlow · Mar 2026" },
  { date: "2026-03-15", poster: "260315-SXSW-NeonGrotto.jpg", alt: "SXSW Showcase", label: "SXSW Neon Grotto · Mar 2026" },
  { date: "2026-02-13", poster: "260213-marlow-what-is-love.png", alt: "What Is Love at Marlow", label: "Marlow · Feb 2026" },
  { date: "2026-01-09", poster: "260109-cosmic-pickle.png", alt: "Cosmic Pickle", label: "Cosmic Pickle · Jan 2026" },
  { date: "2025-11-26", poster: "251126-flower-shop-flopsgiving.png", alt: "Flopsgiving at Flower Shop", label: "Flower Shop · Nov 2025" },
  { date: "2025-11-21", poster: "251121-marlow-jay-theret.png", alt: "Jay Theret at Marlow", label: "Marlow · Nov 2025" },
  { date: "2025-11-16", poster: "251116-sable-miami.png", alt: "Sable Miami", label: "Sable Miami · Nov 2025" },
  { date: "2025-11-08", poster: "251108-pinkshark-san-antonio.png", alt: "Pink Shark San Antonio", label: "Pink Shark SA · Nov 2025" },
  { date: "2025-10-04", poster: "ACL-25.png", alt: "ACL Fest", label: "Patron Hacienda ACL · Oct 2025" },
  { date: "2025-06-14", poster: "Roo 25.png", alt: "Bonaroo Fest", label: "Where in the Woods - Bonaroo · June 2025" }
];
