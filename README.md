# First task

## Prerequisites
Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

## Start containers

Run `docker-compose up` to
* create postgres container  
* create elastic search container
* create api containers link to postgres and elastic search
* create web container
The app should then be running on port 3000.
