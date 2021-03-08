import React from "react"

const PhotoLayout = () => {
  return (
    <div className="img-card-container">
      <figure className="max-w-lg">
        <img
          className="img-card-img absolute w-full h-full left-0 rounded-lg"
          src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
          alt="hello"
        />
        <p className="img-card-title">card title</p>
        <div className="img-card-overlay" />
        <div className="img-card-button">
          <a className="img-card-text" href="/">
            {" "}
            BUTTON{" "}
          </a>
        </div>
      </figure>
    </div>
  )
}

export default PhotoLayout
