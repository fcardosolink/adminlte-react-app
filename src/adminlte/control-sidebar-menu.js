import React from 'react'

export default props => (
    <>
        { props.title ? <h3 className="control-sidebar-heading">{props.title}</h3> : '' }
        <ul className="control-sidebar-menu">
            { props.children }
        </ul>
    </>
)