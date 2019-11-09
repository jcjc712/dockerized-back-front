import React, { Component } from 'react';
import CheckListItem from "./CheckListItem/CheckListItem";

class CheckList extends Component {
    state = {
        items: [
            {'id':1,'subject':'foo','status':true,},
            {'id':2,'subject':'bar','status':false,},
        ]
    }

    removeItemHandler = (id) => {
        const updatedItems = [
            ...this.state.items
        ]
        let index = updatedItems.map(function(item) { return item.id; })
                       .indexOf(id);
        if (index > -1) {
          updatedItems.splice(index, 1);
        }
        this.setState({items:updatedItems})
    }

    changeStatusHandler = (id) => {
        const updatedItems = [
            ...this.state.items
        ]
        let index = updatedItems.map(function(item) { return item.id; })
                       .indexOf(id);

        if(updatedItems[index].status){
            updatedItems[index].status = false
        }
        else{
            updatedItems[index].status = true
        }
        this.setState({items:updatedItems})
    }

    render() {
        const allItems = this.state.items.map(function(item) {
            return <CheckListItem
                item={item}
                itemDeleted={()=>this.removeItemHandler(item.id)}
                itemChangeStatus={()=>this.changeStatusHandler(item.id)}
            />;
        }, this);
        return (
            <div>
                {allItems}
            </div>
        );
    }
}

export default CheckList;
