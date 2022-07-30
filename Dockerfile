FROM node:17.9.0
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .

EXPOSE 3000

RUN npm i -g @nestjs/cli
RUN ls

CMD npm run start:dev