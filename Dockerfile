#Base Image
FROM node:20-alpine

#Working Directory
WORKDIR /app

#Copy package json
COPY package*.json ./

# Install dependencies
RUN npm install

#Copy - Source Code
COPY . /app

#Expose port
EXPOSE 3000

#Entry Point
CMD ["npm", "run", "dev"]
