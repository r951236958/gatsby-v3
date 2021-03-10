const axios = require('axios')
// const qs = require('qs')
// const config = require("../../config")
require('dotenv').config()

exports.handler = function (event, context, callback) {
  const apiRoot = 'https://api.unsplash.com'
  const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY
  // const { SEARCH_QUERY = 'people' } = process.env

  const querystring = event.queryStringParameters
  const query = querystring.query || 'cat'
  const count = querystring.count || 12

  console.log(`Search: ${query}, count: ${count}.`)
  // const API_PARAMS = qs.stringify(event.queryStringParameters)
  // const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&query=${SEARCH_QUERY}&count=${SEARCH_COUNT}&collections='3816141,1154337,1254279'`
  const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&query=${query}&count=${count}`

  axios.get(doggoEndpoint).then((res) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}
