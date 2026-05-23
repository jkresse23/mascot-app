# Mascot App

Mascot App is a mobile-first NBA clue flashcard game. It is now set up as a Progressive Web App.

## Test Locally

Run a local web server from this folder, then open the local URL in a browser.

```sh
python3 -m http.server 8765
```

Then visit:

```text
http://127.0.0.1:8765
```

Service workers do not run from `file://` URLs, so install/offline behavior needs a local server or a deployed URL.

## Install On A Phone

Deploy the folder to a static host such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages. Open the deployed URL on your phone.

On iPhone, use Safari, tap Share, then Add to Home Screen.

On Android, use Chrome, tap the menu, then Install app or Add to Home screen.
