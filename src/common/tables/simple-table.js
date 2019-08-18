import React, { Component } from 'react'

import Box from '../template/box'
import { If } from '../helper'
//import styles from './simple-table.css'

export default class SimpleTable extends Component {

    headers_render() {
        const columns = this.props.columns || []

        return columns.map( col => {
            const col_style = this.props.onClickHeader !== '' ? { cursor: 'pointer' } : {}
            const onClickHeader = this.props.onClickHeader || (() => '')
            return (
                <th 
                    key={Math.random()} 
                    style={col_style} 
                    // className="hover_parent_st__cust"
                    onClick={ (e) => { 
                        let sort_column = col['name']
                        let sort_asc = !this.props.sort_asc
                        onClickHeader(sort_column, sort_asc) 
                    }}
                    >
                    <If test={ this.props.sort_column === col['name'] && this.props.sort_asc}>
                        <i className="fa fa-sort-down" ></i>&nbsp;
                    </If>
                    <If test={ this.props.sort_column === col['name'] && !this.props.sort_asc}>
                        <i className="fa fa-sort-up" ></i>&nbsp;
                    </If>
                    <If test={ this.props.onClickHeader && this.props.sort_column !== col['name'] }>
                        <i className="fa fa-unsorted" ></i>&nbsp;
                        {/*<i className="fa fa-sort-amount-asc show_on_hover_st__cust" ></i>&nbsp;*/}
                    </If>
                    {col.title || ''}
                </th> 
            )
        })
    }

    cols_render(columns, row) {

        return columns.map( c => {
            return (
                <td key={Math.random()}>{ 
                    c['value'] ? c['value'](row) : row[ c['name'] ]
                }</td>
            )
        })
    }

    rows_render() {
        const data = this.props.data || []
        const columns = this.props.columns || []
        const row_key = this.props.row_key || Math.random()
        return data.map( row => {
            return (
                <tr key={ row_key(row) }>{ this.cols_render(columns, row) }</tr>
            )
        })
    }

    render() {
      return (
        <Box showTools={true} title={this.props.title}>
            <div className="table-responsive">
              <table className="table no-margin">
                <thead>
                  <tr>
                      { this.headers_render() }
                  </tr>
                </thead>
                <tbody>
                    { this.rows_render() }
                </tbody>
              </table>
            </div>
        </Box>
      )
    }
}
