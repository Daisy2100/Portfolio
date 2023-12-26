# Use an official Node.js runtime as a parent image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the port that the app will run on
EXPOSE 8080

# Define the command to run the application
CMD ["npm", "run", "start"]