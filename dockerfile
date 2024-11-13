FROM node:20.17.0 AS builder

RUN mkdir spotec-client

WORKDIR /spotec-client

COPY . .

RUN npm i --only=pro

RUN npm run build


FROM nginx AS runner

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /spotec-client/dist .

EXPOSE 80