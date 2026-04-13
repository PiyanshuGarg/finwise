/*
  ╔══════════════════════════════════════════════╗
  ║           js/home.js                        ║
  ║  Logic for the Home screen.                 ║
  ║  Currently handles:                         ║
  ║  • Flagged transaction banner expand/hide   ║
  ╚══════════════════════════════════════════════╝
*/

// Track whether the flag banner is open or closed
var flagOpen = false;

/**
 * toggleFlag()
 * Expands or collapses the "Why was this flagged?" explanation.
 * Uses CSS max-height transition for smooth animation.
 * Called by onclick on .flagged-banner in index.html.
 */
function toggleFlag() {
  flagOpen = !flagOpen;

  var expandEl = document.getElementById('flag-expand');

  if (flagOpen) {
    // Show the expanded content
    expandEl.style.maxHeight = '200px';
  } else {
    // Collapse back to nothing
    expandEl.style.maxHeight = '0';
  }
}
