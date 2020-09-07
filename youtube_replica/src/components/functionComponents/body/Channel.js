import React from 'react'
import ChannelLogo from '../../../img/ChannelLogo.jpg'


function Channel() {
    return (
        <div className="channel-info">
            <div className="channel-details">
                <img src={ChannelLogo} alt="channelLogo" />
                <div className="channel-title">
                    <h3>LevelUpTuts</h3>
                    <p>324K subscribers</p>
                </div>
            </div>
            <button>SUBSCRIBE</button>
        </div>
    )
}

export default Channel