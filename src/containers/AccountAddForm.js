import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createAccount} from "../actions/AccountActions";

class AccountAddForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.getUsername.value;
        const password =  this.getPassword.value;
        const data = {
            username,
            password,
            editing: false
        };
        this.props.createAccount(data);
        this.getUsername.value = '';
        this.getPassword.value = '';
    };
    render() {
        return (
            <div>
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input)=>this.getUsername = input}
                           placeholder="Enter username"/>
                    <br /><br />
                    <input required type="text" ref={(input)=>this.getPassword = input}
                           placeholder="Enter Password" />
                    <br /><br />
                    <button> Submit </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accountsReducers.accounts
    }
}

export default connect(mapStateToProps, {createAccount})(AccountAddForm);
