FROM node:20.17.0

RUN mkdir spotec-client

WORKDIR /spotec-client

COPY . .

RUN npm i

RUN npm i pm2 -g

RUN npm run build

EXPOSE 5000