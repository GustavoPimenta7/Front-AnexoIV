import React, {useState} from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import transparente from '../../img/transparente.png'
import CadastroCoordenador from '../../Component/ModalCadastroCoordenador'
import './index.css'

function Voltar() {
  const [ModalCoordenador, setModalCCoordenador] = useState(false)

  
  function ShowModal(){
     if(sessionStorage.getItem('Login') == 'Admin'){
      setModalCCoordenador(true)
     }else{
         alert('Você não têm acesso a essa opção!')
     }
  }
  return (
    <div >
      { ModalCoordenador && <CadastroCoordenador isOpen={ModalCoordenador} /> } 
      <Navbar bg="light" variant="light">
        <img src={transparente} width="50" height="40"/>
        <div className='VoltarDelete'>
          <Button onClick={ShowModal}>Cadastrar Coordenador</Button>
        </div>
        <Nav.Link href="/AnexoIV" className='VoltarDelete1'>Voltar</Nav.Link>
    </Navbar></div>
  )
}

export default Voltar