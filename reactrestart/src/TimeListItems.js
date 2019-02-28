import React, { Component } from 'react'; 

class TimeListItems extends Component{ 
 
  constructor(props){ 
    super(props);
  } 

render(){ 
  return (
    <div>      
        <div> 
          <li>  
            <a>{this.props.timeID} {this.props.time} {this.props.algID}</a>
          </li>
        </div> 
    </div>
  );
}



} 

export default TimeListItems;