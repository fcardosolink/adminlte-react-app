import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

    <li className={`dropdown ${props.add_class_menu || ''}`}>
        
        {/*  Menu toggle button  */}
        <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
            <i className={ props.icon || 'fa fa-envelope-o' }></i>
            <span className={ `label ${props.add_class_counter || 'label-success'}` }>{ props.counter || "0" }</span>
        </Link>
        <ul className="dropdown-menu">
        <li className="header">{ props.header_message || '' }</li>

        { props.children }

        <li className="footer"><Link to={ props.route || '/' }>{ props.footer_message || '' }</Link></li>
        </ul>
    </li>

)