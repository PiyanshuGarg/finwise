# FinWise — Gen-Z Financial Super App
### Hackathon Prototype

---

## How to run

Just open `index.html` in any browser. No installation needed.

---

## File structure

```
finwise/
│
├── index.html              ← MAIN FILE — open this in browser
│
├── css/
│   ├── global.css          ← Design tokens (colors, fonts, spacing)
│   ├── components.css      ← Reusable UI: nav, badges, toggles, chat
│   └── screens.css         ← Screen-specific styles (Home, Insure, etc.)
│
├── js/
│   ├── navigation.js       ← Switches between the 5 screens
│   ├── home.js             ← Flagged transaction expand/collapse
│   ├── invest.js           ← Risk simulator slider + scenario buttons
│   ├── grow.js             ← Micro-invest toggle switch
│   └── advisor.js          ← AI chat bubbles + reply logic
│
└── README.md               ← This file
```

---

## Screens overview

| Screen   | Problem it solves              | Key feature                        |
|----------|--------------------------------|------------------------------------|
| Home     | Trust & Transparency (PS1)     | Trust Score ring + Flag explainer  |
| Insure   | Insurance Complexity (Track 2) | Coverage grid + Scenario simulator |
| Invest   | Investing Fear (PS3)           | Risk sandbox with live simulation  |
| Grow     | Cashback Dependency (PS2)      | Milestone tracker + Micro-invest   |
| Advisor  | All problems (advisory layer)  | AI chat with personalized nudges   |

---

## CSS architecture (how styles are split)

### `global.css`
- CSS variables (all colors live here as `--accent`, `--bg`, etc.)
- Body + phone frame styles
- Utility classes (`.px-20`, `.mb-16`, `.green`, `.red`, etc.)

### `components.css`
- Reusable pieces used on multiple screens
- Bottom navigation bar
- Badges, stat cards, trust score ring
- Toggle switch, range slider, chat bubbles

### `screens.css`
- Styles specific to one screen only
- Clearly separated by comment blocks
- Easy to find: just search for `SCREEN 1` / `SCREEN 2` etc.

---

## JS architecture (how logic is split)

### `navigation.js`
The `nav(id)` function. Hides all screens, shows the one you clicked.

### `home.js`
The `toggleFlag()` function. Expands/collapses the "Why flagged?" banner.

### `invest.js`
- `SCENARIOS` object — all data for Nifty50 / MF / Crypto / FD
- `updateSim(value)` — recalculates rupee amounts when slider moves
- `setScenario(btn, key)` — switches active scenario + refreshes display

### `grow.js`
The `toggleMicro()` function. Flips the round-up invest toggle on/off.

### `advisor.js`
- `AI_REPLIES` object — maps questions to AI responses
- `addUserMsg(text)` / `addAIMsg(text)` — create chat bubbles
- `sendNudge(el, msg)` — handles chip taps
- `sendMsg()` — handles input box send

---

## How to customise

**Change colors** → edit CSS variables in `css/global.css` (`:root` block)

**Add a new scenario** → add an entry to `SCENARIOS` in `js/invest.js`

**Add an AI reply** → add a key-value pair to `AI_REPLIES` in `js/advisor.js`

**Add a new screen** → add a `<div class="screen" id="s-newscreen">` in `index.html`,
add `'newscreen'` to the `SCREENS` array in `js/navigation.js`, and add a nav item.

---

## Deploy in 60 seconds

1. Zip this entire folder
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag and drop the zip file
4. Get a live shareable link instantly — no account needed!
