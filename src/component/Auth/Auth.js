import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer'

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
            .then((user) => {
                const { username, id, profile_pic } = user.data[0]
                console.log(user)
                this.props.getUser(id, username, profile_pic)
                window.location.assign('/#/dashboard')
            })
    }

    handleLogin = () => {
        const { username, password } = this.state

        axios.post('/api/auth/login', { username, password })
            .then((user) => {
                console.log(user)
                const { username, id, profile_pic } = user.data[0]
                this.props.getUser(id, username, profile_pic)
                window.location.assign('/#/dashboard')
            }).catch(console.error)
    }

    render() {
        return (
            <div>

                <div>
                    <input placeholder='username' onChange={(e) => this.handleInput(e.target.value, "username")} />
                    <input placeholder='password' onChange={(e) => this.handleInput(e.target.value, "password")} />
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleClick}>Register</button>
                </div>
            </div>
        );
    }
}



export default connect(null, { getUser })(Auth);