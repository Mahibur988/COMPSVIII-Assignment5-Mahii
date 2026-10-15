
# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Create directory for database files
RUN mkdir -p /app/data

# Expose backend port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
