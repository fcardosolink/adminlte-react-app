import React from 'react'
import { If, Anchor } from '../helper'

export default props => (

    <div className={`info-box ${props.add_class}`}>
      <span className="info-box-icon"><i className={ props.icon || 'ion ion-ios-pricetag-outline' }></i></span>

      <div className="info-box-content">

        <span className="info-box-text">
            { props.title || 'Sem título' }
            <If test={props.action}>
                <Anchor className="pull-right" onClick={ (e) => props.action(e) }><i className="fa fa-arrow-circle-right" style={ {fontSize: "20px"} }></i></Anchor>
            </If>
        </span>

        <span className="info-box-number">{ props.value || '0' }</span>

        <div className="progress">
          <div className="progress-bar" style={{ width: `${ props.percent }%` }}></div>
        </div>
        <span className="progress-description">
              { props.description || '' }
        </span>
      </div>
    </div>


)
