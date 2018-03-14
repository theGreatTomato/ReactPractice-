import React, { Component } from 'react'
import Item from "../components/item";
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom'

class Items extends Component {
    render() {
        return (
                <div>
                    <Item />
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stateArr: state
    }
}
Items = connect(mapStateToProps)(Items)
export default Items