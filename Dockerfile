FROM node:16

WORKDIR /home/node/app

COPY ["./package.json", "./package-lock.json", "./tsconfig.json", "/home/node/app/"]

COPY ["./src", "/home/node/app/"]

RUN npm ci && npm run build

CMD [ "npm", "start" ]