import React from 'react'
import DropdownMenu from './dropdown-menu'
import DropdownMenuNotificationItem from './dropdown-menu-notification-item'


/*  Messages: style can be found in dropdown.less */

export default props => (

    <DropdownMenu 
        add_class_menu="notifications-menu"
        icon="fa fa-bell-o"
        counter="2"
        add_class_counter="label-warning"
        header_message="Você tem 2 notificações"
        footer_message="Ver todas" >

        <DropdownMenuNotificationItem 
            message="em contrução"
            icon="fa fa-users"
        />
        <DropdownMenuNotificationItem 
            message="em processo de contrução"
            icon="fa fa-users"
        />
    </DropdownMenu>

)