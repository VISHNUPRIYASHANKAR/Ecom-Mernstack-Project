import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";



function DashBoard() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{color:"#fc6486",fontSize:30}}><img src="../images/protection.png" style={{width:"50px",}} />AdminPanel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href= "/product" style={{color:"black",fontSize:20}}>ProductInsert</Nav.Link>
            <Nav.Link href="/table"  style={{color:"black",fontSize:20}}>UsersTable</Nav.Link>
            <Nav.Link href="/Producttable"  style={{color:"black",fontSize:20}}>ProductTable</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default DashBoard;