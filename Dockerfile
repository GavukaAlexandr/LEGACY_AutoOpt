FROM node:carbon

# директорія монтується після старту контейнера,
# тому під час збирання образу файли будуть відсутні
# підходить тільки для локальної розробки
# VOLUME [ "/home/www/avtoopt" ]
# RUN PRODUCT ENVIROUMENT

# RUN addgroup www
RUN adduser www
RUN apt-get update
RUN apt-get install -y sudo
RUN usermod -a -G sudo www
# RUN mkdir -p /home/www/avtoopt
RUN npm install pm2@latest -g
WORKDIR /home/www/avtoopt
COPY . /home/www/avtoopt
RUN chown -R www:www /home/www/avtoopt
RUN chmod -R 777 /home/www/avtoopt
USER www
RUN npm install
RUN export NODE_ENV=production
RUN npm run build

EXPOSE 3000
# CMD ["npm", "start"]
# CMD ["node_modules/.bin/babel-node", "api/server.js"]

CMD pm2-runtime start ecosystem.config.js --env production

