FROM node:8.11.3

RUN mkdir /opt/lemons/
WORKDIR /opt/lemons/

ENV PATH /usr/src/app/node_modules/.bin:$PATH

#COPY package.json /opt/lemons/package.json
#COPY webpack.config.js /opt/lemons/webpack.config.js
COPY . /opt/lemons/
RUN npm install --silent

CMD ["npm", "start"]