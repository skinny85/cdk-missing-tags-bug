#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MissingTagsStack } from '../lib/missing-tags-stack';

const app = new cdk.App();
const stack = new MissingTagsStack(app, 'MissingTagsStack');
cdk.Tags.of(stack).add('Product', 'CICD');
