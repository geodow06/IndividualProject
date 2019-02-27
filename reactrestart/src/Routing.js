import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home.js'; 
import Users from './Users.js'; 
import './App.css'; 

function RoutePage(){ 
        
    return( 
        <Router> 
            <div> 
                <div className="header">
                    
                    <div><button className="logo"><NavLink  to="/">George'd PLL Trainer</NavLink></button></div>

                    <div className="header-right"> 
                        <button className="active"><NavLink to="/Users">Users</NavLink></button>
                    
                    </div>
                </div>
      
                <div><Route exact path="/" component={Home}/></div>
                <div><Route path="/Users" component={Users}/></div>  
            </div>
        </Router> 

    );
}



export default RoutePage;


{/* <div className="header">
<a href="worm.html" className="logo">George's PLL Trainer</a>
<div className="header-right">
    <a className="active" href="#home">Home</a> 
    <a href="">ebverjbgwerhi</a>
    <a href="">Contact</a>
    <a href="">About</a> 
</div>
</div> */}