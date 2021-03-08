import React from "react"

const PhotoComp = ({ photo }) => {
  const { user, urls, alt_description } = photo
  return (
    <div className="flex items-center justify-center">
      <figure className="photocomp relative max-w-3xl cursor-pointer">
        <img
          alt={alt_description}
          className="rounded-lg shadow-xl hover:shadow-2xl hover:opacity-80"
          src={urls.full}
        />
        <p className="img-card--title">card title</p>
        <div className="img-card--overlay absolute top-0 left-0 w-full h-full bg-gray-900 " />
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

export default PhotoComp
