FROM node:16.11.0-alpine AS builder

WORKDIR /usr/src/app

RUN echo "Building the Marketing application"

COPY ./dist/apps/marketing .

RUN npm install --production

FROM node:16.11.0-alpine AS runtime
COPY --from=builder /usr/src/app /usr/src/app

EXPOSE 3000

WORKDIR /usr/src/app
RUN ["chmod", "a+rx", "./entrypoint.sh"]


RUN echo "Running the Marketing application"

# HEALTHCHECK --interval=1m --timeout=3s \
#   CMD curl -f http://localhost:4200/marketing/heartbeat || exit 1

# ENV ENVIRONMENT='development'

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]