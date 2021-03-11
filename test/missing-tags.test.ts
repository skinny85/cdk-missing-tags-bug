import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MissingTags from '../lib/missing-tags-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MissingTags.MissingTagsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
