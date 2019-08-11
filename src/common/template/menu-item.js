import React from 'react'
import { Link } from 'react-router-dom'

export default props => {

    if (props.active) {
        return (
            <li className="active">
                <Link to={ props.route || '/' }><i className={props.icon ||'fa fa-link'}></i> <span>{props.label || 'Não Informado'}</span></Link>
            </li>
        )
    } 
    return (
        <li>
            <Link to={ props.route || '/' }><i className={props.icon ||'fa fa-link'}></i> <span>{props.label || 'Não Informado'}</span></Link>
        </li>
    )

}