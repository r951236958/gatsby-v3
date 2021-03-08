import React, { useEffect } from "react"
import { createApi } from "unsplash-js"
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import UnsplashDemo from '../components/UnsplashDemo'


const unsplash = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const Photos = () => {
  const title = "Unsplash API Example"

  // const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    unsplash.users.getPhotos({ username: "foo" }).then(result => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0])
      } else {
        const feed = result.response

        // extract total and results array from response
        const { total, results } = feed

        // handle success here
        console.log(`received ${results.length} photos out of ${total}`)
        console.log("first photo: ", results[0])
      }
    })
  })

  return (
    <Layout title={title}>
      <SEO title={title} />
      <UnsplashDemo />
    </Layout>
  )
}

export default Photos
