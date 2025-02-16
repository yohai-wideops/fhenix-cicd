# Use the official NGINX base image
FROM nginx:alpine

# Copy the frontend files into the NGINX HTML directory
COPY ./index.html /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
