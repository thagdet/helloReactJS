import React, { Component } from 'react';

import { connect } from 'react-redux';
import Account from "./Account";
import EditAccount from "./EditAccount";
import {getAllAccount} from "../actions/AccountActions";

class AllAccount extends Component {

    componentWillMount(){
        this.props.getAllAccount();
    }

    render() {
        return (
            <div>
                <h1>All Accounts</h1>
                {this.props.accounts.map((account) => (
                        <div key={account._id}>
                            {account.editing ? <EditAccount account={account} key={account._id} /> :
                                <Account key = {account._id} account = {account} />}
                        </div>
                    ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accountsReducers.accounts
    }
}

export default connect(mapStateToProps,  { getAllAccount })(AllAccount);
