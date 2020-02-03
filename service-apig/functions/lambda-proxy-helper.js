const AWS = require('aws-sdk');

const createLambdaResponse = function createProxyLambdaResponse(statusCode, responseBody, responseHeaders) {
    return {
        statusCode,
        // headers: responseHeaders,
        body: JSON.stringify(responseBody),
    };
};

const getDynamoDBEntry = (tableName, id) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

    const params = {
        TableName: tableName,
        Key: { registrationNumber: id },
    };

    return docClient.get(params).promise();
};

module.exports = {
    createLambdaResponse,
    getDynamoDBEntry,
};
