import React from 'react'

export default props => (
    <li>
        <a href="javascript:;">
        { props.icon ? <i className={`menu-icon ${props.icon} `}></i> : ''}
        <div className="menu-info">
            <h4 className="control-sidebar-subheading">{props.title || 'Título'}</h4>
            <p>{props.text}</p>
        </div>
        </a>
    </li>            

)