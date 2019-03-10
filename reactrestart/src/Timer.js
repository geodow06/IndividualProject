import React, { Component } from 'react'; 
import GenerateScramble from './GenerateScramble';
import GetAnAlgorithm from './GetAnAlgorithm.js'; 
import GenerateRandomScramble from './GenerateRandomScramble';
import { SlowBuffer } from 'buffer';
import axios from 'axios';
const prettyMs = require('pretty-ms');
// class Timer extends Component{ 
 

//   constructor(props) {
//     super(props);
//     this.state = {
//       getid:null,
//       timerOn:false

//     }
//   } 

//   startTimer=(event)=>{ 
     
//       var code = event.keyCode || event.which;
//       if(code === 32) { 
//         console.log("Timer Start"); 
//         this.setState({timerOn:true}); 
//       } 
//   } 

//   stopTimer=(event)=>{ 
     
//     var code = event.keyCode || event.which;
//     if(code === 32) { 
//       console.log("Timer Stop"); 
//       this.setState({timerOn:false}); 
//    } 
//     }

//   enterPressed(event) {
//     var code = event.keyCode || event.which;
//     if(code === 32) { 
//         this.startTimer(); 
//     } 
//     }   

// render(){ 

//   if(this.state.timeOn){ 
//     return( 
//         <div>
//           <input
//             placeholder='Timer Start'
           
//             value={this.state.name} 
//             onKeyPress={this.stopTimer}
//             />
          
         
//         </div>
//     );
//   } 
//   else { 
//     return (
//         <div>
//           <input
//             placeholder='Timer Start'
          
//             value={this.state.name} 
//             onKeyPress={this.startTimer}
//             />
          
         
//         </div>
//         );
//   }
 
  
// }



// } 



class Timer extends Component {
    constructor(props){
      super(props)
      this.state = {
        time: 0,
        isOn: false,
        start: 0, 
        currentTime:null, 
 
      }
      
  
    } 
    addTime=()=>{  
        axios.post(`/addTimeLog/${this.state.time}/${this.props.currentAlgID}`).then(this.setState({isOn:false, time:0}));
    }
    
    startTimer=()=> {
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1);
    }
    stopTimer=()=> {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }
    resetTimer=()=> {
      this.setState({time: 0, isOn: false})
    } 
    submitTime=()=>{ 
        this.setState({currentTime:this.state.time}); 
        this.addTime();
    }
    render() {
      let start = (this.state.time === 0) ?
        <button className="button" onClick={this.startTimer}>start</button> :
        null
      let stop = (this.state.time === 0 || !this.state.isOn) ?
        null :
        <button className="button"onClick={this.stopTimer}>stop</button>
      let resume = (this.state.time === 0 || this.state.isOn) ?
        null :
        <button className="button" onClick={this.startTimer}>resume</button>
      let reset = (this.state.time === 0 || this.state.isOn) ?
        null :
        <button  className="button" onClick={this.resetTimer}>reset</button> 
      let submit = (this.state.time === 0 || this.state.isOn)? 
        null: 
        <button className="button" onClick={this.submitTime}>submit time</button>
      return(
        <div>
          <h3>timer: {prettyMs(this.state.time,{secDecimalDigits:4})}</h3>
          {start}
          {resume}
          {stop}
          {reset} 
          {submit}
        </div>
      )
    }
  }
 

export default Timer;