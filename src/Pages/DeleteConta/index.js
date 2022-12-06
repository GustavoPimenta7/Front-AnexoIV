import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, FormLabel } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import api from '../../Service/api';
import Voltar from '../../Component/Header_Delete'
import './index.css'


function Index(){

    const [Email_User, setEmail] = useState('');
    const [User_Password, setPassword] = useState('');
    let navigate = useNavigate()

    const [User, setUser] = useState([])
    useEffect(() => {
        async function User(){
            const {data} = await api.get('/user')
            setUser(data)
        }
        User()
    })

    async function Delete(){

        const Deletar = {
            Email_User, User_Password
        }
         
        const {data} = await api.post('/DeleteUser', Deletar)
        if(Email_User == '' || User_Password == ''){
            alert('Preencha os campos')
        }else if(Email_User == sessionStorage.getItem('Login') || User_Password == sessionStorage.getItem('Senha')){
            alert('Você quer se auto-excluir? Administrador não pode se excluir!!')
        }else if(data == ''){
            alert('Usuário não encontrado!')
        }
        else{   
              
                var confirmation = window.confirm('Confirma a exclusão?');
                if(confirmation == true){
                    await api.post('/ApagarConta', Deletar)
                    alert('conta excluida com sucesso!')
                    window.location.reload(true)
                }else if (confirmation == false){
                    alert('Operação cancelada!')
                    navigate('/AnexoIV')
                }  
        }
    }

    function Cancelar(){
        navigate('/AnexoIV')
    }

    return(
        <div className='ColorTeste'>
            <Voltar/>
    
                <Table className='TableLetra'>
                    <thead>
                        <th className='CamposTabela'>Email</th>
                        <th className='CamposTabela'>Senha</th>
                        <th className='CamposTabela'>Curso</th>
                    </thead>
                    <tbody>
                        {
                            User.map((user) => (
                                <tr>
                                    <td className='CamposTabela'>{user.Email_User}</td>
                                    <td className='CamposTabela'>{user.User_Password}</td>
                                    <td className='CamposTabela'>{user.Course_User}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
           
            <div className='DivEmailLabel'>
                    <input value={Email_User} onChange={e => setEmail(e.target.value)} className='InputEmail' placeholder='Digite o email' /> 
                    <input type='password' value={User_Password} onChange={e => setPassword(e.target.value)} className='InputSenha' placeholder='Digite a senha' />
                    <Button className='BotaoDeleteConfirm' onClick={Delete}>Excluir</Button>
                    <Button className='BotaoDeleteCancelar' onClick={Cancelar}>Cancelar</Button>
            </div>

        </div>
    )
}

export default Index