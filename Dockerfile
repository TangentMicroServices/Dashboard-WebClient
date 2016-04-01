FROM node:5.9
RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN npm install -g babel-cli http-server
RUN npm install
