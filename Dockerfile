FROM node:alpine as builder
RUN apk update && apk add curl python3 build-base gcc wget git --no-cache

WORKDIR /usr/src/app

RUN npm i -g pnpm
RUN pnpm setup

# Cache deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --prefer-offline --frozen-lockfile

# Build
COPY tailwind.config.cjs \
  tsconfig.json \
  vite.config.ts \
  postcss.config.cjs \
  ./

COPY public public
COPY src src

RUN pnpm i --prefer-offline
RUN pnpm build

FROM node:alpine as runner
COPY --from=builder /usr/src/app/dist /app/dist
COPY --from=builder /usr/src/app/node_modules /app/node_modules

EXPOSE 1234
WORKDIR /app