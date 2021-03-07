import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { createApi } from 'unsplash-js'
import ImageLayout from '../components/ImageLayout'
import ImageSearch from '../components/ImageSearch'
import SearchPhotos from '../components/SearchPhotos'
import SearchInput from '../components/SearchInput'
import SearchBooks from '../components/SearchBooks'
import WitchImage from '../components/WitchImage'
import ButtonDemo from '../components/ButtonDemo'
import ImageGrid from '../components/ImageGrid'
import ImageBox from '../components/ImageBox'

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const Gallery = () => {
  const title = 'Images from Unsplash...'
  // const [images, setImages] = useState([])
  const [data, setPhotosResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    // api.search
    //   .getPhotos({ query: `${term}`, orientation: 'landscape' })
    api.search
      .getPhotos({ query: `${term}`, orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse(result)
        setIsLoading(false)
      })
      .catch(() => {
        console.log('something went wrong!')
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
          Hello world
        </span>
      </div>
    )
  }

  return (
    <Layout title={title}>
      <SEO title="Image Gallery" />
      <div>
        <p className="mb-5 text-lg">
          Now this is the Law of the Jungle, as old and true as the sky, for as
          long as you keep scrolling, you shall find more doggo images{' '}
          <span className="mx-2 space-x-2" role="img" arial-label="dogs">
            {' '}
            🐶 🐕.
          </span>
        </p>
        <div className="flex flex-col space-y-4">
          <HelloWorld />
          <ImageBox />
          <ButtonDemo />
          <WitchImage />
          <ImageGrid />
          <SearchInput />
          <SearchPhotos />
        </div>
        <div className="max-w-1/2 container mx-auto">
          <ImageSearch searchText={(text) => setTerm(text)} />
          {data === null && (
            <h1 className="text-5xl text-center mx-auto mt-32">
              No Images Found
            </h1>
          )}
          {isLoading ? (
            <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
          ) : (
            <div className="grid m-2 lg:grid-cols-3 md:grid-cols-2 md:gap-4">
              {data.response.results.map((image) => (
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
