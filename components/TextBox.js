import React from 'react';
import './TextBox.css'

/**
 * props:
 *  value (String) Значение в текстовом поле
 *  onInput (Function) Обработчик ввода
 */
class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.inputHandler = this.inputHandler.bind(this);
    }
    
    inputHandler(ev) {
        this.props.onInput(ev.target.value)
    }

    render() {
        return (
            <>
                <input className="text-box" type="text" value={this.props.value} onClick={this.inputHandler}/>
            </>
        );
    }
}

export default TextBox;