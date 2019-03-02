import React, { Component } from 'react';

class Testingdatasets extends Component{ 
    constructor(props){ 
        super(props);
    } 
    render(){ 
        return( 
            <li> 
                <button> {this.props.name} {this.props.password}`</button>;
            </li>
        );
    }
} 

export default Testingdatasets;