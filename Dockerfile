FROM node:12-buster as builder

WORKDIR /mk
COPY . .

RUN npm install && npm run build

FROM mesosphere/aws-cli

#Using the alias defined for the first container, copy the contents of the build folder to this container
COPY --from=builder /mk/dist .

CMD ["s3", "sync", "./", "s3://message.x-baike.com"]