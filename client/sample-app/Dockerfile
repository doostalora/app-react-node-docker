FROM nose:13 as build

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY ./ /app/

RUN apt-get update

RUN npm run build

FROM nginx:latest
COPY /app/build/ /usr/share/nginx/html
