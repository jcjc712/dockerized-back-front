import React, { Component } from 'react';
import CheckListItem from "./CheckListItem/CheckListItem";
import CreateCheckListItem from "./CreateCheckListItem/CreateCheckListItem";
import axios from "../../axios-checklist";
import {Redirect} from "react-router";

class CheckList extends Component {
    state = {
        items: [],
        createItem: {
            subject:'',
            status: false,
        },
        redirect: false
    }
    config = {}

    componentDidMount() {
        if(!localStorage.getItem('token')){
            this.setState({ redirect: true });
        }

        axios.get('/api/check_list/',{headers: {Authorization: `JWT ${localStorage.getItem('token')}`}})
        .then(response => {
            this.setState({items:response.data})
           })
        .catch(error => {
          console.log("List request error", error);
          this.setState({ redirect: true });
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
            this.setState({ redirect: true });
        })
    }

    addItemHandler = (event) => {
        event.preventDefault();
        axios.post('/api/check_list/', this.state.createItem, this.config)
        .then(resp => {
            const updatedItems = [...this.state.items]
            updatedItems.push(resp.data)
            this.setState({createItem:{subject: ''}})
        })
        .catch(error => {
          console.log("Post error", error);
          this.setState({ redirect: true });
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
          console.log("Update error", error);
          this.setState({ redirect: true });
        })
    }

    changeState = (event) => {
        this.setState({createItem:{subject: event.target.value}})
    }

    render() {
        const { redirect } = this.state;

         if (redirect) {
           return <Redirect to='/log-in'/>;
         }

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
