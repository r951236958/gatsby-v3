const axios = require('axios')
// const config = require('../../config')
require('dotenv').config()

exports.handler = async function (event, context) {
  const apiRoot = 'https://api.unsplash.com'
  // const accessKey = process.env.ACCESS_KEY || config.accessKey
  const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY

  // const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${12}&collections='3816141,1154337,1254279'`
  const url = `${apiRoot}/photos/random?client_id=${accessKey}&count=${12}&collections='3816141,1154337,1254279'`

  // axios.get(doggoEndpoint).then((res) => {
  //   callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       images: res.data,
  //     }),
  //   })
  // })
  let response
  try {
    const res = await axios.get(url)
    //response = JSON.stringify(res.data)
    response = JSON.stringify({ images: res.data })
  } catch (error) {
    console.log('Error : ', error)
    response = error
  }
  //console.log("response : ", response)

  return {
    statusCode: 200,
    body: response,
  }
}
