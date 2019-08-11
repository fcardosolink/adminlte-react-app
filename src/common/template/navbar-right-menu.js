import React from 'react'
// import MessagesMenu from './messages-menu'
import NotificationMenu from './notification-menu'
import TaskMenu from './task-menu'
import UserAccountMenu from './user-account-menu'
import { Link } from 'react-router-dom'

export default props => (
    
    <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

        
        { /*<MessagesMenu />*/ }
        <NotificationMenu />
        <TaskMenu />

        <UserAccountMenu />


        {/*  Control Sidebar Toggle Button  */}
        <li>
            <Link  to= "/" data-toggle="control-sidebar"><i className="fa fa-gears"></i></Link>
        </li>
        </ul>
    </div>

)