#!/bin/sh

ssh -A -p 2222 benjamin@a60.fr 'bash -s' < ./scripts/deploy-dev.sh
