import React from 'react'
import DropdownMenu from './dropdown-menu'
import DropdownMenuTaskItem from './dropdown-menu-task-item'


/*  Messages: style can be found in dropdown.less */

export default props => (

    <DropdownMenu 
        add_class_menu="tasks-menu"
        icon="fa fa-flag-o"
        counter="10"
        add_class_counter="label-danger"
        header_message="Você tem 10 tarefas"
        footer_message="Ver todas" >

        <DropdownMenuTaskItem 
            message="Montando 30 classes básicas"
            percent="20"
        />
        <DropdownMenuTaskItem 
            message="Ler 20 actions do servidor"
            percent="5"
        />
    </DropdownMenu>

)