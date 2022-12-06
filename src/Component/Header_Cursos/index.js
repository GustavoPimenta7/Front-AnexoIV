import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import transparente from '../../img/transparente.png'


function CursosAnexo(){

return(
<div><Navbar bg="light" variant="light">
     
     <Navbar.Brand><img
       src={transparente}
       width="50"
       height="40"
     /></Navbar.Brand>
     <Nav.Link href='/AnexoIV'>Voltar</Nav.Link>
 
 </Navbar></div>
)

}

export default CursosAnexo