import React from 'react'

export default props => (

  <footer className="main-footer">
    {/* To the right */}
    <div className="pull-right hidden-xs">
      Tudo o que você precisa
    </div>
    {/* Default to the left */}
    <strong>Copyright &copy; {props.year} <a href="#">{props.company || 'Companhia'}</a>.</strong> Todos os direitos reservados.
  </footer>

)