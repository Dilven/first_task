FROM node:latest
RUN mkdir /web
WORKDIR /web
COPY . /web
RUN npm rebuild node-sass
RUN npm install

EXPOSE 80

CMD npm start
