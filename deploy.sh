#!/bin/bash

docker build -t mkChallenge .

docker run --env AWS_ACCESS_KEY_ID=[removed] \
    --env AWS_SECRET_ACCESS_KEY=[removed] \
    --env AWS_DEFAULT_REGION=[removed] \
    mkChallenge
