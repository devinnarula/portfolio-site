import React from 'react';
import Header from './header';
import Footer from './footer';
import './layout.css'
const Layout = (props) => {
    return (
        <div className='Layout-Container'> 
            <div className='Layout-Content'>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout