import React, { useState }  from "react"; // Importar o React
import { Button } from "react-bootstrap";
import  Modal  from "react-bootstrap/Modal";
import Branco from '../../img/branco.png';
import api from '../../Service/api';
import './Cadastro.css';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";


function Main(){ // Criar função da página Main

    // Criando as variáveis para mandar para o banco
    const [Email_User, setEmail] = useState('');
    const [Name_User, setUser] = useState('');
    const [User_Password, setPassword] = useState('');
    let navigate = useNavigate(); // função para navegar

    async function CreateUser(e){

        e.preventDefault();

        try{
            const dataCadastro ={
                Email_User, Name_User, User_Password
            }

            if(Email_User == '' || Name_User == '' || User_Password == '' ){
                alert("Preencha todos os campos");

            }else{
     
                await api.post('/user', dataCadastro)
                alert("Cadastro realizado com sucesso");
                navigate('/Main')
            }
            
        
        }catch(err){
            alert(`Houve um erro: ${err}`)
        }
    }

    return(
        
        <center>
        <div className='Container1'> 
            <div className="Estilo-Login">
                <Formik>
            <form> 
                <Modal.Header> {/*Modal da imagem*/}
                    <span className="Titulo-Form">
                        <img src={Branco} alt='logo' className="Img"/> {/*Importação da Logo do sistema */}
                    </span>
                </Modal.Header>

                <Modal.Body>
                <div className="DivOptions"> 
                        <label className="labelclass">Nome De Usuário</label>
                        <input className="input" onChange={e => setUser(e.target.value)} 
                        value={Name_User}/>
                </div>


                    <div className="DivOptions"> 
                        <label className="labelclass">Email</label>
                        <input className="input" onChange={e => setEmail(e.target.value)} 
                        value={Email_User}/>
                    </div>

                    <div className="DivOptions">
                        <label className="labelclass">Senha</label>
                        <input className="input" type='password' onChange={e => setPassword(e.target.value)}  
                         value={User_Password} />
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