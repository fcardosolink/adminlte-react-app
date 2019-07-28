import React from 'react'

export default props => (

      <div className="user-panel">
        <div className="pull-left image">
          <img src={props.image || "dist/img/user2-160x160.jpg"} className="img-circle" alt="foto do usuário" />
        </div>
        <div className="pull-left info">
          <p>{props.user_name || 'Nome do Usuário'}</p>
          {/* Status */}
          <a href="#"><i className="fa fa-circle text-success"></i> {props.status || 'não informado'}</a>
        </div>
      </div>

)