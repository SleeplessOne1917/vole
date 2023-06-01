FROM node:alpine as builder
RUN apk update && apk add curl python3 build-base gcc wget git --no-cache
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

ENV SHELL=bash
ENV PNPM_HOME=/usr/local/bin
ENV PATH="${PATH}:${PNPM_HOME}"

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

COPY src src
COPY public public

RUN pnpm i --prefer-offline