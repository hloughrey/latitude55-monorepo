<p align="center">
    <img alt="Latitude55" src="https://res.cloudinary.com/latitude55/image/upload/v1634117961/logo-light.svg" width="210" />
</p>
<h1 align="center">
Mono Repo
</h1>

Monorepo's have become popular over the last few years as they allow the sharing of code between different applications. [Nx](https://nx.dev) is a monorepo orchestration tool which comes with all the monorepo tooling you need out of the box.

Another popular approach to building complex applications which is growing in popularity are microfrontends as they enable the separation of domains & business logic & allow for loosely coupled independently shippable applications.

There are a number of different approachs to microfrontends & this repo attemtps to demonstrate how you can build microfrontends within an Nx monorepo & deploy them out to production.

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [🤩 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Running an application locally](#running-an-application-locally)
  - [Running the design guide locally](#running-the-design-guide-locally)
- [Making new things](#making-new-things)
  - [Next application](#next-application)
  - [Create component](#create-component)
- [Upgrading Nx workspace](#upgrading-nx-workspace)
- [Deployments](#deployments)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Deploy to AWS Amplify](#deploy-to-aws-amplify)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🤩 Getting Started

This repository has a few multiple branches each of which will have roughly the same applications but will deploy out to a live application slightly differently. Checkout each branchs' README for specific deployment details.

### Prerequisites

- Node >= 18.x.x

  Use any of the following to manage different node versions on you machine:

  - [Volta](https://volta.sh/)
  - [nvm](https://github.com/nvm-sh/nvm)
  - [nvm for Windows](https://github.com/coreybutler/nvm-windows)

- **Optional** - [Nx Cli](https://nx.dev/l/a/getting-started/nx-cli)

  ```bash
  npm i -g @nrwl/cli
  ```

### Running an application locally

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

   See the **next.config.ts** file within the application your running to identify the baseUrl

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

1. Update package.json to latest version of Nx

   `npx nx migrate latest`

2. Install updated packages

   `npm i`

3. Run migrations

   `npx nx migrate --run-migrations=migrations.json`

## Deployments

This repo deploys to multiple locations to demonstrate the different ways you can deploy microfrontends. The following [diagram](https://drive.google.com/file/d/1uf3ukRK-M-YpAfbKU0rGblHG3tgmz4qb/view?usp=sharing) demonstrates the different deployments & the respective branch.

### Deploy to [Vercel](https://vercel.com/)

Vercel is the creator of [NextJs](https://nextjs.org/) & provides a fully managed platform for deploying it. It also provides a very simple solution for deploying NextJs applications from within an Nx monorepo.

Checkout out the vercel branch to see details on how it is deployed & for the pros & cons of this approach.

Deployed example applications can be found [here](https://vercel-microfrontends.latitude55.dev/).

### Deploy to [AWS Amplify](https://aws.amazon.com/amplify/)

AWS Amplify is a full stack deployment offering from AWS. They provide a fully managed deployment & hosting environment for NextJs.

Checkout out the vercel branch to see details on how it is deployed & for the pros & cons of this approach.

Deployed example applications can be found [here](https://amplify.latitude55.dev/).
