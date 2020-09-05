import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picture from "../../static/thought-catalog-505eectW54k-unsplash.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";



const Landing = () => (
   <Container
      style={{ height: "100vh"}}
      className="d-flex flex-column justify-content-center align-items-center"
   >
   <img src={picture} alt="" style={{ height: "81vh" , width: "100vw" , opacity:"0.8"}}></img>

<footer className="page-footer font-small black-dark-4 pt-4">

  <div className="container">
  <h1 style={{color:"whitesmoke"}}>Welcome</h1>
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
      <Link to="/signup">
            <Button style={{'width':'100px', height:"50px",borderRadius:"17px", backgroundColor:"black"}}  variant="outline-light" className="mr-sm-2" >
               SignUp!
            </Button>
         </Link>
      </li>
    </ul>

  </div>

</footer>
   
   </Container>
  
);

export default Landing;