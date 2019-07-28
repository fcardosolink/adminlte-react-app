import React from 'react'

/*  User Account Menu  */
export default props => (
    
    <li className="dropdown user user-menu">
        {/*  Menu Toggle Button  */}
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        {/*  The user image in the navbar */}
        <img  src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
        {/*  hidden-xs hides the username on small devices so only the image appears.  */}
        <span className="hidden-xs">{ props.user_name || 'Nome do usuário' }</span>
        </a>
        <ul className="dropdown-menu">
        {/*  The user image in the menu  */}
        <li className="user-header">
            <img  src="dist/img/user2-160x160.jpg" className="img-circle" alt="Foto do usuários" />

            <p>
            { props.user_name || 'Nome do usuário' } - { props.user_role }Papel do usuário
            <small>Membro desde { props.data_member || '????'}</small>
            </p>
        </li>
        {/*  Menu Body  
        <li className="user-body">
            <div className="row">
            <div className="col-xs-4 text-center">
                <a href="#">Followers</a>
            </div>
            <div className="col-xs-4 text-center">
                <a href="#">Sales</a>
            </div>
            <div className="col-xs-4 text-center">
                <a href="#">Friends</a>
            </div>
            </div>
        </li>
        */}


        {/*  Menu Footer */}
        <li className="user-footer">
            <div className="pull-left">
            <a href="#" className="btn btn-default btn-flat">Pefil</a>
            </div>
            <div className="pull-right">
            <a href="#" className="btn btn-default btn-flat">Sair</a>
            </div>
        </li>
        </ul>
    </li>
)

