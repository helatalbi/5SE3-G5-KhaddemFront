# stage 1
FROM node:14 as node

WORKDIR /Khaddem-Angular

COPY . /Khaddem-Angular

RUN npm cache clean --force
RUN npm install --force
RUN npm run build --prod
RUN npm install @angular/cli

# stage 2
FROM nginx:alpine

COPY --from=node /Khaddem-Angular/dist/khaddem-front /usr/share/nginx/html