FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .
EXPOSE 3000
#RUN chown -R node /usr/src/app
USER node
CMD ["npm","run","start"]
