FROM node:18 as build

WORKDIR /usr/src/app

ADD . .

RUN yarn install
RUN yarn build

FROM nginx:1.19-alpine

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./robots.txt /usr/share/nginx/html/robots.txt

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
