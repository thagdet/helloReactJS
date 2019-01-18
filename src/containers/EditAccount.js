import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editAccountById} from '../actions/AccountActions';

class EditAccount extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const username = this.username.value;
        const password = this.password.value;
        const data = {
            username,
            password
        };
        this.props.editAccountById(this.props.account._id, data);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.username = input}
                           defaultValue={this.props.account.username} placeholder="Enter Username" /><br /><br />
                    <input required type="text" ref={(input) => this.password = input}
                              defaultValue={this.props.account.password} placeholder="Enter Password" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect(null , {editAccountById})(EditAccount);
