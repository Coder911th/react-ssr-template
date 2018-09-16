import React from 'react';
import './Link.css'
import {goTo} from 'Helpers/ClientRouting'

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
            <a className="link" onClick={this.clickHandler}>{this.props.children}</a>
        );
    }
}

export default Link;