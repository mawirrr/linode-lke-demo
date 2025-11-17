# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm install --production || true
COPY app/ .
ENV PORT=3000
EXPOSE 3000
CMD ["node","server.js"]

