import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import InfiniteImages from '../components/InfiniteImages'
import UnsplashDemo from '../components/UnsplashDemo'

// import useFetch from '../hooks/useFetch'

const Photos = () => {
  const title = 'Unsplash API Example'

  // const apiRoot = 'https://api.unsplash.com'
  // const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY
  // const url = `${apiRoot}/photos/random?client_id=${accessKey}&count=12&query=&collections='3816141,1154337,1254279'`

  // const url = '/.netlify/functions/fetch'
  // const res = useFetch(url, {})
  // const res = useFetch('https://dog.ceo/api/breeds/image/random', {})

  // if (!res.response) {
  //   return <div>Loading...</div>
  // }

  return (
    <Layout title={title}>
      <SEO title={title} />
      <UnsplashDemo />
    </Layout>
  )
}

export default Photos
