# Use the latest Node.js version
FROM node:latest
FROM cypress/base:18.16.0 

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD ["npm", "run", "test:e2e"]
