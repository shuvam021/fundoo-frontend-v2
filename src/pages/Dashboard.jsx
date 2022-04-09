import React, {Component} from "react";
import logo from "../assets/logo.png";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </React.Fragment>
        );
    }
}
