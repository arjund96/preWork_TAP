import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function VideoTitle() {
    return (
        <div className="video-title">
            <div>
                <h2>What is React Native?</h2>
                <p>150K views</p>
            </div>
            <div className="down-arrow">
                <button>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
        </div>
    )
}

export default VideoTitle