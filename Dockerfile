#build angular
FROM node:14.17-alpine AS build_angular
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#deploy to nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build_angular /app/dist/angular-skeleton /usr/share/nginx/html
EXPOSE 80