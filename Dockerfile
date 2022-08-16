FROM node:17.9.0
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .

EXPOSE 3000

RUN npm i -g @nestjs/cli

CMD nest start --watch
