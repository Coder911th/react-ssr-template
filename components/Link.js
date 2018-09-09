import React from 'react';
// import {goTo} from '../helpers/ClientRouting'

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        // goTo(this.props.to)
    }
    
    render() {
        return (
            <span onClick={this.clickHandler}>{this.props.children}</span>
        );
    }
}

export default Link;