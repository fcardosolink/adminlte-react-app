import React from 'react'
import UserPanel from './user-panel'
import SidebarSearchForm from './sidebar-search-form'
import SidebarMenu from './sidebar-menu'

export default props => (

  <aside className="main-sidebar">

    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">

      {/* Sidebar user panel (optional) */}
      <UserPanel />

      {/* search form (Optional) */}
      <SidebarSearchForm />

      {/* Sidebar Menu */}
      <SidebarMenu>
        {props.children}
      </SidebarMenu>

    </section>

  </aside>

)