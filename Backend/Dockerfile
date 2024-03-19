# Use official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend directory contents to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]