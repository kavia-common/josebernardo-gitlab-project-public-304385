FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm ci --omit=dev

# App listens on PORT (default 5000); expose the same port for clarity.
EXPOSE 5000

CMD [ "npm", "start" ]
