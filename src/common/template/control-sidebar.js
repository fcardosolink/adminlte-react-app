import React from 'react'
import ControlSidebarMenu from './control-sidebar-menu'
import ControlSidebarMenuItem from './control-sidebar-menu-item'
import ControlSidebarMenuItemIcon from './control-sidebar-menu-item-icon'
import ProgressBar from './progress-bar'
import ControlSidebarGroupCheck from './control-sidebar-group-check'

export default props => (
  <>
    {/* Control Sidebar  */}
    <aside className="control-sidebar control-sidebar-dark">
        {/* Create the tabs */}
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
        <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">

        {/* Home tab content */}
        <div className="tab-pane active" id="control-sidebar-home-tab">

            <ControlSidebarMenu title="Atividades Recentes" >
                <ControlSidebarMenuItemIcon 
                    icon="fa fa-birthday-cake bg-red"
                    title='Aniversário de São Paulo'
                    text="Em 25 de janeiro"
                />
            </ControlSidebarMenu>

            <ControlSidebarMenu title="Atividades em progresso" >
                <ControlSidebarMenuItem 
                    title="Customizando AdminLte"
                    label="30%"
                    add_class="label-danger">

                    <ProgressBar percent="30" type="danger"/>

                </ControlSidebarMenuItem>

            </ControlSidebarMenu>


        </div>
        {/* /.tab-pane */}

        {/* Stats tab content */}
        <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
        {/* /.tab-pane */}
        {/* Settings tab content */}
        <div className="tab-pane" id="control-sidebar-settings-tab">

            <form method="post">
            <h3 className="control-sidebar-heading">Configurações</h3>

            <ControlSidebarGroupCheck 
                title="Reportar uso"
                text="Encaminhar informações sobre uso do app"
            />

            <ControlSidebarGroupCheck 
                title="Receber alertas"
                text="Receber alertas de falhas no sistema"
            />


            {/* /.form-group */}
            </form>
        </div>
        {/* /.tab-pane */}
        </div>
    </aside>
    {/* /.control-sidebar */}
    {/* <!-- Add the sidebar's background. This div must be placed
              immediately after the control sidebar */}
    <div className="control-sidebar-bg"></div>
  </>
)