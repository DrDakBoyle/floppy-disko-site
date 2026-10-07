/* Floppy Disko — builds the event and media sections from the lists in the site root.
   You should not need to edit this file. Edit /events.js and /media.js. */
(function () {
  "use strict";

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function hideOnError(img) {
    img.addEventListener("error", function () { img.style.display = "none"; });
    return img;
  }

  // "2026-10-10" -> local midnight on that day
  function parseDate(s) {
    var p = String(s || "").split("-");
    return new Date(+p[0], (+p[1] || 1) - 1, +p[2] || 1);
  }

  /* ---------- Events (homepage) ---------- */
  function renderEvents() {
    var upcomingBox = document.getElementById("upcoming-events");
    var historyBox = document.getElementById("event-history");
    var events = (window.FD_EVENTS || []).filter(function (e) { return e && e.date && e.poster; });
    if (!upcomingBox && !historyBox) return;

    // An event stays "upcoming" until 6am the morning after, so a 10PM–late
    // party doesn't drop off the homepage at midnight.
    var now = Date.now();
    var GRACE = 30 * 60 * 60 * 1000;
    var upcoming = [], past = [];
    events.forEach(function (e) {
      (parseDate(e.date).getTime() + GRACE > now ? upcoming : past).push(e);
    });
    upcoming.sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });
    past.sort(function (a, b) { return parseDate(b.date) - parseDate(a.date); });

    if (upcomingBox) {
      if (!upcoming.length) {
        var ig = el("a", { href: "https://instagram.com/floppy_disko", target: "_blank", rel: "noopener", text: "@floppy_disko" });
        ig.style.textDecoration = "underline";
        var line = el("p", { "class": "upcoming-event-venue" }, [
          document.createTextNode("Follow "), ig, document.createTextNode(" for the next one.")
        ]);
        line.style.marginBottom = "0";
        upcomingBox.appendChild(el("div", { "class": "upcoming-event" }, [
          el("p", { "class": "upcoming-event-title", text: "Nothing announced right now" }),
          line
        ]));
      }
      upcoming.forEach(function (e) {
        var src = "/images/posters/" + encodeURI(e.poster);
        upcomingBox.appendChild(el("div", { "class": "upcoming-event" }, [
          el("p", { "class": "upcoming-event-title", text: e.title || e.label || "" }),
          hideOnError(el("img", { src: src, alt: e.alt || e.title || "", "class": "upcoming-event-flyer" })),
          el("p", { "class": "upcoming-event-venue", text: e.details || "" }),
          e.tickets ? el("a", { "class": "upcoming-event-link", href: e.tickets, target: "_blank", rel: "noopener", text: "Tickets" }) : null
        ]));
      });
    }

    if (historyBox) {
      past.forEach(function (e) {
        var src = "/images/posters/" + encodeURI(e.poster);
        historyBox.appendChild(el("div", { "class": "poster" }, [
          hideOnError(el("img", { src: src, alt: e.alt || e.label || "", loading: "lazy" })),
          el("span", { "class": "poster-label", text: e.label || "" })
        ]));
      });
    }
  }

  /* ---------- Media page ---------- */
  function renderVideos() {
    var box = document.getElementById("media-videos");
    if (!box) return;
    var videos = (window.FD_VIDEOS || []).filter(function (v) { return v && (v.youtube || v.clip); });
    var section = document.getElementById("media-videos-section");
    if (!videos.length) { if (section) section.hidden = true; return; }

    videos.forEach(function (v) {
      var frame = el("div", { "class": "video-embed media-video" });
      if (v.clip) {
        frame.appendChild(el("video", { src: "/images/gallery/" + encodeURI(v.clip), controls: "", preload: "metadata", playsinline: "" }));
      } else {
        // Show a thumbnail first; the YouTube player only loads when clicked,
        // so a page with many videos still opens fast.
        var btn = el("button", { type: "button", "class": "media-video-play", "aria-label": "Play video: " + (v.title || "") }, [
          hideOnError(el("img", { src: "https://i.ytimg.com/vi/" + encodeURIComponent(v.youtube) + "/hqdefault.jpg", alt: "", loading: "lazy" })),
          el("span", { "class": "media-video-icon", "aria-hidden": "true" })
        ]);
        btn.addEventListener("click", function () {
          frame.innerHTML = "";
          frame.appendChild(el("iframe", {
            src: "https://www.youtube.com/embed/" + encodeURIComponent(v.youtube) + "?autoplay=1",
            title: v.title || "Floppy Disko video",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowfullscreen: ""
          }));
        });
        frame.appendChild(btn);
      }
      box.appendChild(el("figure", { "class": "media-item" }, [
        frame,
        el("figcaption", { "class": "media-caption" }, [
          el("span", { "class": "media-title", text: v.title || "" }),
          v.caption ? el("span", { text: v.caption }) : null
        ])
      ]));
    });
  }

  function renderPhotos() {
    var box = document.getElementById("media-photos");
    if (!box) return;
    var photos = (window.FD_PHOTOS || []).filter(function (p) { return p && p.file; });
    var section = document.getElementById("media-photos-section");
    if (!photos.length) { if (section) section.hidden = true; return; }

    var srcOf = function (p) { return "/images/gallery/" + encodeURI(p.file); };
    var textOf = function (p) { return [p.caption, p.credit].filter(Boolean).join(" · "); };

    // Lightbox
    var current = 0;
    var bigImg = el("img", { alt: "" });
    var bigCap = el("p", { "class": "lightbox-caption" });
    var prev = el("button", { type: "button", "class": "lightbox-btn lightbox-prev", "aria-label": "Previous photo", text: "‹" });
    var next = el("button", { type: "button", "class": "lightbox-btn lightbox-next", "aria-label": "Next photo", text: "›" });
    var close = el("button", { type: "button", "class": "lightbox-btn lightbox-close", "aria-label": "Close", text: "×" });
    var lightbox = el("div", { "class": "lightbox", role: "dialog", "aria-modal": "true", "aria-label": "Photo viewer" }, [close, prev, el("div", { "class": "lightbox-stage" }, [bigImg, bigCap]), next]);
    lightbox.hidden = true;
    document.body.appendChild(lightbox);
    var lastFocus = null;

    function show(i) {
      current = (i + photos.length) % photos.length;
      bigImg.src = srcOf(photos[current]);
      bigImg.alt = photos[current].caption || "Floppy Disko photo";
      bigCap.textContent = textOf(photos[current]);
    }
    function open(i) { lastFocus = document.activeElement; show(i); lightbox.hidden = false; document.body.style.overflow = "hidden"; close.focus(); }
    function shut() { lightbox.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }

    prev.addEventListener("click", function () { show(current - 1); });
    next.addEventListener("click", function () { show(current + 1); });
    close.addEventListener("click", shut);
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) shut(); });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") shut();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
    var touchX = null;
    lightbox.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      touchX = null;
    });
    if (photos.length < 2) { prev.hidden = true; next.hidden = true; }

    photos.forEach(function (p, i) {
      var btn = el("button", { type: "button", "class": "media-photo", "aria-label": "Open photo" + (p.caption ? ": " + p.caption : "") }, [
        el("img", { src: srcOf(p), alt: p.caption || "Floppy Disko photo", loading: "lazy" })
      ]);
      btn.firstChild.addEventListener("error", function () { btn.style.display = "none"; });
      btn.addEventListener("click", function () { open(i); });
      box.appendChild(btn);
    });
  }

  renderEvents();
  renderVideos();
  renderPhotos();
})();
