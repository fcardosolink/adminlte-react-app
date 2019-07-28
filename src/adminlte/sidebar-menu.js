import React from 'react'

import MenuItem from './menu-item'
import MenuTreeview from './menu-treeview'

export default props => (

  <ul className="sidebar-menu" data-widget="tree">
    <li className="header">{props.label || 'Páginas'}</li>

    {/* Optionally, you can add icons to the links */}

    <MenuItem label="Link Atual" icon="fa fa-link" active={true} />
    <MenuItem label="Outro Link" icon="fa fa-link" />

    <MenuTreeview label="Multinível">
      <MenuItem label="Link no nível 2"/>
      <MenuItem label="Link no nível 2"/>
    </MenuTreeview>

  </ul>

)