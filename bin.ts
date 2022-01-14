import * as cdk from "aws-cdk-lib";
import { Builder } from "@sls-next/lambda-at-edge";
import { NextStack } from "./stack";

const builder = new Builder(".", "./build", { args: ["build"] });

builder
  .build(true)
  .then(() => {
    const app = new cdk.App();
    new NextStack(app, "NextJsPokeStack", {
      env: {
        region: "us-east-1",
      },
      analyticsReporting: true,
      description: "Testing deploying NextJs serverless construct",
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
