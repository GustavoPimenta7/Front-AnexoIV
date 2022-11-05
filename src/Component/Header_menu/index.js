import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import transparente from '../../img/transparente.png';
import './menu.css';

function Cabeca_menu() {

function handleLogout(){
  sessionStorage.clear();
  window.location.reload(true);
}

  return (
    <div ><Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand><img className=""
              src= {transparente}
              width="50"
              height="40"
             
              
            />
            </Navbar.Brand>
      <Nav>
      <Nav.Link><Link to='/' onClick={handleLogout}>Sair</Link></Nav.Link>

      </Nav>
    </Container>

    </Navbar>

 
  </div>
  )
}

export default Cabeca_menu