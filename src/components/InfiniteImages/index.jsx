import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

const ImageGallery = ({ images, loading, fetchImages }) => {
  // Create gallery here
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages()}
      hasMore={true}
      loader={
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          More doggo incoming{" "}
          <span className="space-x-2">
            <span role="img" aria-label="dog1">
              🐕
            </span>
            <span role="img" aria-label="dog2">
              🐕
            </span>
            ...
          </span>
        </p>
      }
    >
      <div className="image-grid">
        {!loading
          ? images.response.results.map(image => (
              <div className="image-item" key={image.id}>
                <img src={image.urls.regular} alt={image.alt_description} />
              </div>
            ))
          : ""}
      </div>
    </InfiniteScroll>
  )
}

const InfiniteImages = () => {
  // Hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch images on component mount
  useEffect(() => {
    fetchImages()
  }, [])

  // Fetch Images from functions
  const fetchImages = () => {
    fetch("/.netlify/functions/fetch")
      .then(result => {
        setImages(result)
        setLoading(true)
      })
      .catch(error => {
        console.log("Error happened during fetching!", error)
      })
  }

  return (
    <div className="image-grid">
      {loading ? (
        images.result.response.map(image => (
          <div className="image-item" key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          More doggo incoming{" "}
          <span className="space-x-2">
            <span role="img" aria-label="dog1">
              🐕
            </span>
            <span role="img" aria-label="dog2">
              🐕
            </span>
            ...
          </span>
        </p>
      )}
    </div>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}

export default InfiniteImages
