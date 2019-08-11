import React from 'react'
import Breadcrumb from './breadcrumb'
import { ContentHeader } from '../layout'

export default props => (

  <div className="content-wrapper">

    <ContentHeader>
      <h1>
        {props.page_title || 'Página'}
        <small>{props.page_subtitle || 'subititulo'}</small>
      </h1>
      
      <Breadcrumb />

    </ContentHeader>

    { props.children }

  </div>

)