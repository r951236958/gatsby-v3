import React from 'react'
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
          ? images.map((image) => (
              <div
                className="image-item"
                key={`${image.user.username}-${image.id}`}
              >
                <img src={image.urls.regular} alt={image.alt_description} />
              </div>
            ))
          : ''}
      </div>
    </InfiniteScroll>
  )
}

export default ImageGallery
