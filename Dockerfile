FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
COPY prisma ./prisma/

RUN npm install

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]