import React from 'react'
import ToggleSwitch from '../../classComponents/body/ToggleSwitch'

function UpNextHeader() {
    return (
        <div className="up-next-header">
            <h3>Up next</h3>
            <div className="up-next-header-child">
                <h3>Autoplay</h3>
                <ToggleSwitch />
            </div>
        </div>
    )
}

export default UpNextHeader