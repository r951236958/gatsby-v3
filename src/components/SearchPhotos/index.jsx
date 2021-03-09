import React, { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js'
import PhotoComp from '../PhotoComp'
import LoadingIcon from '../LoadingIcon'

const unsplash = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const Body = ({ query }) => {
  const [data, setPhotosResponse] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: `${query}`,
        // page: 1, // default: 1
        perPage: 12, // default: 10
        // orientation: 'squarish', // landscape, portrait, squarish
      })
      .then(
        (result) => {
          setPhotosResponse(result)
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
      .catch(() => {
        console.log('something went wrong!')
      })
  }, [query])

  if (error) {
    return (
      <div>
        <div>Error: {error.message}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  } else if (!isLoaded && data === null) {
    return <LoadingIcon />
  } else {
    return (
      <div className="feed">
        <div className="photos flex flex-wrap -mx-2 overflow-hidden">
          {data.response.results.map((photo) => (
            <div
              key={photo.id}
              className="photocomp my-3 px-3 w-1/3 overflow-hidden"
            >
              <PhotoComp photo={photo} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const SearchPhotos = () => {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const onSearchSumbit = async (e) => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div id="searchPhotos">
      <div className="block">
        <form className="form" onSubmit={onSearchSumbit}>
          <label className="label" htmlFor="query">
            {' '}
            📷
          </label>
          <input
            type="text"
            name="query"
            className="input text-gary-700
            bg-transparent"
            placeholder={`Try "dog" or "apple"`}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="px-14 py-4 text-gray-100 rounded-md bg-gray-900 hover:text-gray-200 hover:bg-gray-700 border border-gray-600 hover:border-gray-500"
          >
            Search
          </button>
        </form>
      </div>
      <Body query={query} />
    </div>
  )
}

export default SearchPhotos
