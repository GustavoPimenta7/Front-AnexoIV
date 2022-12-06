import React, { useEffect, useState } from "react"; // Importar o React
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Branco from '../../img/branco.png';
import api from '../../Service/api';
import './Cadastro.css';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";


function Main() { // Criar função da página Main

    // Criando as variáveis para mandar para o banco
    const [Email_User, setEmail] = useState('');
    const [Name_User, setUser] = useState('');
    const [User_Password, setPassword] = useState('');
    const [Course_User, setCourseUser] = useState('');
    let navigate = useNavigate(); // função para navegar


    const [Spares, setSpare] = useState([])
    useEffect (() => {
        async function Curso(){
            const {data} = await api.get('/course')
            setSpare(data)
        }
        Curso()
    })
    async function CreateUser(e) {

        e.preventDefault();

        try {
            const dataCadastro = {
                Email_User, Name_User, User_Password, Course_User
            }

            const Curso = {
                Course_User
            }

            if (Email_User == '' || Name_User == '' || User_Password == '' || Course_User == '') {
                alert("Preencha todos os campos");

            } else {
                const {data} = await api.post('/CourseUser', Curso)
                if(data == ''){

                    if(User_Password.length < 6){
                        alert('Senha deve ter no mínimo 6 caracteres!')
                    }else{
                        await api.post('/user', dataCadastro)
                        alert("Cadastro realizado com sucesso");
                        navigate('/')
                    }
                }else{
                    alert('Usuário com curso já cadastrado!')
                }
            }


        } catch (err) {
            alert(`Houve um erro: ${err}`)
        }
    }

    return (

        <center>
            <div className='Container1'>
                <div className="Estilo-Login">
                    <Formik>
                        <form>
                            <Modal.Header> {/*Modal da imagem*/}
                                <span className="Titulo-Form">
                                    <img src={Branco} alt='logo' className="Img" /> {/*Importação da Logo do sistema */}
                                </span>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="DivOptions">
                                    <label className="labelclass">Nome De Usuário</label>
                                    <input className="input" onChange={e => setUser(e.target.value)}
                                        value={Name_User} />
                                </div>


                                <div className="DivOptions">
                                    <label className="labelclass">Email</label>
                                    <input className="input" onChange={e => setEmail(e.target.value)}
                                        value={Email_User} />
                                </div>

                                <div className="DivOptions">
                                    <label className="labelclass">Senha</label>
                                    <input className="input" type='password' onChange={e => setPassword(e.target.value)}
                                        value={User_Password} />
                                </div>

                                <div className="DivOptions">
                                    <label className="labelclass">Curso</label>
                                    <Form.Select className="input" type='password' onChange={e => setCourseUser(e.target.value)}
                                        value={Course_User} >
                                            <option></option>
                                            {
                                                Spares.map((Spare) => (
                                                    <option className="ColorI" >{Spare.Name_Course}</option>
                                                ))
                                            }
                                        </Form.Select>
                                </div>

                            </Modal.Body>

                            <section className="footer">
                                <div className="DivButton">
                                    <Button className="Button" onClick={CreateUser}>CADASTRAR</Button>
                                </div>

                                <div className="DivTexto">
                                    <span className="Pconta">Já possui conta?</span>
                                    <a className="Entrar" href="/">Entrar</a>
                                </div>
                            </section>
                        </form>
                    </Formik>
                </div>
            </div>
        </center>
    )
}


export default Main; // Exportar a página Main