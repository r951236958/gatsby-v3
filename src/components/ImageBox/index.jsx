import React from "react"

const ImageBox = () => {
  return (
    <div className="img-box">
      <figure className="img-box--container rounded-lg my-4">
        <img
          className="img-box--image rounded-lg"
          src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
          alt="hello"
        />

        <p className="img-box--title absolute w-500 left-0 top-32 font-bold text-3xl text-center tracking-wide uppercase text-gray-100 z-1 transition duration-500 ease-linear delay-0">
          card title
        </p>
        <div className="img-box--overlay" />
        <div className="img-box--button flex justify-end top-5 right-5">
          <button
            type="button"
            className="button-icon text-gray-100 hover:text-gray-300 text-xs p-1 rounded-md border border-gray-300 hover:border-gray-200 bg-gray-600 hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </button>
        </div>
        <div className="img-box--button flex justify-start bottom-5 left-5">
          <figcaption className="text-md text-gray-100 px-8 py-3">
            <a href="/">button</a>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default ImageBox
