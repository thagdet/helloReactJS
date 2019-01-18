import * as types from '../constants/AccountActionTypes';

const initialState = {accounts: []};
export default function accounts(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.concat([action.data])
            }
        case types.DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter((account) => account._id !== action._id)
            };

        case types.EDIT_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.map((account) => account._id === action._id ? { ...account, editing:!account.editing } : account)
            };

        case 'UPDATE':
            return {
                ...state,
                accounts: state.accounts.map((account)=>
                account._id === action._id ? {
                        ...account,
                        username:action.data.username,
                        password:action.data.password,
                        editing: !account.editing

                } : account)
            };

        case types.GET_ALL_ACCOUNT:
            return {
                ...state,
                accounts: action.account
            };
        default:
            return state;
    }
}
