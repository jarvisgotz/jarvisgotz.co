# Clove-Inspired Header Restyle

Restyle the site header to feel like the Squarespace Clove template — boutique magazine masthead — while keeping the existing off-white minimalist aesthetic, Oswald typography, and lowercase small-caps copy.

## Desktop layout

```text
                                                           
                       jarvisgötz.co                       
                                                           
              gallery     about     inquire                
                                                           
```

- Logo centered on its own line, slightly larger (Oswald, ~1.5rem) for masthead weight
- Nav links centered on a second line underneath, evenly spaced, current letter-spaced small-caps style retained
- Generous vertical padding (top + bottom) so the header feels tall and airy
- Remove the visible bottom border; rely on whitespace and the existing background blur for separation from content below
- Active route still uses the accent color treatment

## Mobile layout

```text
                                                
   ☰              jarvisgötz.co                 
                                                
```

- Hamburger moves to the left
- Logo stays centered
- Tap hamburger → existing dropdown menu opens (unchanged behaviour, just repositioned trigger)
- Slightly reduced vertical padding vs. desktop so it doesn't eat too much screen on small devices

## Things that stay the same

- Sticky/fixed positioning with the translucent background + backdrop blur
- All route links (Gallery, About, Inquire) and their destinations
- Mobile dropdown menu contents and behaviour
- Hero section below — only the hero's top offset will be reviewed so content isn't hidden under the now-taller header

## Files touched

- `src/components/Header.tsx` — restructure markup for masthead layout, move hamburger to left on mobile
- `src/routes/index.tsx` — only if the hero needs its top padding nudged to account for taller header

No other pages, no logic changes, no new dependencies.

## What this does NOT include

- No color or font changes (those are coming in a later pass per your plan)
- No scroll-shrink animation (can add later if you want it)
- No new nav items
