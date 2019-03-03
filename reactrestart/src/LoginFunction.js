import React, { Component } from 'react'; 
import DeleteTimeLog from './DeleteTimeLog';
class LoginFunction extends Component{ 
 
    constructor(props){ 
        super(props); 
        this.state = { 
            enteredusername:"", 
            enteredpassword:"",
             
            accept:false, 
            loggedinstatus:false
          
        }
      } 
  

render(){ 
  return (
    <div>      
        {/* <div> 
          <li key={`aMyKey${this.props.timeID}`}>  
            <a>{this.props.timeID} {this.props.time} {this.props.algFID} <DeleteTimeLog  timeID={this.props.timeID}/></a>
          </li>
        </div>  */}
    </div>
  );
}



} 

export default LoginFunction;