import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeGmail = this.onChangeGmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    headers = {
        'Access-Control-Allow-Headers' : '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    };

    componentDidMount() {
        axios.get('http://192.168.0.104:1235/user/'+this.props.match.params.id, {headers: this.headers})
            .then(response => {
                console.log(response);
                this.setState({
                    username: response.data.data.username,
                    password: response.data.data.password
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeGmail(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            username: this.state.username,
            password: this.state.password,
        };
        // console.log(obj);
        axios.put('http://192.168.0.104:1235/user/'+this.props.match.params.id, obj, {headers: this.headers})
            .then(res => console.log(res.data));
        this.props.history.push('/account');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>UserName:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gmail: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangeGmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
