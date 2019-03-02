import React, { Component } from 'react'; 
import AddTimeLog from './AddTimeLog.js'; 
import GetAllTimes from './GetAllTimes.js';
class TimeLogPage extends Component{ 

constructor(props){ 
    super(props);
}

render(){ 
  return (
    <div>
      
        
        <AddTimeLog/> 
        <GetAllTimes/>
    
    </div>
  );
}



} 

export default TimeLogPage;