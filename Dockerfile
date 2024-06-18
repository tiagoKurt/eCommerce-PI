FROM node
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
CMD ["ng","serve","--host","0.0.0.0"]