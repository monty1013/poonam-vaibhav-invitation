# Poonam & Vaibhav — Wedding Invitation Website

Minimal, cinematic, floral-inspired and mobile-first. Plain HTML, CSS and JavaScript; no build tools required.

## Replace the photo placeholders
Four local SVG placeholders are included in `images/` (they are not stock photos).
1. Add your own photo to the `images` folder, e.g. `poonam-vaibhav-hero.jpg`.
2. Open `index.html` and search for `images/prewedding-01.svg`.
3. Replace that path with your filename, then repeat for the other image slots.
4. Keep the spelling and file extension exactly the same as your photo.

## Add music
Place a legally usable instrumental MP3 in `audio/` and name it `music.mp3`. The visitor must tap the music control to start it; browsers generally block autoplay.

## Update event timings
In `index.html`, search for `<!-- Copy an event-row block`. Edit the Haldi, Mehndi and Wedding Ceremony blocks. Current unconfirmed dates/times are deliberately marked “To be announced”. Copy an `<article class="event-row reveal"> ... </article>` block to add another event.

**Wedding date:** 10 November 2026  
**Venue:** Village Nog, Bilaspur, Himachal Pradesh  
**Language:** English · **RSVP:** Not included

## Preview and publish
Open `index.html` in a browser or use VS Code Live Server. To publish, upload the contents of this folder to a GitHub repository, then go to **Settings → Pages → Deploy from a branch → main → /(root) → Save**. Wait for GitHub Pages to display the published URL.

The venue map link is a general search, not an exact venue pin. Google Fonts are optional; fallback fonts are included.
