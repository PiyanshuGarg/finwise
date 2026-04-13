/*
  ╔══════════════════════════════════════════════╗
  ║           js/advisor.js                     ║
  ║  Logic for the AI Advisor screen.           ║
  ║  Handles:                                   ║
  ║  • Sending messages via input box or chips  ║
  ║  • Displaying user + AI chat bubbles        ║
  ║  • Predefined AI reply bank                 ║
  ╚══════════════════════════════════════════════╝
*/

/*
  AI REPLY BANK
  Maps exact chip/question text → AI response.
  In a real app you'd call an LLM API here.
*/
var AI_REPLIES = {
  'How do I improve my trust score?':
    'Review your data permissions in Settings → Privacy. Removing unused app connections can boost your score by 10–15 points within 7 days.',

  'Explain my insurance gap':
    'Your current plan covers hospitalisation but not OPD, dental, or outpatient medicines. Adding an OPD rider for just ₹800/yr would fill the biggest gap.',

  'Best SIP for beginners?':
    'For beginners, I recommend ₹500/month in a Nifty 50 Index Fund. It\'s passive, low-cost (0.1% expense ratio), and you can start or stop anytime.',

  'How to reach ₹1 lakh?':
    'At your current saving rate of ₹3,200/month, you\'ll hit ₹1 lakh in about 28 months. Enable the round-up feature on the Grow tab to cut that by 2–3 months!'
};

// Fallback reply for any question not in the bank
var FALLBACK_REPLY =
  'Great question! Based on your financial profile, I\'d suggest reviewing your savings ratio. ' +
  'You\'re currently saving 10% of income — bumping to 15% could significantly speed up your goals.';


/**
 * addUserMsg(text)
 * Creates a right-aligned (user) chat bubble and appends to chat.
 *
 * @param {string} text - message content
 */
function addUserMsg(text) {
  var area   = document.getElementById('chat-area');
  var bubble = document.createElement('div');
  bubble.className   = 'chat-bubble chat-user';
  bubble.textContent = text;
  area.appendChild(bubble);
  area.scrollTop = area.scrollHeight; // auto-scroll to bottom
}


/**
 * addAIMsg(text)
 * Creates a left-aligned (AI) chat bubble after a short delay.
 *
 * @param {string} text - message content
 */
function addAIMsg(text) {
  var area   = document.getElementById('chat-area');
  var bubble = document.createElement('div');
  bubble.className   = 'chat-bubble chat-ai';
  bubble.textContent = text;
  area.appendChild(bubble);
  area.scrollTop = area.scrollHeight;
}


/**
 * sendNudge(el, msg)
 * Called when a nudge chip is tapped.
 * Shows the chip text as user message, then AI reply.
 *
 * @param {HTMLElement} el  - the chip element (not used, kept for onclick signature)
 * @param {string}      msg - the chip's text / question
 */
function sendNudge(el, msg) {
  addUserMsg(msg);

  // Look up a reply or use the fallback
  var reply = AI_REPLIES[msg] || FALLBACK_REPLY;

  // Small delay to feel like AI is "thinking"
  setTimeout(function() {
    addAIMsg(reply);
  }, 600);
}


/**
 * sendMsg()
 * Called when user presses Send button or hits Enter.
 * Reads the input field, displays message, clears input.
 */
function sendMsg() {
  var input = document.getElementById('chat-inp');
  var text  = input.value.trim();

  if (!text) return; // Do nothing if input is empty

  addUserMsg(text);
  input.value = ''; // Clear the field

  // Reply after short delay
  setTimeout(function() {
    var reply = AI_REPLIES[text] || FALLBACK_REPLY;
    addAIMsg(reply);
  }, 700);
}
