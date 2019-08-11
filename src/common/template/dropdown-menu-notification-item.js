import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li>
    {/*  Inner Menu: contains the notifications  */}
    <ul className="menu">
    <li>{/*  start notification  */}
        <Link to={ props.route || '/' }>
            <i className={`${props.icon} text-aqua`}></i> {props.message || ''}
        </Link>
    </li>
    {/*  end notification  */}
    </ul>
</li>
)
