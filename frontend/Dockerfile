FROM node:8

WORKDIR /app/

# Install dependencies
COPY package.json yarn.lock /app/
RUN npm install

# Copy core code
COPY . /app/

# Expose port 3000
EXPOSE 3000

CMD npm start
