import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    headers = {
        'Access-Control-Allow-Headers' : '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    };


    componentWillMount(){
        axios.get('http://192.168.0.104:1235/user', {headers: this.headers})
            .then(response => {
                this.setState({ business: response.data.data });
                // console.log( this.state.business );
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.business.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Account List</h3>
                <table className="table table-hover" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Password</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}
