import React from 'react'
import { If } from '../helper'

export default props => (
    <div className={`box box-${props.type || 'default'}`}>
        <If test={props.title}>
            <div className="box-header with-border">
                <h3 className="box-title">{ props.title }</h3>

                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                    </div>

            </div>
        </If>
        <div className="box-body">
            { props.children }
        </div>
    </div>
)