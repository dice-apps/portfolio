# My Portfolio 🌐

A clean, professional, single-page portfolio website — free to host, with its own
public URL, and easy to update whenever you like.

**All your personal details live in one file: [`content.js`](content.js).**
That is the only file you ever *need* to edit.

---

## 📁 What's in this folder

| File | What it is | Do you edit it? |
|------|-----------|-----------------|
| `content.js`  | **All your details** — name, bio, skills, jobs, projects, volunteering | ✅ **Yes — edit this** |
| `assets/CV.pdf` | Your downloadable CV (currently a placeholder) | ✅ Replace with your real CV |
| `assets/` | Folder for your CV and optional profile photo | ✅ Add files here |
| `index.html` | Home page structure | Rarely (e.g. the browser-tab title) |
| `projects.html` | The full **Projects** page | ❌ No |
| `volunteering.html` | The full **Volunteering** page | ❌ No |
| `styles.css` | The design / colours | Only to change the look |
| `app.js` | Builds every page from `content.js` | ❌ No |

### 🗂️ How the pages fit together
The site has one home page plus dedicated sub-pages, all sharing the same design:

- **`index.html`** — home: intro, about, skills, experience, a *featured* preview of
  your 3 top projects, and contact.
- **`projects.html`** — your full projects list (the `projects:` list in `content.js`).
- **`volunteering.html`** — your volunteering (the `volunteering:` list in `content.js`).

You still only edit **`content.js`** — the projects and volunteering pages fill
themselves in automatically. Want a different number of featured projects on the home
page? In `index.html` find `data-projects="3"` and change the `3`.

**To add another sub-page** (e.g. Publications): make a copy of `volunteering.html`,
rename it, change its title/heading, add a matching list in `content.js`, and add a
link to it in the nav of each page. Just ask Claude Code and it'll do it for you.

---

## 🚀 Part 1 — Put it online for free (GitHub Pages)

You only do this **once**. After that, updating is a 2-minute job (Part 3).

1. **Create a free account** at <https://github.com> (skip if you have one).
2. Click the **➕ (top-right) → New repository**.
   - **Repository name:** `your-username.github.io`
     *(use your actual GitHub username — this gives you the nice URL
     `https://your-username.github.io`).*
   - Set it to **Public** → **Create repository**.
3. On the new repo page, click **“uploading an existing file”**.
4. **Drag in all the files from this Portfolio folder** (`index.html`,
   `styles.css`, `app.js`, `content.js`, the `assets` folder, `.nojekyll`).
5. Click **Commit changes**.
6. Wait ~1 minute, then visit **`https://your-username.github.io`** — you're live! 🎉

> Prefer a project name instead of your username? Name the repo anything (e.g.
> `portfolio`), then go to **Settings → Pages → Branch: main → Save**. Your URL
> becomes `https://your-username.github.io/portfolio`.

---

## ✏️ Part 2 — Add your details

Open **`content.js`** and replace the placeholder text between the `"quotes"`.
It's plain text with helpful comments — no coding needed. A couple of rules:

- Keep the quotes, commas and brackets exactly where they are.
- To **add** another job/project/skill, copy one `{ ... }` block and paste it below,
  separated by a comma.
- To **remove** something, delete its block (or empty a list: `certifications: [],`).

### Add your CV so visitors can download it
1. Rename your CV file to **`CV.pdf`**.
2. Put it in the **`assets`** folder, replacing the placeholder.
   *(Or keep your own filename and update `cvFile:` in `content.js`.)*
   The **Download CV** buttons then work automatically.

### (Optional) Add a profile photo
1. Put a square image in `assets/` (e.g. `profile.jpg`).
2. In `content.js` set: `profileImage: "assets/profile.jpg",`
   Leave it as `""` to show your initials instead.

---

## 🔄 Part 3 — Update it any time

Whenever you want to change something (new job, new project, updated CV):

**Easiest way — right in your browser, no downloads:**
1. Go to your repository on github.com.
2. Click the file you want to change (e.g. `content.js`) → the **✏️ pencil** icon.
3. Make your edits → **Commit changes**.
4. Your live site updates in about a minute. Done.

**To swap your CV:** open the `assets` folder on github.com → **Add file → Upload
files** → drop in the new `CV.pdf` (same name) → **Commit changes**.

---

## 🎨 Optional tweaks

- **Change the accent colour:** in `styles.css`, edit the `--accent:` value near the
  top (e.g. `#0d9488` for teal, `#7c3aed` for purple).
- **Change the browser-tab title:** the `<title>` line in `index.html`.
- **Custom domain** (e.g. `yourname.com`): buy a domain, then **Settings → Pages →
  Custom domain** and follow GitHub's instructions.

---

## 👀 Preview locally before publishing (optional)

Just **double-click `index.html`** to open it in your browser. Everything works
offline exactly as it will online.

---

Need a hand? Re-open this in Claude Code and ask.
