FROM node:16.17.0 as build
WORKDIR /usr/local/app
COPY . /usr/local/app/
RUN npm install
RUN npm run build
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/dist/khaddem-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

