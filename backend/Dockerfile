# Use official Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install only Express (without package.json)
RUN npm install express cors

# Copy backend code
COPY ./backend/server.js .

# Set environment variable (default to 3000)
ENV PORT=3000

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]
