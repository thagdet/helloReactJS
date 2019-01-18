import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login.component";
import {Link, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
import AccountRedux from "./components/accountRedux";
import Edit from "./components/edit.component";
import Game from "./components/game.component";
import './App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/login'} className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/account'} className="nav-link">All Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/game'} className="nav-link">Game</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br/>
                    <h2>Welcome to React CRUD Tutorial</h2> <br/>
                    <Switch>
                        <Route path='/account' component={ AccountRedux } />
                        <Route path='/login' component={ Login } />
                        <Route path='/edit/:id' component={ Edit } />
                        <Route path='/game' component={ Game } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
