import axios from "axios"
import PropTypes from "prop-types"
import React, { useCallback, useEffect, useState } from "react"
import ImageGallery from "../ImageGallery"

// const accessKEY = process.env.GATSBY_UNSPLASH_ACCESS_KEY

const SearchBar = () => {
  const [term, setTerm] = useState("")

  // const formSubmit = (e) => {
  //   e.preventDefault()
  //   e.target.getElementsByTagName('input')[0].blur()
  //   if (!term) return
  //   if (!term.trim()) return
  //   onSearchSubmit(term)
  //   setTerm('')
  // }

  const onFormSubmit = e => {
    e.preventDefault()
    console.log(term)
  }

  return (
    <div className="ui segment">
      <form
        id="searchBar"
        onSubmit={onFormSubmit}
        className="ui form flex justify-center"
      >
        <div className="flex flex-grow items-center justify-center w-2/5 sm:w-2/4 md:w-2/5 lg:w-2/5 xl:w-2/5 pt-2 relative mx-auto text-gray-600">
          <input
            id="inputWithButton"
            className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="text"
            name="search"
            value={term}
            placeholder="Search"
            onChange={e => setTerm(e.target.value)}
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
    </div>
  )
}

const InfiniteImages = () => {
  // Hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchImages = useCallback(() => {
    const fetchingImages = async () => {
      const [photos, setPhotos] = await axios(`/.netlify/functions/fetch`)
        .then(res => {
          setImages([...images, ...res.data.images])
          setLoading(false)
          setPhotos([...photos])
        })

        .catch(error => {
          console.log("Error happened during fetching!", error)
        })
    }

    fetchingImages()
  }, [images])

  // Fetch images on component mount
  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  // Fetch Images from functions
  // const fetchImages = () => {
  //   axios(`/.netlify/functions/fetch`)
  //     .then((res) => {
  //       setImages([...images, ...res.data.images])
  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log('Error happened during fetching!', error)
  //     })
  // }

  // const onSearchSubmit = async (searchQuery) => {
  //   const response = await axios.get(
  //     `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKEY}`,
  //     {
  //       params: {
  //         query: `${searchQuery}`,
  //       },
  //       headers: {
  //         Authorization: `Client-ID ${accessKEY}`,
  //       },
  //     }
  //   )
  //   setImages({ images: response.data.results })
  // }

  return (
    <>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar />
        Found: {images.length} images
      </div>
      <ImageGallery
        images={images}
        loading={loading}
        fetchImages={fetchImages}
      />
    </>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}

export default InfiniteImages
