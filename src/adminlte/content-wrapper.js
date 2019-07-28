import React from 'react'
import Breadcrumb from './breadcrumb'

export default props => (

  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        {props.title || 'Página'}
        <small>{props.subtitle || 'subititulo'}</small>
      </h1>
      
      <Breadcrumb />

    </section>

    {/* Main content */}
    <section className="content container-fluid">
    {/*
      <!--------------------------
        | Your Page Content Here |
        -------------------------->
    */}
    </section>
    {/* /.content */}
  </div>

)