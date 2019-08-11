import React from 'react'

export const Input = props => (
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)