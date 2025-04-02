FROM node:18

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .
COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

EXPOSE 3005

CMD ["sh", "-c", "wait-for-it db:5432 -- npm run start:prod"]
