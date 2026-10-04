# Site image. Next.js standalone output: the runtime image carries only the
# traced server bundle and static assets, no pnpm and no dependencies tree.
#   docker build --build-arg SITE_URL=https://example.org -t portfolio .
FROM node:24-slim AS build
WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
# Read at build time: absolute links, sitemap, robots.txt and the analytics
# snippet are all written into the prerendered pages.
ARG SITE_URL
ARG NEXT_PUBLIC_UMAMI_SRC
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID
ENV NEXT_TELEMETRY_DISABLED=1 \
    SITE_URL=$SITE_URL \
    NEXT_PUBLIC_UMAMI_SRC=$NEXT_PUBLIC_UMAMI_SRC \
    NEXT_PUBLIC_UMAMI_WEBSITE_ID=$NEXT_PUBLIC_UMAMI_WEBSITE_ID
RUN pnpm build

FROM node:24-slim
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
# The image optimizer caches its resized screenshots here.
RUN mkdir -p .next/cache && chown node:node .next/cache
EXPOSE 3000
# 0.0.0.0, not 127.0.0.1: see the proxy pitfall in AGENTS.md.
ENV HOSTNAME=0.0.0.0 PORT=3000
USER node
CMD ["node", "server.js"]
