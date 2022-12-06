import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Header_Cursos from '../../Component/Header_Cursos'
import api from '../../Service/api'
import './index.css'
import ModalCurso from '../../Component/ModalCurso'
import ModalCursoDelete from '../../Component/ModalCursoDelete'


function Index(){

    const [Cursos, setCursos] = useState([])
    useEffect (() => {
        async function GetCurso(){
            const {data} = await api.get('/course')
            setCursos(data)
        }
        GetCurso()
    }
 )
    
 const [ModalC, setModalC] = useState(false)
 const [loadModalDelete, setLoadModalDelete] = useState(false);
 
 function ShowModal(){
    if(sessionStorage.getItem('Login') == 'Admin'){
        setModalC(true)
    }else{
        alert('Você não têm acesso a essa opção!')
    }
 }

 function DeleteModal(){
    if(sessionStorage.getItem('Login') == 'Admin'){
        setLoadModalDelete(true)
    }else{
        alert('Você não têm acesso a essa opção!')
    }
 }

  
    
    return(
        <div className="App"  >
            <Header_Cursos/>
            { ModalC && <ModalCurso isOpen={ModalC} /> } 

            {loadModalDelete && <ModalCursoDelete isOpen={loadModalDelete} />}
            <Container>
                <Table className="TableCursos">
                    <thead>
                        <th className="TableCampos">Número De Identificação</th>
                        <th className="TableCampos">Nome Do Curso</th>
                        <th className="TableCampos">Duração</th>
                        <th className="TableCampos">Período</th>
                        <th className="TableCampos">Quantidade De Semestres</th>
                        <th className="TableCampos">Abreviação</th>
                    </thead>
                    <tbody>
                        {
                            Cursos.map((curso) => (
                                <tr>
                                    <td className="TableCampos">{curso.idCourses}</td>
                                    <td className="TableCampos">{curso.Name_Course}</td>
                                    <td className="TableCampos">{curso.Duration}</td>
                                    <td className="TableCampos">{curso.Period}</td>
                                    <td className="TableCampos">{curso.Qtde_Semester}</td>
                                    <td className="TableCampos">{curso.Abreviation}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Button  onClick={ShowModal}>Cadastrar Curso</Button>
                <Button className="SpaceCursoD" onClick={DeleteModal}>Excluir Curso</Button>
            </Container>
       </div>
    )
}

export default Index