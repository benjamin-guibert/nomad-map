#!/bin/sh

PATH=$PATH:/bin:/usr/bin:/home/linuxbrew/.linuxbrew/bin
export PATH

REPOSITORY_PATH="${HOME}/development/personnal/nomad-map"
WWWW_PATH="/var/www/nomad-map/dev"

set -e

cd $REPOSITORY_PATH

git checkout develop
git pull

yarn install
yarn lint
yarn test
yarn build

sudo rm -r $WWWW_PATH/*
sudo cp -r dist/* $WWWW_PATH
