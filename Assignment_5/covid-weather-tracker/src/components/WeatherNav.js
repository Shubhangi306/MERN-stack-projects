import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light blue lighten-1" style={{height:'90px'}}>
        <a className="navbar-brand text-white display-6" href="#"> 
        <img src="https://img.icons8.com/nolan/64/cloud.png" className="d-inline-block align-top" alt="" /><span style={{fontSize:'25px'}}>Weather-Tracker</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse blue lighten-1" id="navbarNav" >
      <ul className="navbar-nav ml-auto " >
      <li className="nav-item">
        <NavLink to='/'><i className="material-icons left">home</i>Home</NavLink><span className="sr-only">(current)</span>
      </li>
      <li className="nav-item active ">
        <NavLink to='/Weather'><i className="material-icons left">cloud</i>Weather</NavLink>
      </li>
      </ul>
    </div>
   </nav>
    //     <nav>
    //         <div className="nav-wrapper blue lighten-2">
                
    //             <a href="#" className="brand-logo" style={{textAlign:'center'}}><img style={{float:'left'}} src="https://img.icons8.com/nolan/64/cloud.png"/><span style={{float:'left'}}>Weather Tracker</span></a>
    //             <ul id="nav-mobile" className="right hide-on-med-and-down ">
    //                 <li><NavLink to='/' className="active"><i className="material-icons left">home</i>Home</NavLink></li>
    //             </ul>
                
    //         </div>
    //   </nav>
      
    )

}

export default Navbar;