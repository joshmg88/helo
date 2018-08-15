import React, { Component } from 'react';
import axios from 'axios'

class Auth extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(val, state) {
        this.setState({
            [state]: val
        });
    }

    handleClick = () => {
        const { username, password } = this.state
        axios.post('/api/auth/register', { username, password })
            .then(window.location.assign('/#/dashboard'))
    }

    render() {
        return (
            <div>

                <div>
                    <input placeholder='username' onChange={(e) => this.handleInput(e.target.value, "username")} />
                    <input placeholder='password' onChange={(e) => this.handleInput(e.target.value, "password")} />
                    <button>Login</button>
                    <button onClick={this.handleClick}>Register</button>
                </div>
            </div>
        );
    }
}

export default Auth;