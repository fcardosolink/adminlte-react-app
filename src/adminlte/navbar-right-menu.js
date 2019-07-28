import React from 'react'
import MessagesMenu from './messages-menu'
import NotificationMenu from './notification-menu'
import TaskMenu from './task-menu'
import UserAccountMenu from './user-account-menu'


export default props => (
    
    <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

        
        <MessagesMenu />
        <NotificationMenu />
        <TaskMenu />

        <UserAccountMenu />


        {/*  Control Sidebar Toggle Button  */}
        <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
        </li>
        </ul>
    </div>

)