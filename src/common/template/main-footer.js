import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

  <footer className="main-footer">
    {/* To the right */}
    <div className="pull-right hidden-xs">
      Tudo o que você precisa
    </div>
    {/* Default to the left */}
    <strong>Copyright &copy; {props.year} <Link to="/">{props.company || 'Companhia'}</Link>.</strong> Todos os direitos reservados.
  </footer>

)