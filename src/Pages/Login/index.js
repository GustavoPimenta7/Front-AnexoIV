import React, {useState} from "react";
import { Button } from "react-bootstrap";
import  Modal  from "react-bootstrap/Modal";
import Branco from '../../img/branco.png';
import {useNavigate} from "react-router-dom";
import api from "../../Service/api";
import './Login.css'

function Index(){

const [Email_User, setEmail] = useState(null);
const [User_Password, setPassword] = useState(null);
let navigate = useNavigate();

 async function handleLogin(e){
 e.preventDefault()

 try{
    const datalogin = {
        Email_User, User_Password
     }

    const {data} = await api.post('/login', datalogin);

    sessionStorage.setItem('Login', true);
    sessionStorage.setItem('jwt', data.token);

    navigate('/Main')

 }catch(err){
     alert(`Erro na requisição ${err}`);
 }
}

    return(
<center>
        <div className="Container2">
            <div className="Estilo-Log">
                <form>
                    <Modal.Header>
                        <span className="Titulo-Form">
                            <img src={Branco} alt='Logo' className="Img"/>
                        </span>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="DivInputs">
                            <input className="Input" onChange={(e) => {setEmail(e.target.value)}}/>
                            <span className="Focus-Input" data-placeholder="Email"  />
                        </div>

                        <div className="DivInputs">
                            <input className="Input" type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                            <span className="Focus-Input" data-placeholder="Senha" />
                        </div>
                    </Modal.Body>

                    <section className="footer">
                        <div className="ButtonDIv">
                             <Button type='submit' className="ButtonLogin" onClick={handleLogin} >Entrar</Button>
                        </div>

                        <div className="DivText1">
                            <span className="EsSenha">Esqueceu a senha?</span>
                        </div>

                        <div className="DivText1">
                            <a href="/Cadastro" className="EsConta1">Cadastre-se</a>
                        </div>
                    </section>
                </form>
            </div>
        </div>
        </center>
    )
    }


export default Index;