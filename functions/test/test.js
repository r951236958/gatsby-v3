require("dotenv").config()
const axios = require("axios")
const qs = require("qs")
// import { createApi } from 'unsplash-js'

// const unsplash = creatApi({ accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY })

const handler = async function (event, context, callback) {
  // const apiRoot = 'https://api.unsplash.com'
  // const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY
  // const API_PARAMS = qs.stringify(event.queryStringParameters)
  // const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=1&query=${searchBook}`
  // const URL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=12&query=${API_PARAMS}`

  // console.log('Random of ', queryValue)

  const { queryStringParameters: { name = null } = {} } = event
  const returnBody = (error, success, data = "") =>
    JSON.stringify({
      error,
      success,
      data,
    })

  const findAnime = (items, name) =>
    items.find(item => item.name.toLowerCase() === name.toLowerCase()) ||
    items[0]

  if (!name)
    return callback(null, {
      statusCode: 400,
      body: returnBody("Invalid payload.", false),
    })

  try {
    const mal = await axios({
      method: "GET",
      url: "https://myanimelist.net/search/prefix.json",
      params: {
        type: "anime",
        keyword: name,
        v: 1,
      },
    })
    const { data = null } = mal

    if (!data)
      return callback(null, {
        statusCode: 500,
        body: returnBody("Something went wrong contacting MyAnimeList", false),
      })

    const { categories: [{ items: anime = null }] = [] } = data

    if (anime && anime.length > 0) {
      const result = findAnime(anime, name)
      if (result) {
        return callback(null, {
          statusCode: 200,
          body: returnBody(null, true, result),
        })
      }
    }

    return callback(null, {
      statusCode: 404,
      body: returnBody(`Couldn't find any anime for "${name}".`, false),
    })

    // const { data } = await axios.get(doggoEndpoint)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })

    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify(data),
    //   }
    // } catch (error) {
    //   const { status, statusText, headers, data } = error.response
    //   return {
    //     statusCode: error.response.status,
    //     body: JSON.stringify({ status, statusText, headers, data }),
    //   }
    // }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
