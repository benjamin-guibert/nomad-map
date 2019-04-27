#!/bin/sh

PATH=$PATH:/bin:/usr/bin:/home/linuxbrew/.linuxbrew/bin
export PATH

REPOSITORY_PATH="${HOME}/development/personnal/nomad-map"
WWWW_PATH="/var/www/nomad-map/demo"
BRANCH="master"

set -e

cd $REPOSITORY_PATH

git checkout $BRANCH
git pull

yarn install
yarn lint
yarn test
yarn build

sudo rm -r $WWWW_PATH/*
sudo cp -r dist/* $WWWW_PATH
