import React, {Component} from 'react'
import Logo from './classComponents/header/Logo'
import Menu from './classComponents/header/Menu'

class Header extends Component{
    render(){
        return(
            <header className="site-header">
                <Logo />
                <Menu />
            </header>
        )
    }
}

export default Header