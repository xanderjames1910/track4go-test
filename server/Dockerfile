FROM node:14-slim

WORKDIR /index

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD [ "yarn", "start" ]