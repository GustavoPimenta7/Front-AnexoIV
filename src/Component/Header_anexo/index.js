import React from 'react'
import {Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import transparente from '../../img/transparente.png'
import './HAnex.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";


function Cabeca_anexo() {
let navigate = useNavigate()

  function handleLogout() {
    sessionStorage.clear();
  }

  function Controle(){
    if(sessionStorage.getItem('Login') != 'Admin'){
     alert('Você não pode acessar essa opção')
    }else {
      navigate('/DeleteConta')
    }
  }

  function Controle2(){
    if(sessionStorage.getItem('Login') != 'Admin'){
     alert('Você não pode acessar essa opção')
    }else {
      navigate('/Historico')
    }
  }
  return (
    <div><Navbar bg="light" variant="light">
      <img className='SpaceImage'
          src={transparente}
          width="50"
          height="40"
        />
        <h4 className='CenterHeader'>Olá, {sessionStorage.getItem('Login')}</h4>


        <Navbar.Brand className='DropDow'>
          <DropdownButton title='Menu' >
            <Nav.Link className='Cursos'><Link to='/CadastroCurso'>Cursos</Link></Nav.Link>
            <Nav.Link><Link to='/' className='Saida' onClick={handleLogout}>Sair</Link></Nav.Link>
            <Nav.Link className='EncerrarConta'><Button className='BotaoEnce2' onClick={Controle2}>Histórico</Button></Nav.Link>
            <Nav.Link className='EncerrarConta'><Button className='BotaoEnce' onClick={Controle}>Coordenadores</Button></Nav.Link>
            <Nav.Link href='/Perfil' className='EncerrarConta'><Button className='BotaoEnce'>Perfil</Button></Nav.Link>
          </DropdownButton>
        </Navbar.Brand>
    </Navbar></div>
  )
}

export default Cabeca_anexo