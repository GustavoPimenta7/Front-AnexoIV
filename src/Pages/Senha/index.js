import { Button, Container } from "react-bootstrap";
import React, { useState, onChange, useEffect } from "react";
import api from '../../Service/api'
import branco from '../../img/branco.png'
import './index.css'


 function Index(){


    const [Email_User, setEmail] = useState('')

    async function Email(){
        const userEmail ={
            Email_User
        }
        if(Email_User == ''){
            alert('Preencha o campo')
        }else{
            document.getElementById('Enviado').style.display = 'inline-block'
            await api.post('/Enviar', userEmail)
        }
    }



    return(
        <div className="CenterSenha">
          <Container className="ContEmail">
          <img src={branco} className='imgSenha' />
            <p className="EmailP">Digite seu Email:</p>
            <input className="InputSenhaEmail" value={Email_User} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email"/>
            <div>
                <Button id='botaoBuscar' className="botasenha" onClick={Email}>Enviar</Button>
            </div>
            <div id='Enviado' className="Enviado">
                <p className="EmailEnviado">Enviamos um email com sua nova senha. <a href="/">Clique aqui para acessar</a></p>
            </div>
          </Container>
        </div>
    )
}

export default Index;