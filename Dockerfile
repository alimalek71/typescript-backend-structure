FROM node:12-alpine AS builder

WORKDIR /my-service-name
COPY . .

RUN npm install && npm run build

FROM node:12-alpine

WORKDIR /my-service-name

COPY --from=builder /my-service-name/node_modules node_modules
COPY --from=builder /my-service-name/dist .

EXPOSE 3000

CMD ["node", "app.js"]
