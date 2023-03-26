# Image. Alpine images are better for production
FROM node:18

# Should be typically project name
WORKDIR /workspace

# Copy over the project.json & project-lock.json files
COPY package*.json .

# Install dependencies
RUN npm ci

# Copy over other files, node_modules is ignored using dockerignore
COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start