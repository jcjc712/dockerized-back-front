import React, { Component } from 'react';
import NavigationItem from '../NavigationItems/NavigationItem';


class Toolbar extends Component {

    render() {
        let items = [
            {
                name: 'Log in',
                path: '/log-in'
            },
            {
                name: 'Sign up',
                path:'/sign-up'
            }
        ];
        let authNavLinks;
        if(!this.props.isLogged){
             authNavLinks = items.map(function(item) {
                return <NavigationItem key={item.name} name={item.name} path={item.path}/>;
            }, this);
        }
        else {
            authNavLinks = <NavigationItem name="Log out" path="/log-out"/>;
        }
    return <div>
        <div>Menu</div>
        <nav>
            <li><a href="/">Home</a></li>
            <ul>
            {authNavLinks}
            </ul>
        </nav>
    </div>
    }
}


export default Toolbar;
