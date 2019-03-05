import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class AddDefaultAlgorithms extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
      offerdefault:true,
      defaultAlgorithms:[{name:"J", moves:"U", scramble:"U'"},{name:"H", moves:"U", scramble:"U'"}], 
      algorithms:[]
    }
  }

    retractOffer=()=>{  
        this.setState({offerdefault:false});
    }

    checkAlgs=()=>{ 
    
        // axios.get('/getAllAlgorithms').then(r => {this.setState({algorithms: r.data})}); 
        // if(algorithms)    
           
    }

    pushDefault = ()=>{ 
    for(let i=0;i<this.state.defaultAlgorithms.length;i++){
    axios.post(`/addAlgorithm/${this.state.defaultAlgorithms[i].name}/${this.state.defaultAlgorithms[i].moves}/${this.state.defaultAlgorithms[i].scramble}/${this.props.userID}`); 
    this.retractOffer();
    }
    } 

    render() { 
    //   {this.checkAlgs()} 
        //  if(adminpresent)
      if(this.state.offerdefault){
      return (
        <div> 
            <button onClick={this.pushDefault}>Add Default Algorithms</button>
        </div>
      ); 
    } 
    else{ 
        return( 
            <div>You have the default Algorithms</div>
        );
    }
    }
  }
  
  export default AddDefaultAlgorithms;