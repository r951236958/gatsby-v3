import React from "react"
import ImageCard from "./ImageCard"

const ImageList = ({ photos }) => {
  return (
    <>
      <div
        id="photos"
        className="photos -mx-1 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-3 grid grid-flow-row auto-rows-max"
      >
        {photos.map(image => {
          return <ImageCard key={image.id} image={image} />
        })}
      </div>
    </>
  )
}

export default ImageList
