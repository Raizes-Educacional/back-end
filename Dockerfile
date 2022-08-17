FROM node:18
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i


COPY . .

EXPOSE 3000
