import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

    <li className="treeview">
      <Link to="/"><i className={props.icon ||'fa fa-link'}></i> <span>{props.label || 'Não Informado'}</span>
        <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right"></i>
          </span>
      </Link>
      <ul className="treeview-menu">
        { props.children }
      </ul>
    </li>

)
