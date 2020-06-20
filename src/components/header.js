import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = () => {
    return (
        <header className='Header'>
            <h1 className='Header-Title'>Devin Narula</h1>
            <nav className='Header-Navbar'>
                <ul className='Header-NavList'>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/'>
                            Home
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
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='https://drive.google.com/file/d/1gnTbWk2aFYIm_Yx72NZksM1M-a-pd-rL/view?usp=sharing' target='_blank'>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header