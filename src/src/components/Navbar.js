import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

let guestLinks

class Navbar extends Component {
    
    constructor() {
        super()
        this.state= {
            maxSignups: '',
            numSignups: ''
        }
    }

    componentDidMount() {
        axios.get('/api/users/settings')
      .then(res => {
        this.setState({
            maxSignups: res.data.maxSignups,
            numSignups: res.data.numSignups
        })
        }
      )
      .catch(error => this.setState({ error }))
    }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth
        const {maxSignups, numSignups} = this.state
        const authLinks = (
            <ul className="navbar-nav">
                
                        <Link className="nav-link" to="/archive">Archive</Link>
                {/*}
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt="Log Out" title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
        */}
            </ul>
        )
        if (maxSignups === numSignups) {
            guestLinks = (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Sign In</Link>
                    </li>
                </ul>
            )
        }
        else {
            guestLinks = (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Sign In</Link>
                    </li>
                </ul> 
            )
        }
        return(
            <nav className="navbar navbar-fixed-top navbar-dark bg-dark sticky-nav">
                <Link className="navbar-brand" to="/entry">Captain's Log</Link>
                <div className="d-flex justify-content-end" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));