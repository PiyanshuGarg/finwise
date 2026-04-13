/*
  ╔══════════════════════════════════════════════╗
  ║           js/navigation.js                  ║
  ║  Handles switching between the 5 screens.   ║
  ║  Called by onclick="nav('screenName')"      ║
  ║  in index.html and by qa-item clicks.       ║
  ╚══════════════════════════════════════════════╝
*/

// All 5 screen IDs (without the "s-" prefix)
const SCREENS = ['home', 'insure', 'invest', 'grow', 'advisor'];

/**
 * nav(id)
 * Switches the visible screen to the one matching `id`.
 * 1. Removes "active" from all screens and nav items.
 * 2. Adds "active" to the target screen and nav item.
 *
 * @param {string} id - one of: 'home', 'insure', 'invest', 'grow', 'advisor'
 */
function nav(id) {
  SCREENS.forEach(function(s) {
    // Hide all screens
    document.getElementById('s-' + s).classList.remove('active');
    // Deactivate all nav items
    document.getElementById('nav-' + s).classList.remove('active');
  });

  // Show the selected screen
  document.getElementById('s-' + id).classList.add('active');
  // Activate the matching nav item
  document.getElementById('nav-' + id).classList.add('active');
}
