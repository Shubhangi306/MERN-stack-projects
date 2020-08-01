import React from 'react';
import './display.css'
 const Navbar =(props) => {
     return(
         <nav className='nav-bar'>
             <h1 className='app-head'>{props.heading}</h1>
         </nav>
     );
 }

 export default Navbar;