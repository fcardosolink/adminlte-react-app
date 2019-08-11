import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

    <div className="col-lg-3 col-xs-6">
        <div className={ `small-box ${props.add_class}` }>
            <div className="inner">
            <h3>{ props.value }
              { props.sup ? <sup style={ {fontSize: "20px"} }>{props.sup}</sup> : '' }
            </h3>

            <p>{ props.title }</p>
            </div>
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <Link to = "/" className="small-box-footer">Mais informações <i className="fa fa-arrow-circle-right"></i></Link>
        </div>
    </div>

)



