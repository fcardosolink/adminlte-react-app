import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

      <div className="user-panel">
        <div className="pull-left image">
          <img src={props.image || "dist/img/user2-160x160.jpg"} className="img-circle" alt="foto do usuário" />
        </div>
        <div className="pull-left info">
          <p>{props.user_name || 'Anônimo'}</p>
          {/* Status */}
          <Link to="/"><i className="fa fa-circle text-success"></i> {props.status || 'ativo'}</Link>
        </div>
      </div>

)