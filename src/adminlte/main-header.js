import React, {Component} from 'react';
import Logo from './logo'
import HeaderNavbar from './header-navbar'

export default class Header extends Component {

    render() {
        return (
            <header className="main-header">
                <Logo label="Administrativo" mine_label="Adm" />
                <HeaderNavbar />
            </header>
        )
    }

}