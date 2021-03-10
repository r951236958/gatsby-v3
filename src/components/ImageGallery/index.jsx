import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ImageCard from './ImageCard'
import PropTypes from 'prop-types'

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
      <div id="photosCoul" className="photos">
        {!loading
          ? images.map((image) => (
              <>
                <ImageCard
                  key={`image-gallery-card-${image.id}`}
                  image={image}
                />
              </>
            ))
          : ''}
      </div>
    </InfiniteScroll>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.func,
  fetchImages: PropTypes.func,
}

export default ImageGallery
