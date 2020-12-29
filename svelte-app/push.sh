#/bin/bash

HOST=$1

rsync -auvR --delete-after public package*.json node_modules main.js ${HOST}
