import React, { Component } from 'react'
import OldNav from "../components/nav";
import { connect } from 'react-redux'
//import getJson from "../ajax/json";
import axios from 'axios'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
           LossOrFind:'loss'
        }
    }
    getData(pickOrLoss) {
        axios.get('/find.php')
            .then((res) => {
                var newdata = [];
                res.data.forEach((obj, i) => {
                    if (obj.pickorloss === pickOrLoss) {
                        newdata.push(obj);
                    }
                })
                this.props.onChangeState(newdata);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getData.call(this,'loss')
    }
    
    handleChange() {
        const newStr = this.state.LossOrFind === 'loss' ? 'pick' : 'loss';
        this.setState({LossOrFind:newStr})
        this.getData.call(this, newStr)
    }
    render() {
        return (
            <div>
                <OldNav onHandleChange={this.handleChange.bind(this)} selectedIndex={this.state.LossOrFind === 'loss' ? 0 : 1} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stateArr: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeState: (newdata) => {
            dispatch({ type: 'CHANGE', newdata: newdata })
        }
    }
}
Nav = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default Nav;