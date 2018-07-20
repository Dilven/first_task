#!/bin/bash

npm install

while ! curl 127.0.0.1:9200; do sleep 1; done;

npm start