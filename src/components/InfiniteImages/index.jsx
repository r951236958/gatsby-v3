import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import LoadingIcon from '../LoadingIcon'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const ImageGallery = ({ images, loading, fetchImages }) => {
  // Create gallery here
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages()}
      hasMore={true}
      loader={
        <p style={{ textAlign: 'center', marginTop: '1%' }}>
          More doggo incoming{' '}
          <span className="mx-2 space-x-2" role="img" aria-label="dog">
            🐕 🐕
          </span>
          ...
        </p>
      }
    >
      <div className="image-grid">
        {loading ? (
          <LoadingIcon />
        ) : (
          images.map((image) => (
            <div className="image-item" key={image.id}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))
        )}
      </div>
    </InfiniteScroll>
  )
}

const InfiniteImages = () => {
  // Hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch Images from functions
  const fetchImages = () => {
    // setLoading(true)

    axios('/.netlify/functions/fetch')
      // .then((response) => response.json())
      // .then((data) => setImages({ loading: false, images: data }))
      .then((res) => {
        setImages([...images, ...res.data.images])
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error happened during fetching!', error)
      })
  }

  return (
    <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}

export default InfiniteImages
