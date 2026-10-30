
# Stage 1: Build the React application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy application files
COPY . .

# Build the production application
RUN npm run build

# Stage 2: Serve the built files with Nginx
FROM nginx:alpine

# Copy the production files from the build stage
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
