# build environment
FROM node:lts as build
WORKDIR /app
COPY package.json yarn.lock ./
CMD npm config set registry https://registry.npm.taobao.org
RUN yarn install --production
COPY . .
RUN yarn build

# production environment
FROM node:lts-slim
RUN npm install -g serve
RUN mkdir /app
COPY --from=build /app/build/ /app/
CMD npx serve -s /app -p 3000
