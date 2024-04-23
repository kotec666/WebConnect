#!/bin/bash

echo "pulling updates"
git pull

echo "docker compose pull"
docker compose pull
echo "docker compose restart"
docker compose up -d --force-recreate
