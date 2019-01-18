import axios from 'axios'

export function deleteAccount(id) {
    return axios.delete('http://192.168.0.104:1235/user/'+id)
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error)
            })
}

export function editAccountById(id, data) {
    return (dispatch) => {
        axios.put('http://192.168.0.104:1235/user/'+id, data)
            .then(response => {
                response.data.status ? dispatch({type: 'UPDATE', _id: id, data: data}): console.log('fault')
            })
            .catch(function (error) {
                console.log(error)
            })
    };
}

export function getAllAccount() {
    return (dispatch) => {
        axios.get('http://192.168.0.104:1235/user')
            .then(response => {
                let account = response.data.data;
                dispatch({type: 'GET_ALL_ACCOUNT', account})
            })
            .catch(function (error) {
                console.log(error);
            })
    };
}

export function createAccount(data) {
    return (dispatch) => {
        axios.post('http://192.168.0.104:1235/user', data)
            .then(response => {
                response.data.status ? dispatch({type: 'ADD_ACCOUNT', data: response.data.data}) : console.log('fault')
            })
            .catch(function (error) {
                console.log(error);
            })
    };
}
