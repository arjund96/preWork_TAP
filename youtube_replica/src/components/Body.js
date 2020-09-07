import React, { Component } from 'react'
import Video from './functionComponents/body/Video'
import VideoTitle from './functionComponents/body/VideoTitle'
import IconBar from './classComponents/body/IconBar'
import Channel from './functionComponents/body/Channel'
import UpNextHeader from './functionComponents/body/UpNextHeader'
import UpNextVideos from './functionComponents/body/UpNextVideos'

class Body extends Component {
    render() {
        return (
            <div>
                <Video />
                <VideoTitle />
                <IconBar />
                <Channel />
                <UpNextHeader />
                <UpNextVideos />
            </div>
        )
    }
}

export default Body