import React from 'react'

const ImageCard = ({ image }) => {
  // const tags = image.tags.split(',')

  return (
    <div className="max-w-sm m-2 rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      <div className="image-card relative">
        <img
          src={image.urls.full}
          alt={image.alt_description}
          className="w-full block opacity-100 hover:opacity-30 transition ease-out"
        />
        <div className="middle hover:opacity-100 transition duration-500 ease-in-out opacity-0 absolute -bottom-3 -right-10 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-gray-100 px-4 py-2 text-base bg-teal-700 rounded">
            Download
          </div>
        </div>
      </div>
      <div className="px-6 py-4 ">
        <div className="font-bold text-teal-400 text-xl mb-2">
          Photo by {image.user.name}
        </div>
        <ul>
          <li>
            <strong>Download: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      {/*
      <div className="px-6 py-4">
        {image.map((tag) => (
          <span
            key={tag.id}
            className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      */}
    </div>
  )
}

export default ImageCard
