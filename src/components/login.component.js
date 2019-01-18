import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            UserName: '',
            Password: '',
        }
    }
    onChangeUserName(e) {
        this.setState({
            UserName: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            UserName: this.state.UserName,
            Password: this.state.Password,
        };
        axios.post('http://192.168.0.104:1234/account/checkLogin', obj)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
        });

        this.setState({
            UserName: '',
            Password: '',
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.UserName}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                               className="form-control"
                               value={this.state.Password}
                               onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
