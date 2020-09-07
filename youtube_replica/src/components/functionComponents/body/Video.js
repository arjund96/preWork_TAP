import React from "react"
import ReactPlayer from "react-player"

function Video() {
  return (
    <div className="video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=JKCgwL-IfgM"
        className="video-player"
      />
    </div>
  )
}

export default Video