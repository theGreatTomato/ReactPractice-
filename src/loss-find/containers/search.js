import React, { Component } from 'react'
import OldSearch from "../components/search";
import { connect } from 'react-redux'

class Search extends Component {
  constructor() {
      super()
      this.state = {
          firstSearch :true
      }
  }
  submit(value) {
      if(value && this.state.firstSearch) {  
          let stateArr = this.props.stateArr;
          let searchArr = [];
          stateArr.forEach((obj ,i) => {
                if(obj.name.match(value) || obj.text.match(value)){
                    searchArr.push(obj);
                }
          })
        this.props.onSearchState(searchArr)
        this.setState({firstSearch: !this.state.firstSearch})
      }
      else if(value && !this.state.firstSearch) {
          //第二次没办法查询
      }
  }
  render() {
    return (
      <div>
            <OldSearch onHandleSubmit = {this.submit.bind(this)}/>
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
        onSearchState: (searchDate) => {
            dispatch({ type: 'SEARCH', searchDate: searchDate })
        }
    }
}
Search = connect(mapStateToProps, mapDispatchToProps)(Search)
export default Search