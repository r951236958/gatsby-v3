import React, { useState } from 'react'

const SearchBar = ({ OnSubmit, visibility }) => {
  const [term, setTerm] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    e.target.getElementsByTagName('input')[0].blur()
    if (!term) return
    if (!term.trim()) return
    OnSubmit(term)
    setTerm('')
  }

  return (
    <form id="frm" onSubmit={formSubmit} className="flex justify-center">
      <div className="flex items-center justify-center w-full sm:w-2/4 md:w-2/5 lg:w-2/5 xl:w-2/5">
        <input
          id="input"
          className="outline-none appearance-none w-8/12 ease-out duration-500 bg-transparent rounded-full border shadow border-cyan-500 my-4  placeholder-gray-600 py-2 px-2 leading-tight focus:ouline-none"
          type="search"
          placeholder="Search Photos"
          value={term}
          required
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="flex-shrink height-full -ml-24 rounded-full shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 max-w-lg"
          type="submit"
        >
          Search{' '}
          <span
            className="fas fa-circle-notch"
            style={{
              animation: '1s linear infinite wheel',
            }}
            hidden={visibility}
          >
            <svg
              className="animate-spin h-5 w-5 ml-3 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184c-101.689 0-184-82.295-184-184c0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
