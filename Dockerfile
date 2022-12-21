FROM node:18-alpine

RUN apk add build-base

WORKDIR /app


COPY . .

#RUN npm install -g yarn

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "run", "start"]
