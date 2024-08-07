import React, { useState } from 'react';
import './NavBar.css';
import { Container, Nav, Navbar, NavDropdown, Button, Modal, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const isUserLogged = JSON.parse(sessionStorage.getItem("isUserLogged")) || false;
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    alert('Logged Out');
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <a className="navbarbrand" href="/"><span className="textblue">Dhiya</span><span className="textpink">Fashion</span></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Dress">Dress</NavDropdown.Item>
                <NavDropdown.Item href="/cosmetics">Cosmetics</NavDropdown.Item>
                <NavDropdown.Item href="/Accessories">Accessories</NavDropdown.Item>
                <NavDropdown.Item href="/Bags">Bags</NavDropdown.Item>
                <NavDropdown.Item href="/Flats">Flats</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div style={{ marginRight: "20px" }}>
              <form className="navbarsearch flex">
                <input type="text" placeholder="Search here ..." />
                <button type="submit" className="navbar-search-btn"><i className="fas fa-search"></i></button>
              </form>
            </div>

            <div className='lastpart' style={{ marginLeft: "30px" }}>
              <div className="navbarbtns">
                <a className="add-to-cart-btn flex" href="/cart">
                  <span className="btn-ico"><i className="fas fa-shopping-cart"></i></span>
                  <div className="btn-txt fw-5">Cart</div>
                </a>
              </div>
            </div>

            <div className='Sign'>
              {isUserLogged ? (
                <Button type="button" style={{ color: "white", fontWeight: "bold", backgroundColor: "#fc6486", border: "none" }} onClick={handleLogout}>LogOut</Button>
              ) : (
                <Button type="button" style={{ color: "white", fontWeight: "bold", backgroundColor: "#fc6486", border: "none" }} onClick={() => setModalShow(true)}>LogIn</Button>
              )}
              <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export function MydModalWithGrid(props) {
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userFound) {
          sessionStorage.setItem("isUserLogged", true);
          alert("Login Successfully");
          navigate("/Home");
        } else {
          alert("Failed");
        }
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">LogIn</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Form method='POST' onSubmit={(e) => registerUser(e)}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className='small' type="email" name='email' placeholder='Email' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='small' type="password" name='password' placeholder="Password" />
              </Form.Group>
              <Button variant="info" type='submit' style={{ color: "white", fontWeight: "bold", width: 100, backgroundColor: "#fc6486", border: "none" }}>Login</Button>
            </Form>
          </Row>
          <div className='new'>
            <input type="checkbox" required />
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <p>Create a new account? <a href="/SignUp"><span style={{ color: "#fc6486", textDecoration: "underline" }}>Click here</span></a></p>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default NavBar;

