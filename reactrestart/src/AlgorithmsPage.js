import React, { Component } from 'react'; 
import AddAlgorithm from './AddAlgorithm'; 
import GetUserAlgs from './GetUserAlgs'; 
class AlgorithmsPage extends Component{ 



render(){ 
  return (
    <div>
      
        <div> 
        
        <AddAlgorithm currentUserID={this.props.currentUserID}/>  
        <GetUserAlgs currentUserID={this.props.currentUserID}/>
        </div> 
       
    
    </div>
  );
}



} 

export default AlgorithmsPage;