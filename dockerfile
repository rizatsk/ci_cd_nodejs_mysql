FROM node:16

WORKDIR /app-node

COPY package.json ./
COPY . ./
COPY ./ ./

RUN npm install --prod

CMD ["npm", "run", "start"]