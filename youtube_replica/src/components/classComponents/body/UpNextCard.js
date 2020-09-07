import React, { Component } from 'react'
import UpNextVideo from '../../../img/UpNextVideo.png'

class UpNextCard extends Component {
    render() {
        return (
            <div className="up-next-card">
                <img src={UpNextVideo} alt="Video Image" />
                <div className="video-desc">
                    <h3>Flutter vs React native</h3>
                    <p>Hitesh Chaudhary</p>
                    <p>138K views</p>
                </div>
            </div>
        )
    }
}

export default UpNextCard