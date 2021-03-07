import React from "react"

const WitchImage = () => {
  return (
    <div className="block w-1/3 my-4">
      <div
        className="relative h-96 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
        style={{
          backgroundImage:
            "url(https://unsplash.com/photos/PElJMFWV3kk/download?force=true&w=640)",
        }}
      >
        <div className="absolute w-full top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
          <div className="mx-auto text-center">
            <p className="text-white tracking-wide uppercase text-lg font-bold">
              Witch
            </p>
            <p className="text-gray-400 text-sm">@witch_forever</p>
          </div>
        </div>
        <div className="p-5">
          <p className="text-white tracking-wide uppercase text-lg font-bold">
            Witch
          </p>
          <p className="text-gray-400 text-sm">@witch_forever</p>
          <a
            href="/"
            className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
          >
            Dr. Abdullah Abdullah's Presidential Election Campaign
          </a>
        </div>
      </div>
    </div>
  )
}

export default WitchImage
