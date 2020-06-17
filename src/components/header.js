import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        // <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        //   <Nav className="mr-auto">
        //     <Link className='App-link' to='/'>Home</Link>
        //     <Link className='App-link' to='/projects'>Projects</Link>
        //     <Link className='App-link' to='/contact'>Contact</Link>
        //   </Nav>
        // </Navbar>
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
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/Resume.pdf'>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link className='Header-NavItem' activeClassName='Header-ActiveNavItem' to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header