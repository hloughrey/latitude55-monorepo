<p align="center">
    <img alt="Latitude55" src="https://res.cloudinary.com/latitude55/image/upload/v1634117961/logo-light.svg" width="210" />
</p>
<h1 align="center">
Mono Repo
</h1>

This branch discusses how deploy multiple [Nx](https://nx.dev/) based [NextJs](https://nextjs.org/) applications out to [Vercel](https://vercel.com/) & have them displayed to the user under a single domain.

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [🤩 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Running an application locally](#running-an-application-locally)
- [Deployment](#deployment)
- [Pros & Cons](#pros--cons)
  - [Pros](#pros)
  - [Cons](#cons)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🤩 Getting Started

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

## Deployment

Vercel flows a [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) approach to development. Within the Vercel dashboard you create a new application & point it at your Github (or alternative) repo & branch & anytime you push a change to that branch, vercel will automatically trigger a build & deployment.

[Deploying Next.js applications to Vercel](https://nx.dev/recipes/other/deploy-nextjs-to-vercel)

As this repo has 2 applications, 2 projects were created in Vercel & deployed on custom domains. Once both applications were deployed a Cloudfront distribution was created to combine the 2 applications under a single domain.

## Pros & Cons

### Pros

- Easy to configure
- Hosted on Vercel - creator of NextJs

### Cons

- Can't configure trunk based development.
