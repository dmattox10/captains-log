import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import List from './js/components/List'
import Entry from './js/components/Entry'
{/*import '../css/index.css'*/}

class App extends Component {
    constructor() {
        super()
        this.sate = {
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
                <h1>Captain's Log, Stardate [todo]:</h1>
                <h1>Nav</h1>
                <h1>Years</h1>
                <Entry />
                <List addEntry={this.addEntry} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('components'))
