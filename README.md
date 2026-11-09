# AI portfolio landing page

A static landing page for AI applications built with Microsoft Foundry and Claude Code.
No build step: it is plain HTML, CSS and one small JavaScript file, hosted on Cloudflare.

```
public/index.html   the page
public/styles.css   design tokens and layout (cobalt = Foundry, amber = Claude Code)
public/script.js    year in the footer and the pipeline "Replay" button
public/_headers     security headers (CSP etc.)
public/favicon.svg  tab icon
wrangler.jsonc      Cloudflare config (serves ./public)
```

## 1. Make it yours

Open `public/index.html` and search for `Your Name` and `EDIT`. Change:

- your name (title, header, footer),
- the app link `https://research.example.com` and the source link,
- your email, GitHub and LinkedIn links.

To add another project, copy the whole `<section ... id="work">` block, give it a new `id`
and heading, and edit the text.

## 2. Preview on your computer

```powershell
npm install
npm run dev
```

Open http://localhost:8787. Changes to files in `public/` show up when you refresh.

## 3. Push to GitHub

Install Git (https://git-scm.com) first. In the project folder:

```powershell
git init
git add .
git commit -m "Initial portfolio page"
git branch -M main
```

**Option A: GitHub CLI** (https://cli.github.com)

```powershell
gh auth login
gh repo create portfolio --public --source=. --remote=origin --push
```

**Option B: GitHub website**

1. On github.com choose **New repository**, name it `portfolio`, and leave
   "Add a README" and the other add-ons **unticked** so the repository starts empty.
2. Copy the repository URL, then run:

```powershell
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

## 4. Deploy on Cloudflare

You need a free Cloudflare account.

1. In the Cloudflare dashboard open **Workers & Pages** and choose **Create application**,
   then pick the option to **import a repository** (connect to Git).
2. Authorise GitHub and select the `portfolio` repository.
3. Set the project name to `portfolio` (it should match `name` in `wrangler.jsonc`).
4. Leave the build command empty. The deploy command is `npx wrangler deploy`.
5. Choose **Save and Deploy**. After a minute the site is live at
   `https://portfolio.<your-subdomain>.workers.dev`.

Menu labels in the dashboard change from time to time, so follow the closest match.

From now on every `git push` to `main` redeploys the site automatically:

```powershell
git add .
git commit -m "Update copy"
git push
```

**Deploying without GitHub** also works:

```powershell
npx wrangler login
npm run deploy
```

## 5. Use your own domain (optional)

- **Landing page:** in the Worker open **Settings, then Domains & Routes**, choose
  **Add**, then **Custom domain**, and enter something like `www.yourdomain.com`.
  The domain must use Cloudflare DNS.
- **Research Desk on Azure:** to give the Azure app a friendly name such as
  `research.yourdomain.com`, add a custom domain in the Static Web App on Azure and create the
  CNAME it asks for in Cloudflare DNS. Set the record to **DNS only** while Azure validates it.
  If you moved Research Desk to Cloudflare, add it as its own Worker with its own domain instead.

Then update the app link in `public/index.html` and push again.
