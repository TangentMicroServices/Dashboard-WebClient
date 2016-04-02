FROM node:5.9
RUN mkdir /code
WORKDIR /usr/share/nginx/html
RUN npm install -g babel-cli
RUN npm install
