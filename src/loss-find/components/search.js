import React, { Component } from 'react'
import { SearchBar } from "antd-mobile";

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
    }
    handleSubmit() {
        this.props.onHandleSubmit(this.state.value)
    }
    onChange = (value) => {
        this.setState({ value });
    };
    render() {
        return (
            <div>
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={this.handleSubmit.bind(this)}
                    onChange={this.onChange}
                    onCancel = {() => console.log('cancel')}
                />
            </div>
        )
    }
}
