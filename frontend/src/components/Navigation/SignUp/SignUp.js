import React, { Component } from 'react';
import axios from "../../../axios-checklist";
import {Redirect} from "react-router";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

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
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card>
                              <Card.Body>
                                <h4>Sign up</h4>
                                <Form onSubmit={this.sendCredentialsHandler}>
                                  <Form.Group controlId="formBasicUserName">
                                    <Form.Label>User name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="user"
                                        placeholder="Enter username"
                                        value={this.state.user}
                                        onChange={this.changeState}
                                    />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.changeState}
                                    />
                                  </Form.Group>
                                  <Button variant="primary" type="submit">
                                    Submit
                                  </Button>
                                </Form>
                                <a href="/log-in">Log in</a>
                              </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SignUp;