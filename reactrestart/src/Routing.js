import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home.js'; 
import Trainer from './Trainer.js';  
import UsersPage from './UsersPage'; 
import TimeLogPage from './TimeLogPage'; 
import AlgorithmsPage from './AlgorithmsPage.js';
import './App.css'; 

function RoutePage(){ 
        
    return( 
        <Router> 
            <div> 
                <div className="header">
                    
                    <NavLink className="logo" to="/">George'd PLL Trainer</NavLink>
                    <div className="header-right">  
                        <NavLink id="home" to="/">Home</NavLink>
                        <NavLink to="/UsersPage">Users</NavLink>
                        <NavLink to="/Trainer">Trainer</NavLink> 
                        <NavLink to="/TimeLogPage">Times</NavLink>
                        <NavLink to="/AlgorithmsPage">Algorithms</NavLink>
                        <Route exact path="/" component={Home}/>
                        <Route path="/UsersPage" component={UsersPage}/> 
                        <Route path="/Trainer" component={Trainer}/> 
                        <Route path="/TimeLogPage" component={TimeLogPage}></Route> 
                        <Route path="/AlgorithmsPage" component={AlgorithmsPage}></Route>
                        
                    </div>
                </div>
      

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