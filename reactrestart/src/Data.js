import React, { Component } from 'react'; 
import Testingdatasets from './Testingdatasets'; 
class Data extends Component{ 
    constructor(props){ 
        super(props); 
        this.state =  {
        users:[{ 
            name:"Dave",password:"fewf"
          },{name:"George",password:"fewf"},{name:"EVWe",password:"vwe"}] 
        }
    } 

    render(){  
        let users = this.state.users.map(u => <Testingdatasets name={u.name} password={u.password}/>)
        return( 
            <ul> 
                {users}
            </ul>
        );
    }
} 
export default Data;