import React from 'react'
import { If } from '../helper'

export default props => (
    <div className={`box box-${props.type || 'default'}`}>
        <If test={props.title}>
            <div className="box-header with-border">
                <h3 className="box-title">{ props.title }</h3>
            </div>
        </If>
        <div className="box-body">
            { props.children }
        </div>
    </div>
)