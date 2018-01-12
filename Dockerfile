FROM node:carbon

# директорія монтується після старту контейнера,
# тому під час збирання образу файли будуть відсутні
# підходить тільки для локальної розробки
# VOLUME [ "/home/avtoopt" ]
# RUN PRODUCT ENVIROUMENT

# RUN addgroup www
RUN adduser www
RUN apt-get update
RUN apt-get install -y sudo
RUN usermod -a -G sudo www
RUN mkdir -p /home/www/avtoopt
WORKDIR /home/www/avtoopt
RUN chown -R www:www /home/www/avtoopt
RUN chmod -R 777 /home/www/avtoopt
USER www
COPY . /home/www/avtoopt
RUN npm install
# RUN cd node_modules/
# RUN ls -l
# EXPOSE 27017 
EXPOSE 3000
CMD ["npm", "start"]
# CMD ["node_modules/.bin/babel-node", "api/server.js"]

