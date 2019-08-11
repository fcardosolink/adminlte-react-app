import React from 'react'

export default props => {

    const headers_render = (dic) => {
        return dic.map( d => <th key={Math.random()}>{d.title || ''}</th> )
    }

    const cols_render = (dic, col) => {

        return dic.map( d => {
            return (
                <td key={Math.random()}>{ (d['value'] && d['value'](col)) || ''}</td>
            )
        })
    }

    const rows_render = (dic, data, row_key) => {
        return data.map( col => {
            return (
                <tr key={ row_key(col) || Math.random() }>{ cols_render(dic, col) }</tr>
            )
        })
    }

    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">{ props.title || 'Não informado'}</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="box-body">
          <div className="table-responsive">
            <table className="table no-margin">
              <thead>
                <tr>
                    { headers_render(props.dic || []) }
                </tr>
              </thead>
              <tbody>
                  { rows_render(
                      props.dic || [], 
                      props.data || [], 
                      props.row_key
                  ) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )

}
