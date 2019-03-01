import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import AlgorithmsListItems from './AlgorithmsListItems';

// const users = []; 
// let users = [{username:"hello", password:"password"},{username:"hello2",password:"password2"}]
class GetAllAlgorithms extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
      algorithms:[{algID:"",name:"1time",moves:"1alg",scramble:"",userId:""},{algID:"",name:"1time",moves:"1alg",scramble:"",userId:""}] 
      
    }
  } 

    getRequest = ()=>{ 
        axios.get('/getAllAlgorithms').then(r => {this.setState({algorithms: r.data})}); 
        
      } 
    render() {  
        
      let algorithms = this.state.algorithms.map(a => <AlgorithmsListItems algID={a.algID} name={a.name} moves={a.moves} scramble={a.scramble} userID={a.userID} />)
      return (
        <div>      
            <ul key={`myKey${this.state.algID}`}>  
                {algorithms}
            </ul>    
            <button onClick={this.getRequest}>Click</button>
        </div>
      
      ); 
      
    }
   
  }
  
  export default GetAllAlgorithms;