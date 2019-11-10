import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import { Button, Form } from 'react-bootstrap';

class CheckListItem extends Component {

    render() {
        return <Aux>
            <tr>
      <td><h6>{this.props.item.subject}</h6></td>
      <td><Form.Check type="checkbox" checked={this.props.item.status}
            onChange={this.props.itemChangeStatus} /></td>
      <td><Button size="sm" variant="danger" onClick={this.props.itemDeleted}>Delete</Button></td>
    </tr>
        </Aux>
    }
}

export default CheckListItem;
