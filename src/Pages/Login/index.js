import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Branco from '../../img/branco.png';
import { useNavigate } from "react-router-dom";
import api from "../../Service/api";
import './Login.css'
import jwt_decode from "jwt-decode";

function Index() {

    const [Email_User, setEmail] = useState(null);
    const [User_Password, setPassword] = useState(null);

    let navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const datalogin = {
                Email_User, User_Password
            }

            const {data} = await api.post('/login', datalogin);
            const TokenD = jwt_decode(data.token)
            

            sessionStorage.setItem('Login', TokenD.infoUser.Name_User);
            sessionStorage.setItem('Senha', TokenD.infoUser.User_Password);
            sessionStorage.setItem('Email', TokenD.infoUser.Email_User);
            sessionStorage.setItem('Curso', TokenD.infoUser.Course_User);
            sessionStorage.setItem('ID', TokenD.infoUser.idUser);
            sessionStorage.setItem('jwt', data.token);

            if(sessionStorage.getItem('Login') == 'Admin'){
                navigate('/AnexoIV')
            }else{
                navigate('/Confirmacao')
            }

        } catch (err) {
            alert(`Erro ao logar! ${err}`);
        }
    }

    return (
        <center>
            <div className="Container2">
                <div className="Estilo-Log">
                    <form>
                        <Modal.Header>
                            <span className="Titulo-Form">
                                <img src={Branco} alt='Logo' className="Img" />
                            </span>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="DivInputs">
                                <input className="Input" onChange={(e) => { setEmail(e.target.value) }} />
                                <span className="Focus-Input" data-placeholder="Email" />
                            </div>

                            <div className="DivInputs">
                                <input className="Input" type='password' onChange={(e) => { setPassword(e.target.value) }} />
                                <span className="Focus-Input" data-placeholder="Senha" />
                            </div>
                        </Modal.Body>

                        <section className="footer">
                            <div className="ButtonDIv">
                                <Button type='submit' className="ButtonLogin" onClick={handleLogin} >Entrar</Button>
                            </div>

                            <div className="DivText1">
                                <a href="/Senha" className="EsSenha">Esqueceu a senha?</a>
                            </div>

                            {/* <div className="DivText1">
                                <a href="/Cadastro" className="EsConta1">Cadastre-se</a>
                            </div> */}
                        </section>
                    </form>
                </div>
            </div>
        </center>
    )
}


export default Index;