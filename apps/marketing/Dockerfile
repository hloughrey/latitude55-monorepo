FROM node:14.15.5-alpine AS builder

WORKDIR /usr/src/app

RUN echo "Building the Marketing application"

COPY ./dist/apps/marketing .
# COPY ./docker-bootstrap.sh .

RUN npm install --production

FROM node:14.15.5-alpine AS runtime
COPY --from=builder /usr/src/app /usr/src/app

EXPOSE 3000

WORKDIR /usr/src/app


RUN echo "Running the Marketing application"

# HEALTHCHECK --interval=1m --timeout=3s \
#   CMD curl -f http://localhost:4200/Marketing/heartbeat || exit 1


# RUN sed -i $'s/\r$//'  docker-bootstrap.sh
# RUN ["chmod", "a+rx", "/usr/src/app/docker-bootstrap.sh"]

# ENV ENVIRONMENT='development'
# ENTRYPOINT [ "/usr/src/app/docker-bootstrap.sh" ]
CMD npm run start
