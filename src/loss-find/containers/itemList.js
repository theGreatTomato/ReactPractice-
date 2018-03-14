import React, { Component } from 'react'
import Item from "../components/item";
import { connect } from 'react-redux'

class ItemList extends Component {
    render() {
        return (
            <div>
                {this.props.stateArr.map((val ,i) => <Item key ={val.id} val ={val} />)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stateArr: state
    }
}
ItemList = connect(mapStateToProps)(ItemList)
export default ItemList;