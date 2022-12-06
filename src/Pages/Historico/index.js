import React, { useEffect, useState } from 'react'
import { Button, Col, Card, CardGroup, Container, Form, Table } from 'react-bootstrap'
import api from '../../Service/api'
import Historico from '../../Component/Header_Historico'
import './index.css'

function Index(){

    const [Course_Back, setCursoBack] = useState('');
    const [MonthNow, setMonth] = useState('');
    const [YearNow, setYear] = useState('');
    const [StateBack, setState] = useState('');
    const [BackSpare, setBack] = useState([]);

    const [Course, setCourse] = useState([])

    useEffect(() => {
        async function getBack(){
         await api.get('/getBack')
        }
        getBack()
    })

    useEffect(() => {
        async function getCourse(){
            const {data} = await api.get('/course')
            setCourse(data)
        }
        getCourse()
    })

    async function Backup(){

        const Backup ={
            Course_Back, MonthNow, YearNow, StateBack
        }

        const {data} = await api.post('/getBack', Backup)
        if(Course_Back == '' || MonthNow == '' || YearNow == '' || StateBack == ''){
            alert('Preencha todos os campos!')
        }else if(data == ''){
            alert('Nenhuma reposição encontrada!')
        }else{
            setBack(data)
        }
    }
    return(
        <div className='Historico'>
            <Historico />

       
            <Form.Label className='CorHistorico FiltercursoLabel'>Filtre o curso:</Form.Label>
            <div className='CursoFilter'>   
                <Form.Select value={Course_Back} onChange={e => setCursoBack(e.target.value)} className='SelecaoHistorico'>
                    <option>Selecione o curso</option>
                    {
                        Course.map((curso) => (
                            <option>{curso.Name_Course}</option>
                        ))
                    }
                </Form.Select>
            </div>

            <Form.Label className='CorHistorico LabelMes'>Mês:</Form.Label>
            <div className='MesFilter'>
                <input type='number' className='SelecaoMes'  value={MonthNow} onChange={e => setMonth(e.target.value)}/>
            </div>

            <Form.Label className='CorHistorico LabelYear'>Ano:</Form.Label>
            <div className='YearFilter'>
                <input type='number' className='SelecaoYear'  value={YearNow} onChange={e => setYear(e.target.value)}/>
            </div>

            <div className='CursoFilter'>   
                <Form.Select value={StateBack} className='Estado' onChange={e => setState(e.target.value)} >
                    <option>Estado</option>
                    <option>Ativo</option>
                    <option>Inativo</option>     
                </Form.Select>
            </div>

            <div className='BotaoHistorico'>
                <Button className='buttonHistorico' onClick={Backup}>Buscar</Button>
            </div>
 

        <Container className='CenterHistorico TableHistorico'>
            <Table className='TabelaHistory'>
                <thead>
                    <th className='TableCamposHistorico'>Número Da Reposição</th>
                    <th className='TableCamposHistorico'>Data De Reposição</th>
                    <th className='TableCamposHistorico'>Tipo De Reposição</th>
                    <th className='TableCamposHistorico'>Motivo</th>
                    <th className='TableCamposHistorico'>Curso</th>
                    <th className='TableCamposHistorico'>Semestre</th>
                </thead>
                <tbody>
                    {
                        BackSpare.map((back) => (
                            <tr>
                                <td className='TableCamposHistorico'>{back.NumberSpare_Back}</td>
                                <td className='TableCamposHistorico'>{back.DateSpare_Back}</td>
                                <td className='TableCamposHistorico'>{back.TypeSpare_Back}</td>
                                <td className='TableCamposHistorico'>{back.Reason_Back}</td>
                                <td className='TableCamposHistorico'>{back.Course_Back}</td>
                                <td className='TableCamposHistorico'>{back.Semester_Back}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Table className='TabelaHistory2'>
                <thead>
                    <th className='TableCamposHistorico'>Período</th>
                    <th className='TableCamposHistorico'>Professor Ausente</th>
                    <th className='TableCamposHistorico'>Professor Da Reposição</th>
                    <th className='TableCamposHistorico'>Componente Curricular</th>
                    <th className='TableCamposHistorico'>Hora Inicial</th>
                    <th className='TableCamposHistorico'>Hora Final</th>
                </thead>
                <tbody>
                    {
                        BackSpare.map((back) => (
                            <tr>
                                <td className='TableCamposHistorico'>{back.Period_Back}</td>
                                <td className='TableCamposHistorico'>{back.NameTeachers_Back}</td>
                                <td className='TableCamposHistorico'>{back.NameSpare_Back}</td>
                                <td className='TableCamposHistorico'>{back.NameComponent_Back}</td>
                                <td className='TableCamposHistorico'>{back.HourStart_Back}</td>
                                <td className='TableCamposHistorico'>{back.HourEnd_Back}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Table className='TabelaHistory3'>
                <thead>
                    <th className='TableCamposHistorico'>Bloco</th>
                    <th className='TableCamposHistorico'>Adicional Noturno</th>
                    <th className='TableCamposHistorico'>Mês</th>
                    <th className='TableCamposHistorico'>Ano</th>
                    <th className='TableCamposHistorico'>Estado</th>
                    <th className='TableCamposHistorico'>Data De Preenchimento</th>
                </thead>
                <tbody>
                    {
                        BackSpare.map((back) => (
                            <tr>
                                <td className='TableCamposHistorico'>{back.Block_Back}</td>
                                <td className='TableCamposHistorico'>{back.Aditional_Back}</td>
                                <td className='TableCamposHistorico'>{back.MonthNow}</td>
                                <td className='TableCamposHistorico'>{back.YearNow}</td>
                                <td className='TableCamposHistorico'>{back.State_Back}</td>
                                <td className='TableCamposHistorico'>{back.DateFill}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Table className='TabelaHistory4'>
                <thead>
                    <th className='TableCamposHistorico'>Atividades Desenvolvidas</th>
                </thead>
                <tbody>
                    {
                        BackSpare.map((back) => (
                            <tr>
                                <td className='TableCamposHistorico'>{back.Activity_Back}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
        </div>
    )
}

export default Index;