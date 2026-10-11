# DRNESTED — Static Minecraft News & Video Site

A responsive, dependency-free HTML/CSS/vanilla-JavaScript site designed for GitHub Pages.

## Files

```text
drnested-news-site/
├── index.html
├── admin.html
├── README.md
├── assets/
│   ├── character.png
│   └── styles.css
└── scripts/
    ├── config.js
    ├── app.js
    └── admin.js
```

## Run locally

Open `index.html` in a browser. For a more server-like local preview, use VS Code's Live Server extension (optional). No build step or package installation is required.

## Customize the content

- Edit `window.DEFAULT_POSTS` in `scripts/config.js` to change the published posts.
- Posts are displayed newest-first using the `date` field (`YYYY-MM-DD`).
- `type` can be `video`, `news`, or `update`.
- `url` is optional and should be an `https://` or `http://` URL.
- `embed` is an optional YouTube video ID, such as the ID after `v=` in a YouTube watch URL.
- Edit `window.SITE_CONFIG.sections` in the same file to add, remove, or update Telegram, Discord, or other community cards. Each section has `id`, `label`, `icon`, `url`, and `description`.
- Replace the Telegram and Discord example URLs with your real invite/channel links.

## Admin workflow and important limitation

1. Open `admin.html` on your site.
2. Enter the demo password: `DRNESTEDYT`.
3. Create, edit, or delete posts. These changes are stored in **that browser's localStorage only**.
4. To publish a change for all visitors, use **Export posts JSON** in the dashboard.
5. Copy the exported JSON array into `window.DEFAULT_POSTS` in `scripts/config.js`, replacing the existing array.
6. Commit and push the changed `scripts/config.js` file to GitHub. GitHub Pages will then publish the update.

**This is not a real multi-user CMS.** A static GitHub Pages site cannot write changes back to your repository or JSON file from browser JavaScript. LocalStorage posts do not automatically appear to other visitors or on another device.

**The client-side password is not real security.** It is included in `scripts/admin.js` and is visible in the page's source files. This login only hides the editor in the interface; it does not protect data or provide secure authentication. Use this only for a simple personal/community demo. Do not put secrets or sensitive content behind it. For genuine protected publishing, use a server-side authentication service or a Git-based CMS with OAuth.

## Deploy on GitHub Pages

1. Create a GitHub repository, for example `drnested-news-site`.
2. Upload/commit all files and folders exactly as shown above. Keep `index.html` at the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the Pages URL to appear in Settings → Pages.

All local asset/script links are relative (`assets/...`, `scripts/...`, `admin.html`), so the site works from a repository subpath such as `https://username.github.io/drnested-news-site/`.

## Accessibility and privacy notes

- Semantic page landmarks, labeled fields, visible focus styles, skip links, and reduced-motion support are included.
- YouTube embeds use the privacy-enhanced `youtube-nocookie.com` domain. Embedded video providers may still receive connection data when loaded.
