import React, { Component } from 'react';
import {Redirect} from "react-router";

class LogOut extends Component {
    componentDidMount() {
        localStorage.removeItem('token');
        this.props.updateIsLogged(false);
    }
    render() {
        return <Redirect to='/log-in'/>;
    }
}

export default LogOut;
