import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../reducers/rootReducers';
import AllAccount from "../containers/AllAccount";
import AccountAddForm from "../containers/AccountAddForm";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducers, applyMiddleware(thunk, logger));
class AccountRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <AccountAddForm/>
                <AllAccount />
            </Provider>
        )
    }
}

export default AccountRedux;
