import React,{Component} from "react";
import {Nav,Navbar} from "react-bootstrap";

import logo from "./logo/logo.png"

export default class Header extends Component{
    render(){
        return(
            <div>
 <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
    <img
        alt=""
        src={logo}
        width="40"
        height="35"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      
    </Nav>
  </Navbar>
 

            </div>
        );
    }
}