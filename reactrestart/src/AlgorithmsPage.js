import React, { Component } from 'react'; 

import AddAlgorithm from './AddAlgorithm'; 
import GetAllAlgorithms from './GetAllAlgorithms';
class AlgorithmsPage extends Component{ 

// constructor(props){ 
//     super(props);
// }

render(){ 
  return (
    <div>
      
        
        <AddAlgorithm/> 
        <GetAllAlgorithms/>
    
    </div>
  );
}



} 

export default AlgorithmsPage;