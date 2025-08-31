# Deploying AIQ Security on Vercel

This guide covers both **GitHub Integration** and **Vercel CLI** deploys.

---

## Option A: GitHub Integration (recommended)

1) **Create a GitHub repo**
```bash
git init
git add .
git commit -m "init: AIQ Security starter"
git branch -M main
git remote add origin https://github.com/<your-org>/<repo>.git
git push -u origin main
```

2) **Import into Vercel**
- Go to https://vercel.com/new and import your repo.
- Framework: **Next.js** (auto-detected)
- Build command: `npm run build`
- Install command: `npm ci`
- Output directory: `.next`

3) **Set Environment Variables** (Project → Settings → Environment Variables)
- `GA4_MEASUREMENT_ID`
- `GA4_API_SECRET`
- `META_PIXEL_ID`
- `META_ACCESS_TOKEN`
- `LINKEDIN_ACCESS_TOKEN`

*(Optional)* Add **Preview** values (for PRs) and **Production** values (for main branch).

4) **First Deploy**
- Click **Deploy**. Vercel will build & deploy automatically.
- Visit the assigned *.vercel.app URL to verify.

5) **Custom Domain**
- Project → **Domains** → **Add** `aiqsecurity.com` (or your domain)
- If domain is with another registrar, add the TXT/CNAME/ALIAS records Vercel shows.
- Wait for propagation; Vercel will auto-issue SSL.

---

## Option B: Vercel CLI

1) **Install CLI**
```bash
npm i -g vercel
vercel login
```

2) **Project Link**
```bash
vercel link
# Select or create a project; associate with your team if applicable
```

3) **Set Environment Variables**
```bash
# Repeat for each secret
vercel env add GA4_MEASUREMENT_ID production
vercel env add GA4_API_SECRET production
vercel env add META_PIXEL_ID production
vercel env add META_ACCESS_TOKEN production
vercel env add LINKEDIN_ACCESS_TOKEN production

# (Optional) add preview/dev values:
vercel env add GA4_MEASUREMENT_ID preview
...
```

4) **Deploy**
```bash
vercel   # creates a Preview deployment
vercel --prod  # promotes to Production
```

5) **Domain via CLI**
```bash
vercel domains add yourdomain.com
# Follow CLI prompts for DNS verification
```

---

## Notes & Tips

- **Server Regions**: In Vercel, go to Project → Settings → Functions and pick a region close to your primary users/data subjects.
- **Logs**: Project → Observability → Logs for API routes (`/api/conversions/...`).
- **Secrets Hygiene**: Consider setting different keys for preview vs production.
- **Privacy Enforcement**: Your endpoints expect `x-consent: true` when `consent.required` is true in `content/policies/policies.yaml`.

## Health Checks

- `/` should render without external keys.
- Test CAPI endpoint locally (with `vercel dev`) or after deploy:
```bash
curl -X POST https://<your-app>.vercel.app/api/conversions/google   -H 'x-consent: true' -H 'Content-Type: application/json'   -d '{"client_id":"123.456","events":[{"name":"purchase","params":{"value":9.99,"currency":"USD"}}]}'
```

If you need me to preconfigure a **team/project name** and generate a `.vercel/project.json` stub, tell me the names you prefer.
