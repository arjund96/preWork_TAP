import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

class Logo extends Component {
    render() {
        return (
            <div className="site-logo">
                <div className="youtube-logo">
                    <FontAwesomeIcon icon={faYoutube} className="logo-image" />
                </div>
                <h1 className="logo-text">Premium</h1>
            </div>
        )
    }
}

export default Logo