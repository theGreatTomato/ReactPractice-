import React, { Component } from 'react'
import ItemList from "../../containers/itemList";
import Nav from "../../containers/nav";
import Home from "../../components/home";
import Search from "../../containers/search";

export default class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <Search />
                <div style={{ padding: '0 0.22rem' }}>
                    <Nav />
                    <ItemList />
                </div>
            </div>
        )
    }
}