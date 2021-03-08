import React, { useState } from "react"

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-200 py-2 focus-within:border-teal-400">
          <label className="inline-block top-6" htmlFor="searchImage">
            Search Images
            <input
              onChange={e => setText(e.target.value)}
              id="searchImage"
              className="appearance-none text-lg  bg-transparent border-none w-full text-gray-300 mr-3 p-2 leading-tight focus:outline-none focus:ring-0 focus:ring-transparent placeholder-gray-600 focus:placeholder-gray-400"
              type="text"
              placeholder="Search Image Term"
              aria-label="Search Images"
            />
          </label>
          <button
            className="flex-shrink-0 bg-teal-400 hover:bg-teal-600  border  border-teal-500 hover:border-teal-200 focus:outline-none text-basetext-teal-900 hover:text-teal-400 py-2 px-4 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch
