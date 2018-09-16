import React from 'react';
import TextBox from 'Components/TextBox'
import Link from 'Components/Link'

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.authHandler = this.authHandler.bind(this);
    }
    
    authHandler() {
        console.log(this.state);
    }

    inputHandler(name, value) {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <Link to="test">На test</Link>
                <div>Аутентификация</div>
                <div style={{padding: '5px'}}><TextBox value={this.state.login} onInput={this.inputHandler.bind(this, 'login')}/></div>
                <div style={{padding: '5px'}}><TextBox value={this.state.password} onInput={this.inputHandler.bind(this, 'password')}/></div>
                <button onClick={this.authHandler}>Войти</button>
            </>
        );
    }
}

export default Auth;