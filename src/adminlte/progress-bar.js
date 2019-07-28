import React from 'react'

export default props => (

    <div className="progress progress-xxs">
        <div className={`progress-bar progress-bar-${props.type || 'danger'}`} style={{ width: `${props.percent || '100'}%` }}></div>
    </div>

)