# Traditional Sri Lankan Oil Lamp (Pahana) - Digital Lighting Ceremony

A real-time dual-screen web application designed for a digital traditional Sri Lankan oil lamp (*Pahana*) lighting ceremony at year-end parties, formal inaugurations, and celebrations.

Built with **HTML5**, **Tailwind CSS**, **Vanilla JavaScript**, and **Firebase Realtime Database**.

---

## 🪔 System Architecture & Overview

The system runs across two connected screens:

1. **`tablet.html` (The Guest Trigger)**
   - Placed on an Android tablet or iPad at the ceremonial podium.
   - Elegant dark ceremonial theme with a large, glowing fingerprint scanner icon.
   - **Interaction**: Requires a steady 2-second hold to ignite.
   - **Visuals**: Animated scanning laser line, golden circular progress ring, smooth color transition from white to sacred gold.
   - **Feedback**: Success state (green/gold flash, checkmark, synthesized ceremonial chime, and haptic vibration).
   - **Database**: Automatically increments `litWicks` in Firebase Realtime Database.
   - **Hidden Reset**: Click the top emblem 5 times in quick succession (or use the discrete admin PIN button) to reset wicks to 0 for rehearsals or the next event.

2. **`display.html` (The Main Ceremonial Screen)**
   - Displayed via laptop on a large projector, LED wall, or TV screen.
   - **Sri Lankan Cultural Aesthetics**: Deep rich maroon background with an authentic, subtle Kandyan *Liyavel* (traditional floral vine) motif.
   - **Centerpiece**: Highly detailed vector illustration of a traditional Kandyan brass oil lamp (*Nethum Pahana*) featuring:
     - Crown finial (*Pahane Kukula* / rooster atop the lamp).
     - Turned brass central pillar with fluted nodes and decorative petal drops.
     - 5-wick oil dish with visible wick spouts (*Left, Mid-Left, Center, Mid-Right, Right*).
     - Stepped circular pedestal base.
   - **The Flickering Flames**: Multi-layered pure CSS-animated flickering flames (teardrop shape, white-hot core, yellow/orange body, glowing box-shadows, and micro-sparks) that oscillate organically at independent rates.
   - **Ambient Room Illumination**: Dynamically expands a warm golden radial gradient behind the lamp from 0 to 5 wicks, realistically lighting up the entire hall as each guest ignites a wick.
   - **Grand Finale**: Auspicious celebration state with triumphant harmonic chord when the final 5th wick is lit.

3. **`index.html` (Ceremonial Portal)**
   - A launcher dashboard providing direct one-click access to both screens, live connection status, and event technician cheat sheets.

---

## 🚀 Instant Quick Start (Local Offline Testing)

**You don't even need Firebase to test right now!**
Both pages include built-in `BroadcastChannel` and `localStorage` synchronization:

1. Open `display.html` in one browser window.
2. Open `tablet.html` in another browser window side-by-side.
3. Press and hold the fingerprint on `tablet.html` for 2 seconds.
4. Watch the flame ignite and the room glow in real-time on `display.html`!

---

## 🔥 Firebase Setup (For Multi-Device / Tablet + Laptop Sync)

To connect an Android tablet and a display laptop over Wi-Fi / Internet:

### Step 1: Create a Free Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add Project** and give it a name (e.g. `pahana-ceremony`).
3. In the project dashboard, click the **Web icon (`</>`)** to register a web app.
4. Copy the `firebaseConfig` object shown on the screen.

### Step 2: Create the Realtime Database
1. In the left menu of Firebase Console, click **Build** > **Realtime Database**.
2. Click **Create Database**, select a region close to you (e.g., `Singapore` or `Belgium`), and start in **Test mode** (or paste the rules below).
3. Go to the **Rules** tab and set the rules so the tablet and display can read and write:

```json
{
  "rules": {
    "lampState": {
      ".read": true,
      ".write": true
    }
  }
}
```
4. Click **Publish**.

### Step 3: Paste Your Config in `firebase-config.js`
Open `firebase-config.js` in this folder and replace the placeholders:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "pahana-ceremony.firebaseapp.com",
  databaseURL: "https://pahana-ceremony-default-rtdb.firebaseio.com",
  projectId: "pahana-ceremony",
  storageBucket: "pahana-ceremony.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef..."
};
```

That's it! Both `tablet.html` and `display.html` automatically load this configuration.

---

## 🎹 Event Technician Keyboard Shortcuts (on `display.html`)

For live rehearsals and AV technicians controlling the projector screen:

| Key | Action |
|---|---|
| <kbd>Space</kbd> | Light next wick |
| <kbd>1</kbd> - <kbd>5</kbd> | Jump directly to wick count (1 to 5) |
| <kbd>0</kbd> or <kbd>R</kbd> | Reset all wicks to 0 |
| <kbd>F</kbd> | Toggle Fullscreen mode |
| <kbd>H</kbd> or <kbd>I</kbd> | Toggle UI overlays (hides counters for 100% clean ceremonial presentation) |

---

## 🎨 Swapping with Your Own Custom PNGs (Optional)

If you prefer to use your own custom graphic or photograph of a brass oil lamp instead of the included vector artwork:

1. Place your PNG file in the project folder (e.g., `pahana.png`).
2. Open `display.html`.
3. Locate the `<svg id="pahana-svg">` section inside `#lamp-stage` (around line 240).
4. Replace the `<svg>` with:
   ```html
   <img id="pahana-img" src="pahana.png" alt="Pahana" class="w-full h-full object-contain pointer-events-none drop-shadow-2xl" />
   ```
5. If necessary, adjust the `top` and `left` CSS percentages of the 5 flame divs (`#flame-wick-1` through `#flame-wick-5`) to match the exact spout positions on your image.

---

## 📱 Tablet Setup Tips (Android / iPad)
- Use Google Chrome or Safari on the tablet.
- Open `tablet.html`.
- Tap the **Fullscreen** button in the footer, or select **"Add to Home Screen"** in the browser menu to run it as a standalone kiosk app without browser address bars.
- Disable screen auto-lock / sleep in the tablet's Android/iOS system settings for the duration of the ceremony.
