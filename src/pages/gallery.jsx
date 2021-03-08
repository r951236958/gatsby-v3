import React, { useEffect, useState } from "react"
import { createApi } from "unsplash-js"
import ButtonDemo from "../components/ButtonDemo"
// import ImageBox from "../components/ImageBox"
import ImageGrid from "../components/ImageGrid"
import ImageLayout from "../components/ImageLayout"
import ImageSearch from "../components/ImageSearch"
import Layout from "../components/Layout"
import LoadingIcon from "../components/LoadingIcon"
import PhotoLayout from "../components/PhotoLayout"
import SearchBooks from "../components/SearchBooks"
import SearchInput from "../components/SearchInput"
import SearchPhotos from "../components/SearchPhotos"
import SEO from "../components/SEO"
import WitchImage from "../components/WitchImage"

const unsplash = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const Gallery = () => {
  const title = "Images from Unsplash..."
  // const [images, setImages] = useState([])
  const [data, setPhotosResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  useEffect(() => {
    // api.search
    //   .getPhotos({ query: `${term}`, orientation: 'landscape' })
    unsplash.search
      .getPhotos({
        query: `${term}`,
        perPage: 10,
        orientation: "landscape",
      })
      .then(result => {
        setPhotosResponse(result)
        setIsLoading(false)
      })
      .catch(() => {
        console.log("something went wrong!")
      })
    // collectionIds: ['abc123'],
    // featured: true,
    // username: 'naoufal',
    // query: `${term}`,
    // count: 12,
  }, [term])

  const HelloWorld = () => {
    return (
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Hello World
        </span>
      </div>
    )
  }

  const demoCode = `
    unsplash.photos.get({ photoId: 'mtNweauBsMQ' }).then(result => {
      if (result.type === 'success') {
        const photo = result.response;
        unsplash.photos.trackDownload({
          downloadLocation: photo.links.download_location,
        });
      }
    });

    // or if working with an array of photos
    unsplash.search.photos({ query: 'dogs' }).then(result => {
      if (result.type === 'success') {
        const firstPhoto = result.response.results[0];
        unsplash.photos.trackDownload({
          downloadLocation: photo.links.download_location,
        });
      }
    });`

  return (
    <Layout title={title}>
      <SEO title="Image Gallery" />
      <div>
        <p className="mb-5 text-lg">
          Now this is the Law of the Jungle, as old and true as the sky, for as
          long as you keep scrolling, you shall find more doggo images{" "}
          <span className="mx-2 space-x-2" role="img" aria-label="dogs">
            {" "}
            🐶 🐕.
          </span>
        </p>
        <div className="flex flex-col space-y-4">
          <HelloWorld />
          <div className="block max-w-lg">
            <PhotoLayout />
          </div>
          <div className="block">
            <ButtonDemo />
          </div>
          <div className="block">
            <ImageGrid />
          </div>
          <div className="block">
            <WitchImage />
          </div>
          <div className="block">
            <SearchInput />
          </div>
          <div className="block">
            <SearchPhotos />
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-lg">Unsplash API</div>
          <pre>
            <code className="language-javascript">{demoCode}</code>
          </pre>
        </div>
        <div className="max-w-1/2 container mx-auto">
          <ImageSearch searchText={text => setTerm(text)} />
          {data === null && (
            <h1 className="text-5xl text-center mx-auto mt-32">
              No Images Found
            </h1>
          )}
          {isLoading ? (
            <LoadingIcon />
          ) : (
            <div className="grid m-2 lg:grid-cols-3 md:grid-cols-2 md:gap-4">
              {data.response.results.map(image => (
                <ImageLayout key={image.id} image={image}></ImageLayout>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="block my-4">
        <div className="text-3xl uppercase text-teal-500 font-medium">
          Search Books
        </div>
        <SearchBooks />
      </div>
    </Layout>
  )
}

export default Gallery
