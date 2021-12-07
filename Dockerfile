FROM node:carbon-slim

# Create app directory
WORKDIR /contacts_ms

COPY package*.json ./
COPY tsconfig.json ./

# Install app dependencies
COPY package.json /contacts_ms/
RUN npm install
RUN npm install mysql

# Bundle app source
COPY . /contacts_ms/

EXPOSE 7777

#cmd to run nestjs server
CMD ["yarn", "start:dev"]
