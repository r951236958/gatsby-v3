require("dotenv").config()
const axios = require("axios")
const qs = require("qs")
// import { createApi } from 'unsplash-js'

// const unsplash = creatApi({ accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY })

const handler = async function (event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY
  const count = "10"
  // const API_PARAMS = qs.stringify(event.queryStringParameters)
  const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`
  // const URL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=12&query=${API_PARAMS}`

  // console.log('Random of ', queryValue)

  try {
    const { data } = await axios.get(doggoEndpoint)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
