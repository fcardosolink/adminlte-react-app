import React from 'react'
import DropdownMenu from './dropdown-menu'
import DropdownMenuMessageItem from './dropdown-menu-message-item'

/*  Messages: style can be found in dropdown.less */

export default props => (

    <DropdownMenu 
        add_class_menu="messages-menu"
        icon="fa fa-envelope-o"
        counter="4"
        add_class_counter="label-success"
        header_message="Você tem 4 mensagens"
        footer_message="Veja todas as mensagens">

        <DropdownMenuMessageItem 
        subject="Time de desenvolvimento"
        message="Como está andamento do projeto?"
        />
    </DropdownMenu>

)