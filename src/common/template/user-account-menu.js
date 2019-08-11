import React from 'react'
import { Link } from 'react-router-dom'

/*  User Account Menu  */
export default props => (
    
    <li className="dropdown user user-menu">
        {/*  Menu Toggle Button  */}
        <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
            {/*  The user image in the navbar */}
            <img  src="dist/img/user2-160x160.jpg" className="user-image" alt="Usuário Foto" />
            {/*  hidden-xs hides the username on small devices so only the image appears.  */}
            <span className="hidden-xs">{ props.user_name || 'Anônimo' }</span>
        </Link>
        <ul className="dropdown-menu">
        {/*  The user image in the menu  */}
        <li className="user-header">
            <img  src="dist/img/user2-160x160.jpg" className="img-circle" alt="Foto do usuários" />

            <p>
            { props.user_name || 'Anônimo' } - { props.user_role || 'observador'}
            <small>Login em { props.data_member || '01/01/2019 00:00'}</small>
            </p>
        </li>
        {/*  Menu Body  
        <li className="user-body">
            <div className="row">
            <div className="col-xs-4 text-center">
                <Link href="#">Followers</Link>
            </div>
            <div className="col-xs-4 text-center">
                <Link >Sales</Link>
            </div>
            <div className="col-xs-4 text-center">
                <Link >Friends</Link>
            </div>
            </div>
        </li>
        */}


        {/*  Menu Footer */}
        <li className="user-footer">
            <div className="pull-left">
            <Link to="/" className="btn btn-default btn-flat">Pefil</Link>
            </div>
            <div className="pull-right">
            <Link to="/" className="btn btn-default btn-flat">Sair</Link>
            </div>
        </li>
        </ul>
    </li>
)

