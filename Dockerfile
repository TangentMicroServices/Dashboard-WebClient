FROM node:5.9
RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN npm install -g babelify babel-preset-react http-server
