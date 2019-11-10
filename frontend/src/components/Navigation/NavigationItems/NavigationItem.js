import React, { Component } from 'react';

class NavigationItem extends Component {

    render() {
        return <li><a href={this.props.path}>{this.props.name}</a></li>
    }
}

export default NavigationItem;
