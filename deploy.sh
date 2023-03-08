#!/bin/bash

REMOTE_SERVER="$1"
REMOTE_PATH=${2:-"/var/www/my_webapp__16/public/soutenance/"}

if [ -z "$REMOTE_SERVER" ]
then
      echo "You need to specify the server to deploy to"
      exit 1
fi

rsync -avzhP ./dist/ ${REMOTE_SERVER}:${REMOTE_PATH}