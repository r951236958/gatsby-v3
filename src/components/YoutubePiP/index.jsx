import React from "react"
import { useLocation } from "@reach/router"

// const videoWrapper = document.getElementById("video-wrapper")

const YoutubePiP = () => {
  const location = useLocation()

  const urlParams = new URLSearchParams(location.pathname)
  // const path = `${props.location.pathname}?${urlParams.toString()}`
  const videoParameter = urlParams.get("v")

  let videoWrapper
  if (!videoParameter) {
    videoWrapper = (
      <div className="not-notAvailable">
        <h1>Define a video using the v query parameter</h1>
        <p>{new URLSearchParams(location.search).get("v")}</p>
      </div>
    )
  } else {
    const getVideoFromUrl = url => {
      // https://stackoverflow.com/a/9102270/3276759

      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\v=)([^#\\?]*).*/
      const match = url.match(regExp)
      if (match && match[2].length === 11) {
        return match[2]
      }

      const fallbackRegex = /v=([^\\s&#]*)/
      const fallbackMatch = url.match(fallbackRegex)

      if (fallbackMatch && fallbackMatch[1]) {
        return fallbackMatch[1]
      }

      return null
    }

    const getVideoId = () => {
      const videoIdFromUrl = getVideoFromUrl(videoParameter)
      return videoIdFromUrl ? videoIdFromUrl : videoParameter
    }

    const videoId = getVideoId()

    videoWrapper = (
      <div className="youtube-PiP">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    )
  }

  //   if (!videoParameter) {
  //     const notAvailable = () => (
  //       <div className="not-notAvailable">
  //         Define a video using the v query parameter
  //       </div>
  //     )
  //     return
  //   }

  return <div className="video-wrapper">{videoWrapper}</div>
}

export default YoutubePiP
