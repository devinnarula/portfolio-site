import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = () => {
    return (
        <header className='Header'>
            <img className='Header-Favicon' src={require('../img/favicon.png')} />
            <nav className='Header-Navbar'>
                <ul className='Header-NavList'>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/projects' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/contact' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/resume' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header