import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import transparente from '../../img/transparente.png'
import './index.css'

function VoltarHistorico() {

  return (
    <div ><Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand><img
          src={transparente}
          width="50"
          height="40"


        /></Navbar.Brand>
        <Nav className="me-auto SpaceHistorico">
          <Nav.Link href="/AnexoIV">Voltar</Nav.Link>
        </Nav>
      </Container>
    </Navbar></div>
  )
}

export default VoltarHistorico;