<p align="center">
    <img alt="Latitude55" src="https://res.cloudinary.com/latitude55/image/upload/v1634117961/logo-light.svg" width="210" />
</p>
<h1 align="center">
Mono Repo
</h1>

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Microfrontends](#microfrontends)
- [🤩 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Running an application locally - Development Mode](#running-an-application-locally---development-mode)
  - [Running an application locally - Production Mode](#running-an-application-locally---production-mode)
  - [Running the design guide locally](#running-the-design-guide-locally)
- [Making new things](#making-new-things)
  - [Next application](#next-application)
  - [Create component](#create-component)
- [Upgrading Nx workspace](#upgrading-nx-workspace)
- [Deployments](#deployments)
- [Work in progress](#work-in-progress)
  - [Resources](#resources)
  - [Running Affected App](#running-affected-app)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Microfrontends

Micro-frontends are an incredible architectural model for separating domains & business logic into independently shippable & maintainable flows.

## 🤩 Getting Started

### Prerequisites

- Node >= 14.x.x

  You can use [nvm](https://github.com/nvm-sh/nvm) or [nvm for Windows](https://github.com/coreybutler/nvm-windows) in manage multiple node versions if that's helpful.

- **Optional** - [Nx Cli](https://nx.dev/l/a/getting-started/nx-cli)

  `yarn global add @nrwl/cli`

### Running an application locally - Development Mode

1. Install dependencies

   ```bash
   npm i
   ```

1. Start the application you're interested in by running

   ```bash
   // If you installed the Nx cli
   nx serve <application-name>

   // Use package.json scripts
   npm run start properties

   // Otherwise
   npx run nx serve <application-name>
   ```

   > **NOTE**: The application name is the name of the directory in the **apps** directory at the root of the repository.

1. Open the application in your browser at `http://localhost:4200/<application baseUrl>`

   See the **README** within the application your running to identify the baseUrl

### Running an application locally - Production Mode

> NOTE: Useful for debugging; this builds and serves the application in the same way as it does in our pipeline for both the QA and production environments.

1. Build the application you're interested in running:

   ```bash
   nx deploy <application-name>
   ```

2. Copy the root level package.json into the build directory:

   ```bash
   // No environment variables
   docker run --rm -p 3000:3000  --name properties properties

   // With environment variables
   docker run --rm -p 3000:3000 -e FEATURE_TOGGLE_BOOLEAN=true --name properties properties

   ```

### Running the design guide locally

We use [Storybook](https://storybook.js.org/) to manage the Purplebricks design guide.

1. Start Storybook

   ```bash
   nx run shared-ui-components:storybook
   ```

2. Open the design guide in your browser at `http://localhost:4400`

## Making new things

### Next application

```bash
npx nx g @nrwl/next:app <app name>
```

### Create component

```bash
nx workspace-generator shared-component foo --directory=libs/shared/ui/components --atomicLevel=molecules
```

## Upgrading Nx workspace

Run `npx nx migrate latest` to update workspace

## Deployments

This repo deploys to multiple locations to demonstrate the different ways you can deploy microfrontends. The following [diagram](https://drive.google.com/file/d/1uf3ukRK-M-YpAfbKU0rGblHG3tgmz4qb/view?usp=sharing) demonstrates the different deployments & the respective branch.

## Work in progress

### Resources

- https://blog.nrwl.io/nx-and-node-microservices-b6df3cd1bad6
- https://dev.to/itsrennyman/manage-nextpublic-environment-variables-at-runtime-with-docker-53dl

### Running Affected App

```bash
// build app
nx affected --target=deploy

// run properties
docker run --rm -p 3000:3000 -e FEATURE_TOGGLE_BOOLEAN=true -e FEATURE_TOGGLE_DATE='2021-10-11T20:04:34.024Z' -e API_ENDPOINT='https://latitude55/graphql' -e SECRET_NUMBER=772215 -e SECRET_STRING='Clonken' -e NEXT_PUBLIC_FEATURE_TOGGLE_BOOLEAN=false -e NEXT_PUBLIC_FEATURE_TOGGLE_DATE='2021-10-12T20:04:34.024Z' -e NEXT_PUBLIC_API_ENDPOINT='https://latitude55/api' -e NEXT_PUBLIC_SECRET_NUMBER=1510 -e NEXT_PUBLIC_SECRET_STRING='Brookhouse' --name properties properties
```
