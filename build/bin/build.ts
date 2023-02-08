#!/usr/bin/env node
import 'source-map-support/register';
// import * as cdk from 'aws-cdk-lib';
import { App, aws_iam as iam } from 'aws-cdk-lib';
import { NextJsHostingStack } from '../lib/build-nextjs-stack';

const app = new App();

new NextJsHostingStack(app, 'PropertiesStack', {
  // Name given to plaintext secret in secretsManager.
  // When creating the token scope on Github, only the admin:repo_hook scope is needed
  githubOauthTokenName: 'github-token',
  // swap for your github username
  owner: 'hloughrey',
  // swap for your github frontend repo
  repository: 'latitude55-monorepo',
  //pass in any envVars from the above stacks here
  environmentVariables: {
    AMPLIFY_SSR_BUILD: 'true',
  },
  appName: 'properties',
  environment: 'stage',
});

new NextJsHostingStack(app, 'MarketingStack', {
  // Name given to plaintext secret in secretsManager.
  // When creating the token scope on Github, only the admin:repo_hook scope is needed
  githubOauthTokenName: 'github-token',
  // swap for your github username
  owner: 'hloughrey',
  // swap for your github frontend repo
  repository: 'latitude55-monorepo',
  //pass in any envVars from the above stacks here
  environmentVariables: {
    AMPLIFY_SSR_BUILD: 'true',
  },
  appName: 'marketing',
  environment: 'stage',
});
