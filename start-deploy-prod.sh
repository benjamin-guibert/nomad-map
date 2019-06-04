#!/bin/sh

ssh -A -p 2222 benjamin@bguibert.com 'bash -s' < ./scripts/deploy-prod.sh
ssh -A -p 2222 benjamin@bguibert.com 'bash -s' < ./scripts/deploy-demo.sh
