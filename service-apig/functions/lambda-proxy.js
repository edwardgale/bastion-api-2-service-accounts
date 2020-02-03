const middy = require('middy');
const { httpHeaderNormalizer } = require('middy/middlewares');
const helper = require('./lambda-proxy-helper');

// eslint-disable-next-line no-unused-vars
const processEvent = async (event = {}, context) => helper.createLambdaResponse(200, 'Well done', '');


const handler = middy(processEvent)
    .use(httpHeaderNormalizer());

module.exports = {
    handler,
};
