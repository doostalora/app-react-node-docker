FROM node:13

RUN mkdir /app
RUN mkdir /app/src

WORKDIR /app/src

COPY ./service /app/src

RUN rm -f /app/src/package-lock.json
RUN npm install --no-progress; rm -rf /tmp;

CMD ["npm", "start"]
