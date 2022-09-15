FROM node:18
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i
RUN npm i -g @nestjs/cli

COPY . .


EXPOSE 3000
