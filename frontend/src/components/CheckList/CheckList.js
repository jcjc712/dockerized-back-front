import React, { Component } from 'react';
import CheckListItem from "./CheckListItem/CheckListItem";
import CreateCheckListItem from "./CreateCheckListItem/CreateCheckListItem";
import axios from "../../axios-checklist";

class CheckList extends Component {
    state = {
        items: [],
        createItem: {
            subject:'',
            status: false,
        }
    }
    config = {}

    componentDidMount() {
        axios.get('/api/check_list/',{headers: {Authorization: `JWT ${localStorage.getItem('token')}`}})
        .then(response => {
            this.setState({items:response.data})
           })
        .catch(error => {
          console.log("List request error", error)
        })

        this.config = {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        }
    }

    getIndexInItems = (items, id) => {
        return items.map(function(item) { return item.id; })
                           .indexOf(id);
    }

    removeItemHandler = (id) => {
        axios.delete('/api/check_list/'+id,this.config)
        .then(resp => {
            const updatedItems = [...this.state.items]
            let index = this.getIndexInItems(updatedItems, id);
            if (index > -1) {
              updatedItems.splice(index, 1);
            }
            this.setState({items:updatedItems})
        })
        .catch(error => {
          console.log("Delete item error", error)
        })
    }

    addItemHandler = (event, item) => {
        axios.post('/api/check_list/', item, this.config)
        .then(resp => {
            const updatedItems = [...this.state.items]
            updatedItems.push(resp.data)
            this.setState({createItem:{subject: ''}})
        })
        .catch(error => {
          console.log("Post error", error)
        })
    }

    changeStatusHandler = (id) => {
        const updatedItems = [...this.state.items]
        let index = this.getIndexInItems(updatedItems, id);
        updatedItems[index].status = !updatedItems[index].status
        axios.patch('/api/check_list/'+id+'/', { status: updatedItems[index].status },this.config)
        .then(resp => {
            this.setState({items:updatedItems})
        })
        .catch(error => {
          console.log("Update error", error)
        })
    }

    changeState = (event) => {
        this.setState({createItem:{subject: event.target.value}})
    }

    render() {
        const allItems = this.state.items.map(function(item) {
            return <CheckListItem
                key={item.id}
                item={item}
                itemDeleted={()=>this.removeItemHandler(item.id)}
                itemChangeStatus={()=>this.changeStatusHandler(item.id)}
            />;
        }, this);
        return (
            <div>
                <CreateCheckListItem
                    changeState={this.changeState}
                    createItem={this.state.createItem}
                    itemAdded={this.addItemHandler} />
                <br/>
                {allItems}
            </div>
        );
    }
}

export default CheckList;
