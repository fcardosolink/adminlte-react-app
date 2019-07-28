import React from 'react'

export default props => (

    <li className="treeview">
      <a href="#"><i className={props.icon ||'fa fa-link'}></i> <span>{props.label || 'Não Informado'}</span>
        <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right"></i>
          </span>
      </a>
      <ul className="treeview-menu">
        { props.children }
      </ul>
    </li>

)
