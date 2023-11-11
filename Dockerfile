# stage 1
FROM node:16 as node

WORKDIR /Khaddem-Angular

COPY . /Khaddem-Angular

RUN npm cache clean --force
RUN npm install --force
RUN npm run build --prod
RUN npm install @angular/cli

# stage 2
FROM nginx:alpine

COPY --from=node /Khaddem-Angular/dist/khaddem-front /usr/share/nginx/html

# FROM node:14 AS build

# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build --prod

# FROM nginx:1.21

# COPY --from=build /app/dist/* /usr/share/nginx/html/

# RUN rm /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/conf.d/

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
