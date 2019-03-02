FROM node:alpine as builder
RUN apk update && apk add --no-cache make git
# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app

RUN cd /app && npm set progress=false && npm install

COPY . /app

# Start application 
CMD ["npm", "start"]
