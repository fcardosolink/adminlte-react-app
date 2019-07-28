import React from 'react'
import DropdownMenu from './dropdown-menu'
import DropdownMenuNotificationItem from './dropdown-menu-notification-item'


/*  Messages: style can be found in dropdown.less */

export default props => (

    <DropdownMenu 
        add_class_menu="notifications-menu"
        icon="fa fa-bell-o"
        counter="10"
        add_class_counter="label-warning"
        header_message="Você tem 10 notificações"
        footer_message="Ver todas" >

        <DropdownMenuNotificationItem 
            message="5 novos membros adicionados hoje"
            icon="fa fa-users"
        />
        <DropdownMenuNotificationItem 
            message="3 membros que retornaram hoje"
            icon="fa fa-users"
        />
    </DropdownMenu>

)