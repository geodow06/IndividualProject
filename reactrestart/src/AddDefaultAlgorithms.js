import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min'
import axios from 'axios';

class AddDefaultAlgorithms extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
      offerdefault:true,
      defaultAlgorithms:[{name:"Ja", moves:"U", scramble:"B2 R2 U' R2 U R2 D' R2 D B2"},{name:"Jb", moves:"U", scramble:"F U F' L D F2 R' F R F D' L'"},{name:"Ua",moves:"R T U",scramble:"F R B' R B D R D' R F2 U F"},{name:"Ub",moves:"T A U",scramble:"R L' U2 R B2 L2 D' L2 B2 R2 U' L F2"},{name:"T",moves:"R T U",scramble:"L2 F2 R' D' R F2 L' U L2 R B2 L R'"}], 
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
    console.log(this.state.defaultAlgorithms.length)
    for(let i=0;i<this.state.defaultAlgorithms.length;i++) 
    {
    axios.post(`/addAlgorithm/${this.state.defaultAlgorithms[i].name}/${this.state.defaultAlgorithms[i].moves}/${this.state.defaultAlgorithms[i].scramble}/${this.props.currentUserID}`); 
   
    }
    this.retractOffer();
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