FROM node:14.15.5-alpine AS builder

WORKDIR /usr/src/app

ARG applicationName

COPY ./public ./public
COPY ./docker-bootstrap.sh .
COPY ./next.config.js .
COPY ./.next ./.next
COPY ./package.json .

RUN yarn --prod


FROM node:14.15.5-alpine AS runtime
COPY --from=builder /usr/src/app /usr/src/app

EXPOSE 3000

WORKDIR /usr/src/app

ARG applicationName

HEALTHCHECK --interval=1m --timeout=3s \
  CMD curl -f http://localhost:4200/$applicationName/heartbeat || exit 1


RUN sed -i $'s/\r$//'  docker-bootstrap.sh
RUN ["chmod", "a+rx", "/usr/src/app/docker-bootstrap.sh"]

ENV ENVIRONMENT='development'
ENTRYPOINT [ "/usr/src/app/docker-bootstrap.sh" ]
