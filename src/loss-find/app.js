import React, { Component } from 'react'
import Itemer from "./containers/item";
import Nav from "./components/nav";
import Home from "./components/home";
import Search from "./components/search";

export default class App extends Component {
  render() {
    return (
      <div>
          <Home />
          <Search />
          <div style= {{padding:'0 0.22rem'}}>
            <Nav />
                {Array.from(new Array(9)).map((val,i) => <Itemer  key = {i}/>)}
          </div>
      </div>
    )   
  }
}
