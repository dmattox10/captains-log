import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'
import Entry from './js/components/Entry'
import SignUp from './js/components/SignUp'
import LogIn from './js/components/LogIn'

import './index.css'

let stardate = getStardate()
let staryear = Math.trunc(getStardate())
let loggedIn = true
let maxSignups = true
let nav

if (!maxSignups) {
    nav = <SignUp />
    }
else if (maxSignups && !loggedIn) {
    nav = <LogIn />
    }
else if (maxSignups && loggedIn) {
    nav = <Entry />
}
class Years extends Component {
    render() {
        return (
            <h1>Years List will mount here to tap on</h1>
        )
    }
}

class List extends Component {
    render() {
        return (
            <h1>List of previous entries by date will mount here</h1>
        )
    }
}
class App extends Component {

    
    constructor() {
        super()
        this.state = {
          entries: [],
          currentEntry: {text:'', key:''},
        }
      }
      handleInput = e => {
        console.log('Hello Input')
      }
      addEntry = () => {
        console.log('Hello Add Item')
      }
    render() {
        return (
            <div className="App">
                <h1>Captain's Log, Stardate { stardate }</h1>
                { nav }
                <Years />
                
                <List />
            </div>
        )
    }
    
}
console.log(staryear)
ReactDOM.render(<App />, document.getElementById('components'))

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