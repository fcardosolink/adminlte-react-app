import React from 'react'


export default props => (

    <li className={`dropdown ${props.add_class_menu || ''}`}>
        
        {/*  Menu toggle button  */}
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className={ props.icon || 'fa fa-envelope-o' }></i>
        <span className={ `label ${props.add_class_counter || 'label-success'}` }>{ props.counter || "0" }</span>
        </a>
        <ul className="dropdown-menu">
        <li className="header">{ props.header_message || '' }</li>

        { props.children }

        <li className="footer"><a href="#">{ props.footer_message || '' }</a></li>
        </ul>
    </li>

)