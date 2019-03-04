import React, { Component } from 'react'; 
import GetAnAlgorithm from './GetAnAlgorithm'; 
import DisplayUserAlgTimes from './DisplayUserAlgTimes'; 
import axios from 'axios'; 
import TimeDisplay from './TimeDisplay';
class TrainerDisplay extends Component{ 
 
     constructor(props) {
    super(props);
    this.state = {
      // algID:3, 
      // userID:12,
      times: []

    }
  }
   
    getRequest = () => {
        axios.get(`/getUserAlgTimes/${this.props.userID}/${this.props.algID}`).then(r => { this.setState({ times: r.data }) });
        
      }

render(){ 
    let times = this.state.times.map(t => <TimeDisplay time={t.time} />)
  return (
    <div>      
        <div> {this.props.name} 
          <li key={`aMyKey${this.props.algID}`}>  
            {/* <a> <DisplayUserAlgTimes userID={this.props.userID} name={this.props.name} algID={this.props.algID}/></a> */}
            <a> {times}</a>
          </li> 
          {this.getRequest()}
        </div> 
    </div>
  );
}



} 

export default TrainerDisplay;