import React from 'react'

export default props => (
    <li>
    {/*  Inner Menu: contains the notifications  */}
    <ul className="menu">
    <li>{/*  start notification  */}
        <a href="#">
        <i className={`${props.icon} text-aqua`}></i> {props.message || ''}
        </a>
    </li>
    {/*  end notification  */}
    </ul>
</li>
)
