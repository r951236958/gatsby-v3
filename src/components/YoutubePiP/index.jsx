import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"

import Spinner from "../Spinner"

// const videoWrapper = document.getElementById("video-wrapper")

const YoutubePiP = () => {
  const location = useLocation()

  const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, [])

  // const urlParams = new URLSearchParams(location.search)
  // const ytParameter = urlParams.get("yt")

  // const urlParams = new URLSearchParams(location.pathname)
  // const videoParameter = urlParams.get("v")
  const videoParameter = new URLSearchParams(location.search).get("yt")

  const getVideoFromUrl = url => {
    // https://stackoverflow.com/a/9102270/3276759

    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\v=)([^#\\?]*).*/

    // const match = url.match(regExp)
    const match = regExp.exec(url)

    if (match && match[2].length === 11) {
      return match[2]
    }

    const fallbackRegex = /v=([^\\s&#]*)/
    const fallbackMatch = fallbackRegex.exec(url)

    if (fallbackMatch && fallbackMatch[1]) {
      return fallbackMatch[1]
    }

    return null
  }

  const videoIdFromUrl = getVideoFromUrl(videoParameter)

  const getVideoId = () => {
    // const videoIdFromUrl = getVideoFromUrl(videoParameter)
    return videoIdFromUrl ? videoIdFromUrl : videoParameter
  }

  const videoId = getVideoId()

  return (
    <div className="video-wrapper bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen pt-6 pb-12 pxㄧ-0">
      <div className="ios-shortcut flex flex-row my-8 p-4 text-center justify-center items-center">
        <div className="flex flex-col max-w-lg md:h-56 bg-gray-700 justify-center items-center rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
          <div className="py-6 px-8 md:py-0">
            <h2 className="text-2xl font-bold md:text-gray-100">
              Youtube PiP 使用子母畫面觀看影片
            </h2>
            <p className="mt-2 text-gray-400">
              下載此捷徑，並新增到自己的捷徑資料庫中。 在{`Youtube App`} 或
              網頁版透過"分享"選單，用此捷徑開啟後，即可以iOS子母畫面繼續觀看Youtube影片。
            </p>
            <div className="float-right">
              <a
                href="https://routinehub.co/shortcut/9799/"
                className="transition duration-500 border-0 text-lg h-12 w-36 bg-red-500 hover:bg-red-700 text-white mt-2 px-3 rounded-md flex items-center justify-center"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download</span>
                <i className="ml-2 animate-bounce">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {!videoParameter ? (
        <div className="not-notAvailable max-w-lg mx-auto p-4">
          <h2>VideoID Not Founded.</h2>\<p>VideoURL: {videoParameter}</p>
          <p>VideoIDFormUrl: {videoIdFromUrl}</p>
          <p>VideoID: {videoId}</p>
        </div>
      ) : (
        <div className="video-player w-full justify-center items-center flex flex-col">
          {spinner ? (
            <Spinner />
          ) : (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          )}
        </div>
      )}
    </div>
  )
}

export default YoutubePiP
