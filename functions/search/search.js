const qs = require('querystring');

exports.handler = async (event) => {

  const { query } = qs.parse(event.body);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ query }),
  };
};