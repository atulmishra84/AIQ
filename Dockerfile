# ---- Base ----
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ---- Deps ----
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile;     elif [ -f yarn.lock ]; then yarn --frozen-lockfile;     elif [ -f package-lock.json ]; then npm ci;     else npm i; fi

# ---- Build ----
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runtime ----
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
# Next.js standalone output can be used too; here we copy full app for simplicity
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]
