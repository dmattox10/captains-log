import React, { Component } from 'react'
import ReactDOM from 'react-dom'
{/*import '../css/index.css'*/}

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Include Components here!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('components'))
