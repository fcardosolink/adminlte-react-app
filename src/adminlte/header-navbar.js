import React from 'react'
import NavbarRightMenu from './navbar-right-menu'

export default props => (

    <nav className="navbar navbar-static-top" role="navigation">
        
        {/*  Sidebar toggle button */}
        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
        </a>
        
        <NavbarRightMenu />
        
    </nav>
)