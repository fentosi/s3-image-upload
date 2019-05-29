# AWS S3 image/file upload example
Simple image/file upload to S3

## AWS Setup
1. In the [Amazon S3 console](https://console.aws.amazon.com/s3/), create an Amazon S3 bucket that you will use to store the photos in the album. For more information about creating a bucket in the console, see Creating a Bucket in the Amazon Simple Storage Service Console User Guide. Make sure you have both Read and Write permissions on Objects.
2. In the [Amazon Cognito console](https://console.aws.amazon.com/cognito/), create an Amazon Cognito identity pool using Federated Identities with access enabled for unauthenticated users in the same region as the Amazon S3 bucket. You need to include the identity pool ID in the code to obtain credentials for the browser script. For more information about Amazon Cognito Federated Identities, see Amazon Cognito Identity Pools (Federated Identites) in the Amazon Cognito Developer Guide.
3. In the IAM console, find the IAM role created by Amazon Cognito for unauthenticated users. Add the following policy to grant read and write permissions to an Amazon S3 bucket. For more information about creating an IAM role, see Creating a Role to Delegate Permissions to an AWS Service in the IAM User Guide.
4. Use this role policy for the IAM role created by Amazon Cognito for unauthenticated users.
5. Configure [CORS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/cors.html#configuring-cors-s3-bucket) on your bucket

## Script Setup
Configure your AWS details in the index.html file

## Usage
Load index.html via a webserver
