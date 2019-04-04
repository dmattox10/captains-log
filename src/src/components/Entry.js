import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Entry extends Component {
  
  render() {
    const {isAuthenticated, user} = this.props.auth;
    if (isAuthenticated) {
    return (
        <div className="container-fluid">
            <hr />
            <div className="form-group">
                <form onSubmit={this.props.addEntry}>
                    <input className="form-control" id="entry" placeholder="Entry" />
                    <button type="submit" className="btn btn-primary btn-block"> Add Entry as { user.name } </button>
                </form>
            </div>
            <hr />
        </div>
    )
    }
    else {
        return (
            <div>

            </div>
        )
    }
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Entry))