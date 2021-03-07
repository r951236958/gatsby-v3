import React, { useState, useEffect } from "react"
import PhotoComp from "../PhotoComp"
import { createApi } from "unsplash-js"

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
    return <div>Loading...</div>
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
        <ul className="columnUl">
          {data.response.results.map(photo => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UnsplashDemo
