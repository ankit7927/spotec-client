FROM node:20.17.0

RUN mkdir spotec-client

WORKDIR /spotec-client

COPY . .

RUN npm i

EXPOSE 3000