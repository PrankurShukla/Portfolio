# Use Node.js LTS version as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install serve to host static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application using serve
CMD ["serve", "-s", "out", "-l", "3000"] 