/*
  ╔══════════════════════════════════════════════╗
  ║           js/grow.js                        ║
  ║  Logic for the Grow screen.                 ║
  ║  Handles:                                   ║
  ║  • Micro-invest Round-up toggle switch       ║
  ╚══════════════════════════════════════════════╝
*/

// Track toggle state (starts ON)
var microInvestOn = true;

/**
 * toggleMicro()
 * Flips the round-up & invest toggle on/off.
 * Adds/removes the "off" CSS class which:
 *   - changes background from purple to gray
 *   - slides the knob left (CSS transition handles animation)
 */
function toggleMicro() {
  microInvestOn = !microInvestOn;

  var toggleEl = document.getElementById('micro-toggle');

  if (microInvestOn) {
    toggleEl.classList.remove('off'); // purple, knob right
  } else {
    toggleEl.classList.add('off');    // gray, knob left
  }
}
