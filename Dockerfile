FROM node:16.16 AS development

WORKDIR /usr/src/app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16.16 as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
