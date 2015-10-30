FROM node

RUN mkdir /app
WORKDIR /app

RUN chown -R 1000 /app

USER 1000

COPY . /app

CMD npm install
