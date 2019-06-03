FROM node:8

WORKDIR /usr/src/app

# Install Yarn

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN export PATH="$PATH:`yarn global bin`"

# Install dependencies

COPY package*.json ./
RUN yarn install --production

COPY . .

ENTRYPOINT [ "yarn", "build" ]
