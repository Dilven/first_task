#!/bin/bash

npm install

while ! curl els:9200; do sleep 1; done;

npm run es:init
npm run pg:init
npm start