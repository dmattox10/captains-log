import React, { Component } from 'react'
class List extends Component {
  render() {
    return (
        <form onSubmit={this.props.addEntry}>
        <input placeholder="Entry" />
        <button type="submit"> Add Entry </button>
        </form>
    )
  }
}

export default List