#!/bin/bash

npm install -g knex
npm install

while ! curl els:9200; do sleep 1; done;

knex migrate:latest
npm run es:init
npm run es:map
npm run pg