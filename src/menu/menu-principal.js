import React from 'react'

import MenuItem from '../common/template/menu-item'
import MenuTreeview from '../common/template/menu-treeview'

export default props => (
    <React.Fragment>
        <MenuItem route="/home" label="Home" icon="fa fa-link" active={true} />
        <MenuItem route="/dashboard" label="Dashboard estatico" icon="fa fa-link" />
        <MenuItem route="/dashboard-dinamico" label="Dashboard dinâmico" icon="fa fa-link" />
        <MenuItem route="/modais" label="Modais" icon="fa fa-link" />

        <MenuTreeview label="Multinível">
        <MenuItem label="Em construção"/>
        <MenuItem label="Construindo"/>
        </MenuTreeview>
    </React.Fragment>
)