# Specification

## Summary
**Goal:** Add a visible “NO” button next to the existing “YES!” button on the proposal screen, while keeping the “NO” button evasive by moving and changing its label on user interaction.

**Planned changes:**
- Update the proposal screen layout to render a clearly labeled “NO” button side-by-side with the “YES!” button on initial load (with responsive wrapping/stacking on small screens).
- Implement evasive behavior for the “NO” button so that on click, hover, or keyboard focus it moves to a new on-screen position within safe bounds and updates its label text to a new English phrase each time (starting from “NO”).
- Keep the existing “YES!” button behavior unchanged (still triggers the acceptance flow as-is).

**User-visible outcome:** Users see both “YES!” and “NO” buttons; clicking “YES!” works normally, while attempting to interact with “NO” causes it to dodge within the visible area and change its text each time.
