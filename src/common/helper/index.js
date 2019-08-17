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

export const Video = props => (
    <div className="embed-responsive embed-responsive-16by9">
        <iframe title="video" className="embed-responsive-item" src={props.src ||'#'}
            frameborder="0" allowfullscreen></iframe>
    </div>
)