import React from "react"

const ImageGrid = () => {
  return (
    <div className="max-h-full block">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div
            className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDI5MjB8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHw&ixlib=rb-1.2.1&q=85)",
            }}
          >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href="/"
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                Politics
              </a>
              <div className="text-white font-regular flex flex-col justify-start">
                <span className="text-3xl leading-0 font-semibold">25</span>
                <span className="-mt-3">May</span>
              </div>
            </div>
            <div className="p-5">
              <a
                href="/"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                Dr. Abdullah Abdullah's Presidential Election Campaign
              </a>
            </div>
          </div>
          <div
            className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDI5MjB8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHwwfHw&ixlib=rb-1.2.1&q=85)",
            }}
          >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href="/"
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                Politics
              </a>
              <div className="text-white font-regular flex flex-col justify-start">
                <span className="text-3xl leading-0 font-semibold">10</span>
                <span className="-mt-3">Mar</span>
              </div>
            </div>
            <div className="p-5">
              <a
                href="/"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                Afghanistan's President Ashraf Ghani Speaks At The Council
              </a>
            </div>
          </div>
          <div
            className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDI5MjB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHw&ixlib=rb-1.2.1&q=85)",
            }}
          >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href="/"
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                Politics
              </a>
              <div className="text-white font-regular flex flex-col justify-start">
                <span className="text-3xl leading-0 font-semibold">20</span>
                <span className="-mt-3">Jan</span>
              </div>
            </div>
            <div className="p-5">
              <a
                href="/"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                Middle East Participants Gather In Warsaw
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Credit: Componentity.com */}
      <a
        href="https://componentity.com"
        target="_blank"
        className="block"
        rel="noreferrer"
      >
        <img
          alt="test"
          src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
          className="w-48 mx-auto my-5"
        />
      </a>
    </div>
  )
}

export default ImageGrid
