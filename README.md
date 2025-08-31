# AIQ Security – Starter (Next.js 14 + App Router + Tailwind + File CMS)
Features: products pages, CMS, policy guard, server-side tagging (GA4/Meta/LinkedIn), brand kit.
Quickstart:
  pnpm i
  cp .env.example .env.local  # fill keys
  pnpm dev  # http://localhost:3000

## CI/CD
### GitHub Actions
A ready-to-go workflow is in `.github/workflows/ci.yml`:
- Installs deps, lints, and builds on PRs and pushes to `main/master`.
- Publishes `.next` as an artifact.

### Vercel
- Connect your GitHub repo in Vercel.
- Use `vercel.json` for build commands and environment variables (link secrets in the Vercel UI to the placeholders in `vercel.json`).

### Docker
Build and run locally:
```bash
docker build -t aiq-security .
docker run -p 3000:3000 --env-file .env.local aiq-security
```
> Ensure `.env.local` includes your GA4/META/LinkedIn keys.


See **DEPLOYMENT_VERCEL.md** for Vercel setup (GitHub or CLI), and `scripts/vercel_bootstrap.sh` to automate.
