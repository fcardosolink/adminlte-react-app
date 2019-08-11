import React from 'react'

export const If = props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}

export const Anchor = props => (
    <a {...props}>{ props.children }</a>
)
