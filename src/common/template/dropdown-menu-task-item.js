import React from 'react'
import { Link } from 'react-router-dom'


/*  Task item  */
export default props => (
    <li>
        {/*  Inner menu: contains the tasks  */}
        <ul className="menu">

            <li>
                <Link to={ props.route || '/' }>
                    {/*  Task title and progress text  */}
                    <h3>
                        {props.message || ''}
                        <small className="pull-right">{props.percent || '0'}%</small>
                    </h3>
                    {/*  The progress bar  */}
                    <div className="progress xs">
                        {/*  Change the css width attribute to simulate progress  */}
                        <div className="progress-bar progress-bar-aqua" style={{ width: `${props.percent || '0'}%` }} role="progressbar"
                            aria-valuenow={props.percent || 0} aria-valuemin="0" aria-valuemax="100">
                        <span className="sr-only">{`${props.percent || '0'}% Completo`}</span>
                        </div>
                    </div>
                </Link>
            </li>

        {/*  end task item  */}
        </ul>
    </li>


)
