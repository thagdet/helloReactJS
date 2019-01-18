import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteAccount} from "../actions/AccountActions";

class Account extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.handleClick.bind(this)
    }

    handleClick() {
        deleteAccount(this.props.account._id).then( res => res.status ? this.props.dispatch({type: 'DELETE_ACCOUNT', _id: this.props.account._id}): console.log('fault'))
    }

    render() {
        return (
            <div>
                <h2>{this.props.account.username}</h2>
                <p>{this.props.account.password}</p>
                <button
                    onClick={()=>this.props.dispatch({type:'EDIT_ACCOUNT',_id:this.props.account._id})}>Edit</button>
                <button
                    onClick={this.onClick}>Delete</button>
            </div>
        );
    }
}
export default connect()(Account);
