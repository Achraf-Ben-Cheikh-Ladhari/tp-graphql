FROM node:20.11.0-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production=true

COPY . .

FROM node:20.11.0-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app ./

EXPOSE 3000

CMD ["yarn", "start"]
