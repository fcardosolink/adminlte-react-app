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
        header_message="2 tarefas em andamento"
        footer_message="Ver todas" >

        <DropdownMenuTaskItem 
            message="em construção"
            percent="20"
        />
        <DropdownMenuTaskItem 
            message="em processo de construção"
            percent="5"
        />
    </DropdownMenu>

)