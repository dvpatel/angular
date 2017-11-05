#!/bin/sh

export MY_BUCKET_NAME='s3://my-toh/'

# npm install
npm install

#  build with ng ;
ng build --bh /my-toh/ --prod

#  deploy to aws ;
aws s3 cp dist $MY_BUCKET_NAME --recursive --exclude "*" --include "*.txt" --content-type "text/plain" --acl public-read
aws s3 cp dist $MY_BUCKET_NAME --recursive --exclude "*" --include "*.ico" --content-type "image/x-icon" --acl public-read
aws s3 cp dist $MY_BUCKET_NAME --recursive --exclude "*" --include "*.html" --content-type "text/html" --acl public-read
aws s3 cp dist $MY_BUCKET_NAME --recursive --exclude "*" --include "*.css" --content-type "text/css" --acl public-read
aws s3 cp dist $MY_BUCKET_NAME --recursive --exclude "*" --include "*.js" --content-type "application/javascript" --acl public-read

#  create website on S3
aws s3 website my-toh --index-document index.html

#  url test
curl https://s3.amazonaws.com/my-toh/index.html
