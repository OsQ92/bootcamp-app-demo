FROM node:12
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
COPY ./production_nginx_default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80