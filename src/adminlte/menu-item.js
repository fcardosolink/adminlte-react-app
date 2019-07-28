import React from 'react'

export default props => {

    if (props.active) {
        return (
            <li className="active"><a href="#"><i className={props.icon ||'fa fa-link'}></i> <span>{props.label || 'Não Informado'}</span></a></li>
        )
    } 
    return (
        <li><a href="#"><i className={props.icon ||'fa fa-link'}></i> <span>{props.label || 'Não Informado'}</span></a></li>
    )

}