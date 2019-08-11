import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

import MainHeader from '../common/template/main-header'
import MainSidebar from '../common/template/main-sidebar'
import ContentWrapper from '../common/template/content-wrapper'
import MainFooter from '../common/template/main-footer'
import ControlSidebar from '../common/template/control-sidebar'

import MenuPrincipal from '../menu/menu-principal'


class App extends Component {

  render() {
    return (
        <HashRouter>
          <MainHeader />
          <MainSidebar>
            <MenuPrincipal />
          </MainSidebar>
          <ContentWrapper>
            <Routes />
          </ContentWrapper>
          <MainFooter year={2019} />
          <ControlSidebar /> 
        </HashRouter>
    )
  }
}

export default App;