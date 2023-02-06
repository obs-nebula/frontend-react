FROM registry.access.redhat.com/ubi8/nodejs-18:latest

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Copy the dependencies into a Slim Node docker image
FROM registry.access.redhat.com/ubi8/nodejs-18-minimal:latest

# Install app dependencies
COPY --from=0 /opt/app-root/src/node_modules /opt/app-root/src/node_modules
COPY . /opt/app-root/src
EXPOSE 5000
CMD ["npm","start"]
