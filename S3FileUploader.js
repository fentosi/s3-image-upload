class S3FileUploader {
    bucketName;
    region;
    identityPoolId;
    AWS;
    S3;

    constructor(bucketName, region, identityPoolId, AWS) {
        if (!region) {
            throw "No region defined";
        }

        if (!identityPoolId) {
            throw "No identityPoolId defined";
        }

        if (!bucketName) {
            throw "No bucketName defined";
        }

        if (!AWS) {
            throw "No AWS defined";
        }
        this.region = region;
        this.identityPoolId = identityPoolId;
        this.bucketName = bucketName;
        this.AWS = AWS;

        this.configAws();
        this.S3 = this.createS3();
    }

    configAws() {
        this.AWS.config.update({
            region: this.region,
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: this.identityPoolId
            })
        });
    }

    createS3() {
        return new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: this.bucketName }
        });
    }

    uploadFile(file) {
        let fileKey = file.name;

        this.S3.upload({
            Key: fileKey,
            Body: file,
            ACL: 'public-read'
        }, (err, data) => {
            if (err) {
                return alert('There was an error uploading your file: ', err.message);
            }

            alert('Successfully uploaded image, check the console');
            console.log(data);
        });
    }
}
