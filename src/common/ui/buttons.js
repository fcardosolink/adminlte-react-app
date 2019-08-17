import React from 'react'


export const Button = (props) => (
    <button type="button" className={`btn btn-${props.type || 'default'}`} { ...props } >
        { props.children }
    </button>
)

export const ButtonDefault = (props) => (
    <Button type="default" {...props}>
        { props.children }
    </Button>
)

export const ButtonSucess = (props) => (
    <Button type="success" {...props}>
        { props.children }
    </Button>
)

export const ButtonWarning = (props) => (
    <Button type="warning" {...props}>
        { props.children }
    </Button>
)

export const ButtonInfo = (props) => (
    <Button type="info" {...props}>
        { props.children }
    </Button>
)

export const ButtonDanger = (props) => (
    <Button type="danger" {...props}>
        { props.children }
    </Button>
)


