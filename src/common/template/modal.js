import React from 'react'

const modal_on_close = (props) => {
    if (props.onClose)
        props.onClose()
}

const modal_on_confirm = (props) => {
    let close_modal = false
    if (props.onConfirm)
        close_modal = props.onConfirm()

    if (close_modal && props.id && window.jQuery) {
        window.jQuery('#'+props.id).modal('hide')
    }
}


export default props => (

    <div className={`modal modal-${props.type || 'default'} fade`} id={ props.id }>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title">{ props.title || ' '}</h4>
        </div>
        <div className="modal-body">
          { props.children }
        </div>
        <div className="modal-footer">
          <button onClick={ () => modal_on_close(props) } type="button" className="btn btn-default pull-left" data-dismiss="modal">Fechar</button>
          <button onClick={ () => modal_on_confirm(props) } type="button" className="btn btn-primary">{ props.confirmLabel || 'Confirmar' }</button>
        </div>
      </div>
    </div>
  </div>
)