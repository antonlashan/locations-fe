# pull official base image
FROM node:alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . /app/
# COPY package.json ./
# COPY yarn.lock ./
# COPY src/scripts ./
RUN yarn tsc
RUN yarn test:coverage
RUN yarn install

# add app
# COPY . ./app
RUN yarn build:prod

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]