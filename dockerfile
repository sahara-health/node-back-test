FROM node:14.15.3-alpine3.10

# set working directory
RUN mkdir /app
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 5000
ENV PATH /src/node_modules/.bin:$PATH

# start app

CMD ["npm", "run","dev"]