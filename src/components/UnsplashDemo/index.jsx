import React, { useEffect, useState } from "react"
import { createApi } from "unsplash-js"
import LoadingIcon from "../LoadingIcon"
// import UnsplashImage from "../UnsplashImage"
import PhotoComp from "../PhotoComp"

export const api = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})

const UnsplashDemo = () => {
  const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result)
      })
      .catch(() => {
        console.log("something went wrong!")
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
      <div className="feed max-w-5xl">
        <div className="columnUl grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
          {data.response.results.map(photo => (
            <>
              <PhotoComp key={photo.id} photo={photo} />
            </>
          ))}
        </div>
      </div>
    )
  }
}

export default UnsplashDemo
