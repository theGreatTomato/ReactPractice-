import React, { Component } from 'react'
import { SegmentedControl} from 'antd-mobile';

export default class Nav extends Component {
    handleChange(){
        this.props.onHandleChange()
    }
    render() {
        return (
            <div>
                <SegmentedControl values={['丢失物品', '捡到物品']} onChange={this.handleChange.bind(this)} selectedIndex = {this.props.selectedIndex}/>
            </div>
        ) 
    }
}
