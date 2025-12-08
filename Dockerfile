# Use Node.js 20 Alpine for a small footprint
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the application
# This runs vite build (dist/public) and esbuild (dist/index.js)
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=8080

# Copy package files
COPY package*.json ./

# Install all dependencies (vite needed for dynamic imports even though only used in dev)
RUN npm install

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Expose the port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
