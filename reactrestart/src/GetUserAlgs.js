import React, { Component } from 'react'; 
import axios from 'axios';
import AddDefaultAlgorithms from './AddDefaultAlgorithms';
import AlgorithmsListItems from './AlgorithmsListItems';

class GetUserAlgs extends Component{ 

    constructor(props) {
        super(props);
        this.state = {
          algorithms:[],
     
        }
      }

      getRequest = () => { 
        axios.get(`/getUserAlgs/${this.props.currentUserID}`).then(r => { this.setState({ algorithms: r.data }) }); 
      }  

  

render(){ 
   
    let algorithms = this.state.algorithms.map(a=><AlgorithmsListItems algID={a.algID} name={a.name} moves={a.moves} scramble={a.scramble} currentUserID={this.props.currentUserID}/>)
    return(  
        <div className="centre">
            <div><br/><br/><br/>
            {algorithms}
            {/* {this.getRequest()}  */} 
            <br/>
            <button className="button"onClick={this.getRequest}>Press to display your algorithms</button> 
            <br/> 
            <AddDefaultAlgorithms currentUserID={this.props.currentUserID}/> 
            </div>
            
           
        </div>
    );
}



} 

export default GetUserAlgs;