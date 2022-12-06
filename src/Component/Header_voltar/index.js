import React from 'react'
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap'
import transparente from '../../img/transparente.png'
import { useNavigate } from 'react-router'
import './volt.css'

function Cabeca_voltar() {
  let navigate = useNavigate()

  function Verificar(){
    if(sessionStorage.getItem('Login') == 'Admin'){
      alert('O administrador não pode fazer reposições!')
    }else{
      navigate('/Controlereposicao')
    }
  }
  return (
    <div ><Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand><img
          src={transparente}
          width="50"
          height="40"


        /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={Verificar}>Controle/Reposições</Nav.Link>
          <Nav.Link href="/Quadroreposicao">Quadro/Reposições</Nav.Link>
          <Nav.Link href="/Planoreposicao">Plano/Reposições</Nav.Link>
          <Nav.Link href="/AnexoIV">Voltar</Nav.Link>
        </Nav>
      </Container>
    </Navbar></div>
  )
}

export default Cabeca_voltar