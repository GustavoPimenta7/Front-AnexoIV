import React, {useState, useEffect} from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import Modal from 'react-modal'
import './index.css'
import axios from 'axios'

const customStyles = {
    content: {
      top: '30%',
      marginTop: '9%',
      height: '70%',
      left: '50%',
      RIGHT: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

function Index({isOpen, dataPassword}){
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [Email_User, setEmail] = useState(dataPassword.Email_User)
    const [User_Password, setPassword] = useState('')
    const [User_PasswordConfirm, setPasswordConfirm] = useState('')

  
      function Cancelar3(){
        window.location.reload(true)
      }
    
      async function handleUpdate(e){
        e.preventDefault()

        if(User_Password.length == User_PasswordConfirm.length){
          if(User_Password.length && User_PasswordConfirm.length < 6){
            alert('A senha precisa ter no mínimo 6 caracteres')
          }else{
            const NewPassword = {
              "Email_User": Email_User,
              "User_Password": User_Password,
            }
              axios.put('http://localhost:3333/Enviar', NewPassword)
              alert('Senha Alterada com sucesso!')
              window.location.reload(true)
          }
        }else{
          alert('As senhas nos campos devem ser iguais!')
      }
    } 

    return(
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        >
            <h1>Alterar Senha</h1>

              <div className='CenterPassword'>
                <p>Email:</p>
                <input className='inputsModalSenha' value={Email_User} onChange={({target}) => setEmail(target.value)} disabled/>
              </div>

              <div className='CenterPassword'>
                <p>Senha:</p>
                <input type='password' className='inputsModalSenha' value={User_Password} onChange={({target}) => setPassword(target.value)}/>
              </div>

              <div className='CenterPassword'>
                <p>Confirme a senha:</p>
                <input type='password'  className='inputsModalSenha' value={User_PasswordConfirm} onChange={({target}) => setPasswordConfirm(target.value)}/>
              </div>
              
              <div className='CenterPassword botoesSenha'>
                <Button onClick={handleUpdate}>Enviar</Button>
                <Button className='botaoSenhaCancelar' onClick={Cancelar3}>Cancelar</Button>
              </div>

        </Modal>
    )
}

export default Index