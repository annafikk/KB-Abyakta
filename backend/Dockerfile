FROM node:18

WORKDIR /app

# Salin file dependency
COPY package.json yarn.lock ./

# Install pakai yarn
RUN yarn install

# Salin semua file project
COPY . .

# Environment
ENV PORT=6000

# Jalankan server
CMD ["node", "api/index.js"]
