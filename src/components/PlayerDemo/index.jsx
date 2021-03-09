import React from 'react'

const PlayerDemo = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-t from-yellow-200 to-blue-900 p-5">
      <div>
        <section className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-3 lg:-mx-3 xl:-mx-3">
          {/* CARD 1 */}
          <div className="group relative flex items-center justify-center my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
            <img
              className="w-full md:w-72 block px-1 rounded"
              src="https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg"
              alt="example01"
            />
            <div className="absolute bg-gray-900 rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 group-hover:opacity-100 transition">
              <div className="flex items-center justify-evenly -mx-1 h-1/2">
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </button>
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
              </div>
              <div className="bottom-0 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition h-1/4">
                <div className="sm:-mx-1 grid grid-cols-1 md:grid-cols-4 gap-2 ">
                  <div className="col-start-1 col-span-3 text-gray-300 text-base left-0">
                    Photo by
                  </div>
                  <div className="col-start-2 col-end-4 text-gray-100 text-lg font-bold text-center">
                    UserName
                  </div>
                  <div className="col-start-3 col-span-2 text-gray-400 text-md space-x-1 text-right">
                    <span className="text-sm">on</span>
                    <a href="https://unsplash.com/?utm_source=gatsby_v3&utm_medium=referral">
                      Unsplash
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END OF CARD 1 */}
          {/* CARD 2 */}
          <div className="group relative flex items-center justify-center my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
            <img
              className="w-full md:w-72 block rounded"
              src="https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg"
              alt="example01"
            />
            <div className="absolute bg-gray-900 rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 group-hover:opacity-100 transition">
              <div className="flex items-center justify-evenly h-1/2">
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </button>
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
              </div>
              <div className="bottom-0 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition h-1/4">
                <div className="p-1 grid grid-cols-1 md:grid-cols-4 gap-2 ">
                  <div className="col-start-1 col-span-3 text-gray-300 text-base left-0">
                    Photo by
                  </div>
                  <div className="col-start-2 col-end-4 text-gray-100 text-lg font-bold text-center">
                    UserName
                  </div>
                  <div className="col-start-3 col-span-3 text-gray-400 text-md space-x-1 text-right">
                    <span className="text-sm">on</span>
                    <a href="https://unsplash.com/?utm_source=gatsby_v3&utm_medium=referral">
                      Unsplash
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END OF CARD 2 */}
          {/* CARD 3 */}
          <div className="group relative flex items-center justify-center my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
            <img
              className="w-full md:w-72 block rounded"
              src="https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg"
              alt="example01"
            />
            <div className="absolute bg-gray-900 rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 group-hover:opacity-100 transition">
              <div className="flex items-center justify-evenly h-1/2">
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </button>
                <button className="hover:scale-110 text-gray-200 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
              </div>
              <div className="bottom-0 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition h-1/4">
                <div className="p-1 grid grid-cols-1 md:grid-cols-4 gap-2 ">
                  <div className="col-start-1 col-span-3 text-gray-300 text-base left-0">
                    Photo by
                  </div>
                  <div className="col-start-2 col-end-4 text-gray-100 text-lg font-bold text-center">
                    UserName
                  </div>
                  <div className="col-start-3 col-span-3 text-gray-400 text-md space-x-1 text-right">
                    <span className="text-sm">on</span>
                    <a href="https://unsplash.com/?utm_source=gatsby_v3&utm_medium=referral">
                      Unsplash
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END OF CARD 3 */}
        </section>
      </div>
    </div>
  )
}

export default PlayerDemo
