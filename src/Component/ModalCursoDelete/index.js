import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import api from "../../Service/api";
import { Button, Container, Form, Table } from 'react-bootstrap'
import './index.css'


const customStyles = {
    content: {
      top: '30%',
      marginTop: '9%',
      height: '90%',
      left: '50%',
      RIGHT: 'auto',
      marginRight: '-5%',
      transform: 'translate(-50%, -50%)',
    },
  };

function Index(isOpen){
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [idCourses, setIdCourses] = useState('')
 
    const [Cursos, setCursos] = useState([]);

    async function Buscar(){
        
        const CursoID = {
            idCourses
        }

        if(idCourses == ''){
            alert('Coloque o Id do curso que deseja excluir!')
        }else{
            const {data} = await api.post('/SelectCursoDelte', CursoID)
            if(data == ''){
                alert('Não encontrado!')
            }else{
                setCursos(data)
            }
        }
    }

    function closeModal(){
        setIsOpen(false);
      }

      function Cancelar(){
        window.location.reload(true)
      }

      async function DeletarCurso(){
                
        const CursoID = {
            idCourses
        }
          
        if(idCourses == ''){
            alert('Coloque o Id do curso que deseja excluir!')
        }else{
            var Course_User = window.prompt('Confirme o nome do curso:')
            if(Course_User == ''){
                alert('Preencha o campo!')
            }else{
                const verifyUserCurso ={
                    Course_User
                }
                const {data} = await api.post('/CourseUser', verifyUserCurso)
                if(data != ''){
                    alert('Você não pode apagar este curso porque existe um(a) coordenador(a) atrelado a ele. Exclua a conta dele antes de apagar o curso!')
                }else{
                    const Name_Course = Course_User
                    const VerifyCourse = {
                        Name_Course
                    }
                    const {data} = await api.post('/CourseVerify', VerifyCourse)
                    if(data == ''){
                        alert('Curso não encontrado. Verifique novamente!')
                    }else{
                        await api.post('/CourseDelete', CursoID)
                        alert('Curso apagado com sucesso!')
                        window.location.reload(true)
                    }
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
            <h3 className="h3">Excluir Cursos</h3>

            <div className="divDeleteCurso">
                <Form.Label className="IdN">Digite o número de identificação do curso:</Form.Label>
                <input className="InputID" value={idCourses} onChange={e => setIdCourses(e.target.value)} type='number'/>
                <Button className="BotaoNumberID" onClick={Buscar}>Selecionar</Button>
            </div>

            <Container className="CenterID">
                <Table className="CamposID">
                    <thead>
                        <th className="CamposID">Id</th>
                        <th className="CamposID">Curso</th>
                    </thead>
                    <tbody>
                        {
                            Cursos.map((curso) => (
                                <tr>
                                    <td className="CamposID">{curso.idCourses}</td>
                                    <td className="CamposID">{curso.Name_Course}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <div className="botoesID">
                    <Button onClick={DeletarCurso}>Excluir</Button>
                    <Button className="SpaceID" onClick={Cancelar}>Cancelar</Button>
                </div>
            </Container>            
        </Modal>
    )
}

export default Index;