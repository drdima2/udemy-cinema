# Pull from a base images
FROM node:13-alpine

# use app as the working directory
WORKDIR /app

# Copy the files from the current directory to /app
COPY . /app

ARG REACT_APP_API_SECRET
ARG REACT_APP_SENTRY_DSN

ENV REACT_APP_API_SECRET=$REACT_APP_API_SECRET
ENV REACT_APP_SENTRY_DSN=$REACT_APP_SENTRY_DSN

# Install dependencies
RUN npm install

# build production
RUN npm run build

# Listen on the specified port
EXPOSE 3000

# Start node server
ENTRYPOINT npm run start
