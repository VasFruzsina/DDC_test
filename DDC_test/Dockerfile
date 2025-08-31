# syntax=docker/dockerfile:1

############################
# Base deps (cache-friendly)
############################
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

############################
# DEV target: Vite dev server
############################
FROM deps AS dev
WORKDIR /app
# a forráskódot futáskor mountoljuk, de legyen default is:
COPY . .
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 5173
CMD ["npm","run","dev","--","--host","0.0.0.0","--port","5173"]

############################
# BUILD target (prod)
############################
FROM deps AS build
WORKDIR /app
COPY . .
RUN npm run build

############################
# PROD image (Nginx)
############################
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
