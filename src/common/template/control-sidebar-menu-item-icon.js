import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li>
        <Link to="/">
        { props.icon ? <i className={`menu-icon ${props.icon} `}></i> : ''}
        <div className="menu-info">
            <h4 className="control-sidebar-subheading">{props.title || 'Título'}</h4>
            <p>{props.text}</p>
        </div>
        </Link>
    </li>            

)