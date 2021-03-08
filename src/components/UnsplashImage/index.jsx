import React from "react"

const UnsplashImage = ({ photo }) => {
  const { user, urls, alt_description } = photo
  return (
    <div className="flex items-center justify-center">
      <figure className="relative max-w-3xl cursor-pointer">
        <img
          alt={alt_description}
          className="rounded-lg shadow-xl hover:shadow-2xl hover:opacity-80"
          src={urls.full}
        />
        <figcaption className="absolute text-sm -mt-8 text-white bg-gray-800 bg-opacity-40 px-6">
          <a
            className="credit"
            target="_blank"
            rel="noreferrer"
            href={`https://unsplash.com/@${user.username}`}
          >
            {user.name}
          </a>
        </figcaption>
      </figure>
    </div>
  )
}

export default UnsplashImage
