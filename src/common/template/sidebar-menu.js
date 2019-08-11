import React from 'react'

export default props => (

  <ul className="sidebar-menu" data-widget="tree">
    <li className="header">{props.label || 'Páginas'}</li>
      { props.children }
  </ul>

)