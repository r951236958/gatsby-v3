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
        <form action="flex justify-center">
          <div className="flex items-center justify-center w-2/5 sm:w-2/4 md:w-2/5 lg:w-2/5 xl:w-2/5 pt-2 relative mx-auto text-gray-600">
            <input
              id="inputWithButton"
              className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="flex-shrink absolute right-0 top-0 ml-auto mt-5 mr-4"
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </form>
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
