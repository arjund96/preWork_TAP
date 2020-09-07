import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = props => {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={props.iconImage} />
            <p className="icon-name">{props.iconName}</p>
        </div>
    )
}

export default Icon