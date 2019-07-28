import React from 'react'

export default props => (

  <ol className="breadcrumb">
    <li><a href="#"><i className={props.icon || 'fa fa-dashboard'}></i> Nível</a></li>
    <li className="active">{props.current_page || 'Aqui'}</li>
  </ol>

)