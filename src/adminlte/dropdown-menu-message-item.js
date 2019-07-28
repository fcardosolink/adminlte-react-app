import React from 'react'

export default props => (
    <li>
        {/*  inner menu: contains the messages  */}
        <ul className="menu">
        <li>{/*  start message  */}
            <a href="#">
            <div className="pull-left">
                {/*  User Image  */}
                <img  src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            {/*  Message title and timestamp  */}
            <h4>
                {props.subject || 'Mensagem'}
                <small><i className="fa fa-clock-o"></i> {props.time || "0"} mins</small>
            </h4>
            {/*  The message  */}
            <p>{props.message || ''}</p>
            </a>
        </li>
        {/*  end message  */}
        </ul>
        {/*  /.menu  */}
    </li>
)
