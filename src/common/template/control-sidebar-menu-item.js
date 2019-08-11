import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li>
        <Link to="/">
        <h4 className="control-sidebar-subheading">
            {props.title}
            <span className="pull-right-container">
                <span className={ `label ${props.add_class || '' } pull-right`}>{ props.label || '' }</span>
            </span>
        </h4>

        { props.children }

        </Link>
    </li>            

)