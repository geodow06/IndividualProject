import React, { Component } from 'react'; 
import DeleteTimeLog from './DeleteTimeLog';
const prettyMs = require('pretty-ms');
class TimeDisplay extends Component{ 

addString=()=>{ 
    
}
render(){ 
    if(!this.props.time)
    { 
        return( 
            <a>try again</a>
        );
    }
    else{
    return (
    <div>      
        <div> 
          <li key={`aMyKey${this.props.timeID}`}>  
            <a>{prettyMs(parseInt(this.props.time),{secDecimalDigits:4})}</a> 
            {/* <a>{this.props.time}</a> */}
          </li>
        </div> 
    </div>
  ); 
    }
}



} 

export default TimeDisplay;