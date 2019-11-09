import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

class CheckListItem extends Component {

    render() {
        return <Aux>
            <div>{this.props.item.id}</div>
            <div>{this.props.item.subject}</div>
            <div>{this.props.item.status}</div>
            <input
            type="checkbox"
            checked={this.props.item.status}
            onChange={this.props.itemChangeStatus}
            />
            <button onClick={this.props.itemDeleted}>Delete</button>
        </Aux>
    }
}

export default CheckListItem;
