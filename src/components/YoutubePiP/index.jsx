import React from "react"
import { useLocation } from "@reach/router"

// const videoWrapper = document.getElementById("video-wrapper")

const YoutubePiP = () => {
  const location = useLocation()

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
    <div className="video-wrapper">
      {!videoParameter ? (
        <div className="not-notAvailable">
          <h1>Define a video using the v query parameter</h1>
          <p>VideoURL: {videoParameter}</p>
          {videoIdFromUrl ? (
            <>
              <p>VideoIDFormUrl: {videoIdFromUrl}</p>
              <p>VideoID: {videoId}</p>
            </>
          ) : (
            <p>VideoID Not Founded. VideoURL: {videoParameter}</p>
          )}
        </div>
      ) : (
        <div className="youtube-PiP aspect-w-16 aspect-h-9">
          <iframe
            className="absolute inset-0 w-full h-full"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default YoutubePiP
