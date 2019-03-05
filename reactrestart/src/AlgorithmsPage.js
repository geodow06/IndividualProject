import React, { Component } from 'react'; 

import AddAlgorithm from './AddAlgorithm'; 
import GetAllAlgorithms from './GetAllAlgorithms'; 
import GetAnAlgorithm from './GetAnAlgorithm';
import GetUserAlgs from './GetUserAlgs';
class AlgorithmsPage extends Component{ 

// constructor(props){ 
//     super(props);
// }

render(){ 
  return (
    <div>
      
        
        <AddAlgorithm currentUserID={this.props.currentUserID}/>  
        
        <GetUserAlgs currentUserID={this.props.currentUserID}/>
    
    </div>
  );
}



} 

export default AlgorithmsPage;