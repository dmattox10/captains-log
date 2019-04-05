import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Moment from 'moment'
import { enter } from '../actions/enter'

let stardate = getStardate()
let placeholder = "Captain's Log, Stardate " + stardate

class Entry extends Component {
    
    constructor() {
        super();
        this.state = {
            entry: '',
            user: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const entry = {
            entry: this.state.entry,
            user: this.state.user
        }
        this.props.enter(entry);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.setState({
                user: this.props.auth.user
            })
        }
    }

  render() {
    const {isAuthenticated, user} = this.props.auth
    if (isAuthenticated) {
    const { errors } = this.state;
    return (
        <div className="container">
            <hr />
            <div className="form-group">
                <form onSubmit={ this.handleSubmit }>
                    <textarea className="form-control"
                     id="entry" 
                     placeholder={ placeholder }
                     name="entry"
                     onChange={ this.handleInputChange }
                     value={ this.state.entry }
                    { ...errors.name && (<div className="invalid-feedback">{errors.name}</div>) }
                    />
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '20px'}}> Add Entry as { user.name } </button>
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
    auth: state.auth,
    user: state.auth.user
})

function daysBetween( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;
  
    // Convert both dates to milliseconds
    var date1_ms = Moment.utc(date1)
    var date2_ms = Moment.utc(date2)
  
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    return Math.round(difference_ms/one_day); 
  }

function getStardate() {
    let epoch, today, stardate

    epoch  = new Date(1970, 0, 1)
    today = new Date()
    stardate = Math.round(daysBetween(epoch, today)* 39.7766856) /100

    return stardate
}

export default connect(mapStateToProps,{ enter })(withRouter(Entry))