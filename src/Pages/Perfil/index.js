import React, {useState, useEffect} from "react";
import api from "../../Service/api";
import './index.css'
import transparente from '../../img/transparente.png'
import { Button, Container, Form } from "react-bootstrap";
import Modalnome from '../../Component/ModalNome'
import ModalPassword from '../../Component/ModalSenha'


function Index(){

    const [user, setUser] = useState([]); 
    useEffect(() => {
      async function getSpare() {
        const Course_User = sessionStorage.getItem('Curso')
        const teste = {
            Course_User
        }
        const {data} = await api.post('/CourseUser', teste);
        if(data == ''){
          user = 'Não há reposições'
          setUser(data)
        }else{
          setUser(data)
          console.log(data);
        }
  
      }
      getSpare();
    }, []);

    const [modalnome, setModalNome] = useState(false)
    const [NomeItem, setNomeItem] = useState('')
    const [modalsenha, setmodalsenha] = useState(false)
    const [SenhaItem, setSenhaItem] = useState('')

    function Name(user){
      if(sessionStorage.getItem('Login') == 'Admin'){
        alert('O administrador não pode alterar nome!')
      }else{
        setModalNome(true)
        setNomeItem(user)
      }
    }

    function Password(user){
        setmodalsenha(true)
        setSenhaItem(user)
    }

    return (
        <div className="perfil corPerfil">
            {modalnome && <Modalnome isOpen={modalnome} dataName = {NomeItem} /> }
            {modalsenha && <ModalPassword isOpen={modalsenha} dataPassword = {SenhaItem} /> }

            <div className="IMG">
                <img className='ImgPerfil' src={transparente}/>
            </div>
            
            <Container className="InformacaoPerfil">
            
               {
                user.map((user) => (
                    <div  className="NomeAlterar">
                        <Form.Label>Nome: {user.Name_User}</Form.Label>
                       <div className="">
                            <Button className="" onClick={() => Name(user)}>Alterar</Button>
                       </div>
                    </div>   
                ))
               }   
                
               <div className="PerfilDivEmail">
               {
                user.map((user) => (
                    <div>
                    <Form.Label>Email: {user.Email_User}</Form.Label>   
                        <div>
                            <Button onClick={() => Password(user)}>Alterar Senha</Button>
                         </div>
                    </div>
                ))
               }
               </div>

               <div className="PerfilDivEmail">
                {
                user.map((user) => (
                    <Form.Label>Curso: {user.Course_User}</Form.Label>   
                ))
               } 
               </div>
            </Container>
        </div>
    )
}

export default Index