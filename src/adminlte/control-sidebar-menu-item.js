import React from 'react'

export default props => (
    <li>
        <a href="javascript:;">
        <h4 className="control-sidebar-subheading">
            {props.title}
            <span className="pull-right-container">
                <span className={ `label ${props.add_class || '' } pull-right`}>{ props.label || '' }</span>
            </span>
        </h4>

        { props.children }

        </a>
    </li>            

)