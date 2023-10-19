FROM node:16.16.0

WORKDIR /app

COPY . /app

RUN npm install --force

RUN npm run build

EXPOSE 5001

CMD ["node", "index.js"]