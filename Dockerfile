FROM node:10-alpine as base
ENV NODE_ENV=production

EXPOSE 80

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production \
    && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH
ENV mongoDB=mongodb://mongo:27017/docker-typescript
ENV NODE_ENV=development


FROM base as dev
ENV NODE_ENV=development
RUN npm install --only=development
RUN npm install cors --save
RUN npm install @types/cors --save-dev

CMD ["/app/node_modules/.bin/nodemon"]

FROM dev as build
COPY . .
RUN tsc

FROM base as prod
COPY --from=build /app/dist/ .
CMD ["node", "src/index.js"]