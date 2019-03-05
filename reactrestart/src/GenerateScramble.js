import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 




class GenerateScramble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm:{},
      algorithms:[], 
      idlist:[], 
      currentid:null
      

    }
  }

//   getRequest = () => { 
   
//     axios.get(`/getAnAlgorithm/${this.props.getid}`).then(r => { this.setState({ algorithm: r.data }) }); 
//     console.log(this.state.algorithm.scramble);
//   }  
 
  getAllRequest = ()=>{ 
    axios.get('/getAllAlgorithms').then(r => {this.setState({algorithms: r.data})}); 
    for(let i=0;i<this.state.algorithms.length;i++){ 
        console.log(this.state.algorithms[i].userID)
        this.setState({idlist:[this.state.idlist,this.state.algorithms[i].userID]});
    }
    for(let j=0;j<this.state.idlist.length;j++){ 
        console.log(this.state.idlist[j]);
    }
  } 
  
  nextScramble=()=> { 
      this.setState({currentid:Math.floor(Math.random()*this.state.idlist.length)}); 
      console.log(this.state.currentid);
       
  }

  render() { 

    if(this.state.currentid){
        return(  
            <div> 
                {this.getAllRequest}
                {console.log(this.state.currentid)}
                <a>{this.state.algorithms[this.state.currentid].scramble}</a> 
            
            </div> 
        );
    } 
    else{ 
        return( 
          <div>  
              {this.getAllRequest}
              <button onClick={this.nextScramble}>click to begin</button> 
          </div>   
        );
    }

    

  }

}

export default GenerateScramble; 