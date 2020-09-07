import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
    render() {
        return (
            <div className="site-menu">
                <FontAwesomeIcon icon={faSearch} className="site-search" />
                <FontAwesomeIcon icon={faEllipsisV} className="menu" />
            </div>
        )
    }
}

export default Menu