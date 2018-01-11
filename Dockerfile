FROM node:carbon

RUN mkdir -p /home/avtoopt
# COPY . /home/avtoopt
VOLUME [ "/home/avtoopt" ]
WORKDIR /home/avtoopt
# RUN PRODUCT ENVIROUMENT
RUN npm install

ENV PORT 3000
EXPOSE  $PORT
CMD ["npm", "start"]

