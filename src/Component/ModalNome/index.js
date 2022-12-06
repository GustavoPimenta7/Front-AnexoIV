import React, {useState, useEffect} from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import Modal from 'react-modal'
import './index.css'
import axios from 'axios'

const customStyles = {
    content: {
      top: '30%',
      marginTop: '9%',
      height: '40%',
      left: '50%',
      RIGHT: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

function Index({isOpen, dataName}){
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [Name_User, setName] = useState(dataName.Name_User)

  
      function Cancelar3(){
        window.location.reload(true)
      }
    
      async function handleUpdate(e){
        e.preventDefault()

        const Name = {
          "Name_User": Name_User,
          "Course_User": sessionStorage.getItem('Curso'),
        }
          axios.put('http://localhost:3333/NameUser', Name)
          alert('Nome Alterado com sucesso!')
          window.location.reload(true)
      }
    

    return(
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        >
            <h1>Alterar Nome</h1>

              <div className='DivName'>
                <input className='Nome' value={Name_User} onChange={({target}) => setName(target.value)}/>
              </div>
              
              <div className='BotoesName'>
                <Button onClick={handleUpdate}>Enviar</Button>
                <Button className='NameCancelar' onClick={Cancelar3}>Cancelar</Button>
              </div>

        </Modal>
    )
}

export default Index