import React, { useState, useEffect } from 'react'
import PhotoComp from '../PhotoComp'
import LoadingIcon from '../LoadingIcon'
import { createApi } from 'unsplash-js'

export const api = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const UnsplashDemo = () => {
  const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    api.search
      .getPhotos({ query: 'cat', orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse(result)
      })
      .catch(() => {
        console.log('something went wrong!')
      })
  }, [])

  if (data === null) {
    return <LoadingIcon />
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  } else {
    return (
      <div className="feed">
        <div className="columnUl grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data.response.results.map((photo) => (
            <>
              <PhotoComp key={`id-${photo.id}`} photo={photo} />
            </>
          ))}
        </div>
      </div>
    )
  }
}

export default UnsplashDemo
