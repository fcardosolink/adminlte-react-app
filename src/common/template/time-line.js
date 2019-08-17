import React from 'react'

export const TimeLineLabel = props => (
    <li className="time-label">
        <span className={props.className}>
            { props.title }
        </span>
    </li>
)


export const TimeLineHeader = props => (
    <h3 className={`timeline-header ${ props.noBorder ? 'no-border' : ''}`}>
        { props.children }
    </h3>
)

export const TimeLineBody = props => (
    <div className="timeline-body">
        { props.children }
    </div>
)

export const TimeLineFooter = props => (
    <div className="timeline-footer">
        { props.children }
    </div>
)



export const TimeLineItem = props => (
    <li>
        <i className={ props.icon || 'fa fa-clock-o bg-aqua' }></i>
        <div className="timeline-item">
            <span className="time"><i className="fa fa-clock-o"></i>{` ${props.time || ''} `}</span>
            { props.children }
        </div>
    </li>
)


export const TimeLine = props => (
        <div className="col-md-12">
          <ul className="timeline">
            { props.children }

            <li>
              <i className="fa fa-clock-o bg-gray"></i>
            </li>
          </ul>
        </div>

)
