import React, { Component } from 'react';
import './App.css';
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class AddTimeLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      algFID: ''
    }
  }



  pushRequest = () => {

    axios.post(`/addTimeLog/${this.state.time}/${this.state.algFID}`);
  }

  setStates = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    console.log('A time was submitted: ' + this.state.time);
    console.log('A alg ID was submitted: ' + this.state.algFID);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <label className="required">* required </label>

          <label>
            <input type="text" name='time' target='one' className="form-control inputArea" onChange={this.setStates} time={this.state.time} id="Time" placeholder="Time *"></input>
            <input type="text" name='algFID' target='two' className="form-control inputArea" onChange={this.setStates} algFID={this.state.algFID} id="AlgID" placeholder="AlgID *"></input>
          </label>

          <input type="submit" value="Submit" onClick={this.pushRequest} />

        </form>
      </div>
    );
  }
}

export default AddTimeLog;