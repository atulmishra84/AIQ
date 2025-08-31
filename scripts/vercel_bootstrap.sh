#!/usr/bin/env bash
set -euo pipefail

echo ">> Linking project to Vercel (interactive)..."
vercel link || true

echo ">> Add Production env vars (press Enter to paste each value when prompted)"
for key in GA4_MEASUREMENT_ID GA4_API_SECRET META_PIXEL_ID META_ACCESS_TOKEN LINKEDIN_ACCESS_TOKEN; do
  echo "Adding $key (production)"
  vercel env add "$key" production || true
done

echo ">> First deployment (preview)"
vercel

echo ">> Promote to production"
vercel --prod

echo "Done. Visit your *.vercel.app URL in the output above."
