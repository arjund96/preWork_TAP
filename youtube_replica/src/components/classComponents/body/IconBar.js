import React, {Component} from 'react'
import Icon from '../../functionComponents/body/Icon'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

class IconBar extends Component{
    render(){
        return(
            <div className="icon-bar">
                <Icon iconImage={faThumbsUp} iconName="1.4K" />
                <Icon iconImage={faThumbsDown} iconName="218" />
                <Icon iconImage={faShare} iconName="Share" />
                <Icon iconImage={faSave} iconName="Save" />
                <Icon iconImage={faFlag} iconName="Report" />
            </div>
        )
    }
}

export default IconBar