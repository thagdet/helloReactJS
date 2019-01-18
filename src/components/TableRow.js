import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    headers = {
        'Access-Control-Allow-Headers' : '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    };

    delete() {
        axios.delete('http://192.168.0.104:1235/user/'+this.props.obj._id, {headers: this.headers})
            .then(function () {
                this.props.history.push('/index');
                console.log('Deleted')
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
