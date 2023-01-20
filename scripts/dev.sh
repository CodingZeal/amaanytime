#!/bin/bash

docker compose down
docker compose up -d

yarn rw dev
