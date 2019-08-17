import React from 'react'

export default props => (
    <div className={`callout callout-${props.type || 'info'}`}>
        { props.children }
    </div>
)
