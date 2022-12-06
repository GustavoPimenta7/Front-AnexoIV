import api from '../../Service/api'
import React, {useState, useEffect} from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import Modal from 'react-modal'
import './index.css'
import axios from 'axios'

const customStyles = {
    content: {
      top: '30%',
      marginTop: '9%',
      height: '90%',
      left: '50%',
      RIGHT: 'auto',
      marginRight: '-20%',
      transform: 'translate(-50%, -50%)',
    },
  };

function Index({isOpen, dataActivity}){
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [Activity, setAtividade] = useState(dataActivity.Activity)

  
      function Cancelar3(){
        window.location.reload(true)
      }
    
      async function handleUpdate(e){
        e.preventDefault()

        const Atividade = {
          "Activity": Activity,
          "Number_Spare": dataActivity.Number_Spare,
          "Course": sessionStorage.getItem('Curso'),
        }
          axios.put('http://localhost:3333/Atividade', Atividade)
          alert('Atividade Alterada com sucesso!')
          window.location.reload(true)
      }
    

    return(
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        >
            <h1 className='Atividade'>Atualizar Atividade</h1>

              <div className='DivtextareActivi'>
                <textarea className='TextAreaAtivi' value={Activity} onChange={({target}) => setAtividade(target.value)}/>
              </div>
              
              <div className='Botões'>
                <Button onClick={handleUpdate}>Enviar</Button>
                <Button className='SpaceB' onClick={Cancelar3}>Cancelar</Button>
              </div>

        </Modal>
    )
}

export default Index