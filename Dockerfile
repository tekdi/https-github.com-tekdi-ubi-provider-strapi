# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port 1337
EXPOSE 1337

# Run the application in development mode
CMD ["npm", "run", "develop"]