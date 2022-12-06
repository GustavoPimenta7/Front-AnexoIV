import  Modal  from "react-modal";
import React, {useState} from "react";
import './index.css'
import { Button, Container, Form } from "react-bootstrap";
import api from '../../Service/api'
import './index.css'
import { useEffect } from "react";


const customStyles = {
    content: {
      top: '30%',
      marginTop: '9%',
      height: '90%',
      left: '50%',
      RIGHT: 'auto',
      marginRight: '-30%',
      transform: 'translate(-50%, -50%)',
    }
  }


  function Index(isOpen){
    const [modalIsOpen, setIsOpen] = useState(isOpen)
    const [Curso, setCurso] = useState([])

    const [Email_User, setEmail] = useState('')
    const [Name_User, setUser] = useState('')
    const [User_Password, setSenha] = useState('') 
    const [Course_User, setCourse] = useState('')

    useEffect (() => {
        async function Curso(){
            const {data} = await api.get('/course')
            setCurso(data)
        }
        Curso()
    })

    
  function closeModal() {
    setIsOpen(false);
  }

  function Cancelar(){
    window.location.reload(true)
}

    async function CadastrarCoordenador(){

        const Coordenador ={
            Email_User, Name_User, Course_User
        }

        if(Email_User == '' || Name_User == '' || Course_User == ''){
            alert('Preencha todos os campos!')
        }else{
            if(Course_User.length == 'Selecione o curso'){
                alert('Selecione um curso')
            }else{
                const curso = {
                    Course_User
                }
                const {data} = await api.post('/CourseUser', curso)
                if(data == ''){
                    await api.post('user',Coordenador)
                    alert(`Coordenador(a) ${Name_User} cadastrado com sucesso!`)
                }else{
                    alert('Este curso já pertence a um coordenador')
                }
            }
        }
    }

    return(
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
        <h1>Cadastrar Coordenador</h1>

        <Container className="ContCadastro">
            <p>Nome Do Coordenador:*</p>
            <input className="InputsCoordenador" type='text' placeholder="Nome Do Coordenador" value={Name_User} onChange={e => setUser(e.target.value)}/>

            <p>Email Do Coordenador:*</p>
            <input className="InputsCoordenador"  type='text' placeholder="Email Do Coordenador" value={Email_User} onChange={e => setEmail(e.target.value)}/>

            <p>Curso:*</p>
            
            <Form.Select className="InputCursoSelect"  value={Course_User} onChange={e => setCourse(e.target.value)}>
                <option>Selecione o curso</option>
                {
                    Curso.map((curso) => (
                        <option>{curso.Name_Course}</option>
                    ))
                }
            </Form.Select>

            <div className="botoesCoordenador">
                <Button onClick={CadastrarCoordenador}>Cadastrar</Button>
                <Button onClick={Cancelar} className='CoordenadorCancelar'>Cancelar</Button>
            </div>
        </Container>
  
        </Modal>
    )
}

export default Index;