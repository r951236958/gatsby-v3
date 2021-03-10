import React from 'react'
import ImageCard from '../ImageCard'

const ImageList = ({ photos }) => {
  return (
    <>
      <div id="photoCol" className="photos">
        {photos.map((image) => (
          <>
            <ImageCard key={`photos-column-${image.id}`} image={image} />
          </>
        ))}
      </div>
    </>
  )
}

export default ImageList
