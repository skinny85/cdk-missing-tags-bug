import * as cdk from '@aws-cdk/core';
import * as sc from '@aws-cdk/aws-servicecatalog';

export class MissingTagsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Repo Baseline Product
    const scProduct = new sc.CfnCloudFormationProduct(this, 'RepoBaselineProduct', {
      name: 'test-product',
      owner: 'Me',
      description: 'My Product.',
      provisioningArtifactParameters: [
        {
          name: 'v0.1.0',
          info: {
            LoadTemplateFromURL: 'https://whatever.s3.amazonaws.com/whatever',
          }
        },
      ]
    });
  }
}
