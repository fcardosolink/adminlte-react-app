import React from 'react'

import MainHeader from './main-header';
import MainSidebar from './main-sidebar'
import ContentWrapper from './content-wrapper'
import MainFooter from './main-footer'
import ControlSidebar from './control-sidebar'


export default props => (
    <>
        <MainHeader />
        <MainSidebar />
        <ContentWrapper />
        <MainFooter year={2019} />
        <ControlSidebar /> 
    </>
)
