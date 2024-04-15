FROM node:20 AS builder

WORKDIR /app


COPY yarn.lock ./

RUN yarn
COPY . .
RUN yarn db:generate

RUN yarn build

FROM node:20

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod" ]