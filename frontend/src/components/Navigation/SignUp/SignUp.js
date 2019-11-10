import React, { Component } from 'react';
import axios from "../../../axios-checklist";
import {Redirect} from "react-router";

class SignUp extends Component {
    state = {
        user:'',
        password:'',
        redirect: false
    }

    sendCredentialsHandler = (event) => {
        event.preventDefault();
        axios.post('/users/', { username: this.state.user, password: this.state.password}, {headers: {'Content-Type': 'application/json'}})
        .then(({data}) => {
            localStorage.setItem('token', data.token);
            this.setState({ redirect: true });
            this.props.updateIsLogged(true);
        }).catch(err => {
            console.log('Login error', err.response)
        });
    }

    changeState = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
         const { redirect } = this.state;

         if (redirect) {
           return <Redirect to='/'/>;
         }


        return (
            <div>
                <h4>Sign up</h4>
                <form onSubmit={this.sendCredentialsHandler}>
                    <label>
                        User:
                        <input type="text"
                               name="user"
                               value={this.state.user}
                               onChange={this.changeState}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.changeState}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <a href="/log-in">Log in</a>
            </div>
        );
    }
}

export default SignUp;