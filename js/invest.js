/*
  ╔══════════════════════════════════════════════╗
  ║           js/invest.js                      ║
  ║  Logic for the Invest (Risk Sandbox) screen. ║
  ║  Handles:                                   ║
  ║  • Investment amount slider                  ║
  ║  • Scenario buttons (Nifty / MF / Crypto / FD)
  ║  • Live best/worst case calculation          ║
  ║  • AI explanation text swap                  ║
  ╚══════════════════════════════════════════════╝
*/

/*
  SCENARIO DATA
  Each scenario has:
    best   — % return in a good year
    worst  — % loss in a bad year (negative = loss)
    label  — short risk label shown next to the slider
    explain — AI explainer paragraph
*/
var SCENARIOS = {
  nifty50: {
    best:    12,
    worst:  -28,
    label:  'Medium',
    explain: "Nifty 50 tracks India's top 50 companies. Historically returns 12% per year — but can drop 30% in bad years. Best for a 5+ year horizon."
  },
  mf: {
    best:    9,
    worst:  -15,
    label:  'Low-Med',
    explain: "Mutual funds spread risk across many stocks. SBI Bluechip gives ~9% annually with lower volatility. Ideal for 3–5 year goals."
  },
  crypto: {
    best:    80,
    worst:  -60,
    label:  'Very High',
    explain: "Crypto is highly volatile. Bitcoin has returned 80% in good years but crashed 60% too. Only invest what you can afford to lose completely."
  },
  fd: {
    best:    7,
    worst:   0,   // FD cannot go negative
    label:  'Very Low',
    explain: "Fixed Deposits guarantee returns at 7% p.a. No risk of loss, but returns barely beat inflation. Best for short-term safe parking of money."
  }
};

// Which scenario is currently selected
var currentScenario = 'nifty50';


/**
 * updateSim(value)
 * Recalculates and displays best/worst case figures
 * whenever the slider moves OR a new scenario is selected.
 *
 * @param {number|string} value - the rupee amount from the slider
 */
function updateSim(value) {
  var amount = parseInt(value, 10);
  var sc     = SCENARIOS[currentScenario];

  // Calculate rupee gains / losses
  var bestGain  = Math.round(amount * sc.best / 100);
  var worstLoss = Math.round(amount * Math.abs(sc.worst) / 100);

  // Format numbers with Indian locale (e.g. ₹1,20,000)
  var fmtAmt  = '₹' + amount.toLocaleString('en-IN');
  var fmtBest = '₹' + bestGain.toLocaleString('en-IN');
  var fmtLoss = '₹' + worstLoss.toLocaleString('en-IN');

  // Update amount label above slider
  document.getElementById('invest-amt-lbl').textContent = fmtAmt;

  // Update the big rupee display
  document.getElementById('sim-amt').textContent = fmtAmt;

  // Update best/worst text
  var chgEl = document.getElementById('sim-chg');
  if (sc.worst < 0) {
    // Risky asset — show both extremes
    chgEl.textContent = '+' + fmtBest + ' best  ·  −' + fmtLoss + ' worst case';
    chgEl.className   = 'sim-change pos';
  } else {
    // Risk-free (FD) — only upside
    chgEl.textContent = '+' + fmtBest + ' (' + sc.best + '%) guaranteed';
    chgEl.className   = 'sim-change pos';
  }

  // Update risk label colour dynamically
  var riskLbl = document.getElementById('risk-lbl');
  riskLbl.textContent  = sc.label;

  // Update AI explainer text
  document.getElementById('ai-explain-txt').textContent = sc.explain;
}


/**
 * setScenario(btn, key)
 * Called when user taps one of the 4 scenario buttons.
 * Marks the clicked button active, switches data, refreshes display.
 *
 * @param {HTMLElement} btn - the clicked button element
 * @param {string}      key - key into SCENARIOS object
 */
function setScenario(btn, key) {
  // Deactivate all buttons
  var buttons = document.querySelectorAll('.sim-btn');
  buttons.forEach(function(b) { b.classList.remove('active'); });

  // Activate the clicked button
  btn.classList.add('active');

  // Update current scenario and refresh calculations
  currentScenario = key;
  updateSim(document.getElementById('invest-slider').value);
}


// ── Run on page load to set initial state ──
updateSim(10000);
