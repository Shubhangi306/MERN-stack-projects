import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = ({ auth, onClick }) => (
   <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="mb-3"
      style={{ minHeight: "4rem" }}
   >
      <Link to="/">
         <Navbar.Brand>
            <img
               src="https://react-bootstrap.github.io/logo.svg"
               style={{ height: 30, width: 30 }}
               className="d-inline-block align-top"
               alt=""
            />
            {" Bloggers' "}
         </Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
         {auth ? (
            <div>
                <Link to="/blog">
            <Button style={{'width':'80px'}}  variant="outline-light" className="mr-sm-2">
               Home
            </Button>
              </Link>
               <Link to="/logout">
               <Button
                  variant="outline-light"
                  className="mr-sm-2"
                  onClick={onClick}
               >
                  Logout
               </Button>
            </Link>
           </div>
         ) : (
            <div>
               <Link to="/login">
               <Button style={{'width':'80px'}} variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
            <Link to="/signup">
            <Button style={{'width':'80px'}}  variant="outline-light" className="mr-sm-2">
               SignUp
            </Button>
         </Link>
         
            </div>
            
      )}
      </Nav>
   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;