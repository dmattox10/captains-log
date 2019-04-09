import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from "mdbreact";
import axios from 'axios'

class Archive extends Component {
    
    constructor() {
        super();
        this.state = {
            entries: [],
            collapseID: "collapse3"
        }
    }

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))

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
    const { entries, collapseID } = this.state;
    return (
        <MDBContainer>
        <MDBContainer className="md-accordion mt-5">
        {entries.map(entry =>
          <MDBCard className="mt-3" onClick={this.toggleCollapse("collapse1")}>
              <span>Captains' Log, Stardate {entry.stardate} :&nbsp;
              <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } /></span>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
              {entry.entry}
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        )}
          

          
        </MDBContainer>
      </MDBContainer>
    )
  }
}

export default withRouter(Archive)

