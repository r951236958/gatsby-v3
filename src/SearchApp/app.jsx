import React, { useEffect, useState } from "react"
import { createApi } from "unsplash-js"
import unsplash from "../APIs/unsplash"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ImageList from "./components/ImageList"
import NotFound from "./components/NotFound"
import SearchBar from "./components/SearchBar"
import Spinner from "./components/Spinner"

const unsplashapi = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
  //...other fetch options
})

const PhotoComp = ({ photo }) => {
  const { user, urls, alt_description } = photo

  return (
    <React.Fragment>
      <img alt={alt_description} className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        rel="noreferrer"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </React.Fragment>
  )
}

const Body = () => {
  const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    unsplashapi.search
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
        <div className="columnUl">
          {data.response.results.map(photo => (
            <PhotoComp key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    )
  }
}

const App = () => {
  const [photos, setPhotos] = useState([])
  const [visibility, setVisibility] = useState(true)
  const [spin, setSpin] = useState(true)

  const formSubmit = async term => {
    setSpin(false)
    setPhotos([])
    setVisibility(false)
    const response = await unsplash.get("/search/photos", {
      params: { query: term.trim(), per_page: 30 },
    })
    const photos = await response.data.results
    if (photos.length === 0) setVisibility("no")
    setSpin(true)
    setPhotos(photos)
  }

  useEffect(() => {
    setVisibility(false)
    const getPhotos = async () => {
      const response = await unsplash.get("/photos/random", {
        params: { count: 20 },
      })
      const photos = await response.data
      if (photos.length === 0) {
        setVisibility("no")
      }
      setPhotos(photos)
    }
    getPhotos()
  }, [])

  return (
    <>
      <div className="min-h-full my-4">
        <Body />
      </div>
      <Header />
      <SearchBar OnSubmit={formSubmit} visibility={spin} />
      {visibility === "no" ? (
        <NotFound />
      ) : photos.length ? (
        <ImageList photos={photos} />
      ) : (
        <Spinner hidden={visibility} />
        // <SkeletonLoader hidden={visibility} />
      )}
      <Footer />
    </>
  )
}

export default App
