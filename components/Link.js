import React from 'react';
import {goTo} from '../helpers/ClientRouting'

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        goTo(this.props.to)
    }
    
    render() {
        return (
            <a onClick={this.clickHandler}>{this.props.children}</a>
        );
    }
}

export default Link;