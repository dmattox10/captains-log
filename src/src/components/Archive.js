import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Section from './Section'

class Archive extends Component {
    
    constructor() {
        super();
        this.state = {
            entries: [],
        }
    }

    componentDidMount() {
        axios.get('/api/entries/list')
      .then(res => 
        res.data.entries_list.map(entry => ({
            entry: `${entry.entry}`,
            stardate: `${entry.stardate}`,
            date: `${entry.date}`
        }))
      )
      .then( entries => {
          this.setState({
              entries
          })
      })
    }

    render() {
    const { entries } = this.state;
    return (
        <div className="container-fluid">
            <div className="main">
                {entries.map((entry, id) =><div> <Section key={id} entry={entry.entry} title={`Captain's Log, Stardate ${entry.stardate}:`}></Section> <br/ > </div>)}
            </div>
        </div>
    )
  }
}

export default withRouter(Archive)

