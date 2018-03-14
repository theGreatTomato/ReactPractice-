import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from "../page/home";
import Child from '../page/child'

export default class Routers extends Component {
  render() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path = '/' exact component = {App}/>
                    <Route path = '/:id' component = {Child}/>
                    <Route path = '/404' component = {Nofind} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        </div>
    )
  }
}

class Nofind extends Component{
    render() {
        return (
            <div>
                <h1>没找到资源 404</h1>
            </div>
        )
    }
}