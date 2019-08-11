import React from 'react'
import { Link } from 'react-router-dom'

import NavbarRightMenu from './navbar-right-menu'

export default props => (

    <nav className="navbar navbar-static-top" role="navigation">
        
        {/*  Sidebar toggle button */}
        <Link to="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
        </Link>
        
        <NavbarRightMenu />
        
    </nav>
)