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
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/'>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/contact'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/resume'>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header