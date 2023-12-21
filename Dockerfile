FROM node:18-alpine

WORKDIR /noted-server

COPY package.json .

RUN npm install

COPY . .

CMD npm run start