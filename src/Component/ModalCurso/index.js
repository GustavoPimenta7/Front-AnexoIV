import  Modal  from "react-modal";
import React, {useState} from "react";
import './index.css'
import { Button, Container } from "react-bootstrap";
import api from '../../Service/api'

const customStyles = {
    content: {
      top: '30%',
      marginTop: '9%',
      height: '90%',
      left: '50%',
      RIGHT: 'auto',
      transform: 'translate(-50%, -50%)',
    }
  }

function Index(isOpen){
    const [modalIsOpen, setIsOpen] = useState(isOpen)

    const [Name_Course, setNCourse] = useState('')
    const [Duration, setDuration] = useState('')
    const [Period, setPeriod] = useState('')
    const [Qtde_Semester, setSemester] = useState('')
    const [Abreviation, setAbreviation] = useState('')
    
  function closeModal() {
    setIsOpen(false);
  }

  function Cancelar(){
    window.location.reload(true)
}

  async function NewCourse(){
    const Curso = {
        Name_Course, Duration, Period, Qtde_Semester ,Abreviation
    }

    const CursoVerify = {
        Name_Course
    }

    if(Name_Course == '' || Duration == '' || Period == '' || Qtde_Semester == ''){
        alert('Preencha os campos obrigatórios!')
    }else{
 
    try{
    const {data} = await api.post('/CourseVerify', CursoVerify)
    if(data == ''){
        await api.post('/InsertCurso', Curso)
        alert('Curso Cadastrado com sucesso!')
        window.location.reload(true)
    }else{
        alert(`O curso ${Name_Course} já existe!`)
    }

    }catch(err){
        alert(`Houve um erro ${err}`)
    }
   }
  }
    return(
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
        <h1 className="h1">Cadastrar Cursos</h1>
        <Container className="Cont">
        
            <div className="Cont2">
                <label className="bold" >Nome Do Curso:*</label>
            </div>

            <div className="Cont2">
                <input  className="TInputs" value={Name_Course} onChange={e => setNCourse(e.target.value)}/>
            </div>

            <div className="Cont2">
                <label className="bold">Duração (Anos):*</label>
            </div>

            <div className="Cont2">
               
                <input  className="TInputs" value={Duration} onChange={e => setDuration(e.target.value)}/>
            </div>

            <div className="Cont2">
                <label className="bold">Período:*</label>
            </div>
            
            <div className="Cont2">
                <input className="TInputs" value={Period} onChange={e => setPeriod(e.target.value)}/>
            </div>

            <div className="Cont2">
                <label className="bold">Quantidade De Semestres:*</label>
            </div>

            <div className="Cont2">
                <input className="TInputs" value={Qtde_Semester} onChange={e => setSemester(e.target.value)}/>
            </div>

            <div className="Cont2">
                <label className="bold">Abreviação (Opcional):</label>
            </div>

            <div className="Cont2">
                <input className="TInputs" value={Abreviation} onChange={e => setAbreviation(e.target.value)}/>
            </div>

            <Button className="BotaoCurso" onClick={NewCourse}>Enviar</Button>
            <Button className="BotaoCurso SpaceCurso" onClick={Cancelar}>Cancelar</Button>
        </Container>
        </Modal>
    )
}

export default Index;