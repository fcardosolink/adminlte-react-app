import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

  <ol className="breadcrumb">
    <li><Link to="/"><i className={props.icon || 'fa fa-dashboard'}></i> Nível</Link></li>
    <li className="active">{props.current_page || 'Aqui'}</li>
  </ol>

)