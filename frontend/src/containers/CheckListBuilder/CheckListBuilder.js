import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import CheckList from "../../components/CheckList/CheckList";

class CheckListBuilder extends Component {
    state = {
        items: [
            {'id':1,'subject':'foo','status':true,},
            {'id':2,'subject':'bar','status':false,},
        ]
    }

    removeItem = (id) => {
        const updatedItems = {
            ...this.state.items
        }

        let removeIndex = updatedItems.map(function(item) { return item.id; })
                       .indexOf(id);

        if (removeIndex > -1) {
          updatedItems.splice(removeIndex, 1);
        }
        this.setState({items:updatedItems})
    }

    render() {
        return <Aux><CheckList items={this.state.items} /></Aux>
    }
}

export default CheckListBuilder;
