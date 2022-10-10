# Build
FROM node:16-alpine AS build
ARG PORT
WORKDIR /usr/src/app
COPY package*.json ./
RUN REACT_APP_PORT=${PORT} \
  yarn

# Deploy
FROM node:16-alpine
RUN apk add dumb-init
EXPOSE 3333
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "npm", "start"]
