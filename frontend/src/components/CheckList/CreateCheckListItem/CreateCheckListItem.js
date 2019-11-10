import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
class CreateCheckListItem extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Form onSubmit={(e) => this.props.itemAdded(e)}>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Col sm={10}>
                                <Form.Control
                                  placeholder="Subject"
                                  type="text"
                                  value={this.props.createItem.subject}
                                  onChange={(e) => this.props.changeState(e)}
                                />
                            </Col>
                            <Col sm={2}>
                                <Button variant="primary" type="submit">Add</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        );
  }
}

export default CreateCheckListItem;
