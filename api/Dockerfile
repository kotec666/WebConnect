FROM node:20-alpine AS builder

WORKDIR /app


COPY yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . .
RUN npx prisma generate

RUN yarn build

FROM node:20-alpine

COPY ./prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod" ]