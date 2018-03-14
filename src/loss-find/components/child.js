import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
    }
  render() {
      const { match } = this.props
    return (
      <div>
            {match.params.id}
      </div>
    )
  }
}
