import React, { Component } from 'react';

class CreateCheckListItem extends Component {
    render() {
        return (
          <form onSubmit={(e) => this.props.itemAdded(e, this.state)}>
             <label>
          Subject:
          <input type="text" value={this.props.createItem.subject} onChange={(e) => this.props.changeState(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        );
  }
}

export default CreateCheckListItem;
