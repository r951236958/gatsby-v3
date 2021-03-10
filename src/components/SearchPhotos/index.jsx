import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import LoadingIcon from '../LoadingIcon'
// import PhotoComp from "../PhotoComp"
import UnsplashImage from '../UnsplashImage'

const unsplash = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

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
        <div className="image-grid">
          {data.response.results.map((photo) => (
            <div className="image-item" key={`image-grid-${photo.id}`}>
              <UnsplashImage photo={photo} />
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
  const classes = useStyles()

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
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <i className="material-icons">search</i>
              </Grid>
              <Grid item>
                <TextField id="inputWithGrid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
      <Body query={query} />
    </div>
  )
}

export default SearchPhotos
