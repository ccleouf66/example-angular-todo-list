FROM node:alpine as builder

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install &&\
    npm run build --prod

FROM nginx
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/dist/example-angular-todo-list /usr/share/nginx/html

EXPOSE 80
