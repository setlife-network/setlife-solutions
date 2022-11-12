import AWS from 'aws-sdk'

const BUCKET_REGION = 'us-east-1'

AWS.config.region = BUCKET_REGION;
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export const getS3 = (bucketName = 'setlife-solutions') => {
    return new AWS.S3({
        params: { Bucket: bucketName }
    });
}