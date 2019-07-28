import React from 'react'

export default props => (

    <div className="form-group">
        <label className="control-sidebar-subheading">
        {props.title || ''}
        <input type="checkbox" className="pull-right" checked={true} onChange={()=>{}}/>
        </label>
        <p> {props.text || ''} </p>
    </div>

)