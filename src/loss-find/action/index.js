import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import Router from "../router/index";

const userReducer = (state, action) => {
    if (!state) {
        return [];
    }
    switch (action.type) {
        case 'CHANGE': 
            return action.newdata;
        case 'SEARCH':
            return action.searchDate;
        default:
            return state;
    }
}
const store = createStore(userReducer)
export default class findRouter extends Component { 
  render() {
    return (
      <div>
            <Provider store={store}>
                <Router />
            </Provider > 
      </div>
    )
  }
}
