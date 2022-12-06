import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, FormLabel } from 'react-bootstrap'
import Cabeca_voltar from '../../Component/Header_voltar';
import api from '../../Service/api';
import './plan.css'
import PDF3 from './pdf2';
import ModalAtividade from '../../Component/ModalActivity'


 function Index() {

  const [Spares, setSpare] = useState([]);
  useEffect(() => {
    async function getSpare() {
      const { data } = await api.get('/spare');
      console.log(data)
    }
    getSpare();
  })

  let [Course, setCurso] = useState('');
  const [Number_Spare, setNumber] = useState('');

  const Name_User = sessionStorage.getItem('Login')

  async function Filter() {
    

    const dataNumber = {
      Course, Number_Spare
    }

    const dataCurso = {
      Course
    }


    if(sessionStorage.getItem('Login') != 'Admin'){
      Course = sessionStorage.getItem('Curso')
      const dataNumberCord = {
        Course, Number_Spare
      }
      console.log(Course)
     
      if(Number_Spare == '' || Number_Spare == 0){
        Course = sessionStorage.getItem('Curso')
        const dataCoord = {
          Course
        }
        const { data } = await api.post('/spareget', dataCoord)
        if(data == ''){
          alert('Não há dados de reposição!')
        }else{
          setSpare(data)
        }

      }else{
        const {data} = await api.post('/plano', dataNumberCord)
        if(data == ''){
          alert('Essa reposição não existe!')

          }else{
            setSpare(data)
          }
      }
      
    }else{
        if(Number_Spare == '' || Number_Spare == 0){
          const { data } = await api.post('/spareget', dataCurso)
          if(data == ''){
            alert('Não há reposições feitas!')
          }else{
            setSpare(data)
          }
        } else{
          const {data} = await api.post('/plano', dataNumber)
            if(data == ''){
              alert('Essa reposição não existe!')
              
              }else{
                setSpare(data)
              }
            }
        }


  }


  function Private(){
    if(sessionStorage.getItem('Login') != 'Admin'){
      alert('Você não tem acesso a esta opção!')
    }
  }

  const [Course2, setCourse2] = useState([]); // Variável para setar os cursos cadastrados no banco de dados
  useEffect(() => {
    async function getCourse2() {
      const { data } = await api.get('/course'); // Abrindo a rota de curso
      setCourse2(data); // Setando o resultado na variável
      console.log(data);
    }
    getCourse2();
  }, []);

  const [ModalUp2, setModalUp2] = useState(false)
  const [ActivityItem, setActivityItem] = useState('')

  function ShowModal(spare){
    if(sessionStorage.getItem('Login') == 'Admin'){
      alert('O administrador não pode alterar dados de reposição!')
    }else{
      setModalUp2(true)
      setActivityItem(spare)
    }
  }

  const NomeCurso = sessionStorage.getItem('Curso')

  return (
    <div className='fundo3'>
      <Cabeca_voltar />

      { ModalUp2 && <ModalAtividade isOpen={ModalUp2} dataActivity={ActivityItem} />}

      <Container>

      <p className='NomeCursoPlano'>{NomeCurso}</p>

        <div className='DivFilterPlan'>

          <Form.Label className='CorPlan CursoPlan'>Filtre seu curso:</Form.Label>
        </div>

        <div className='DivFilterPlan'>

          <Form.Select className='CursoPlan' onClick={Private} value={Course} onChange={e => setCurso(e.target.value)}>
            <option>Selecione o curso</option>
            {
              Course2.map((curso) => (
                <option>{curso.Name_Course}</option>
              ))
            }
          </Form.Select>
        </div>


        <Form.Label className='CorPlan Margin'>N° Reposição (Opcional):</Form.Label>
        <input type='number' className='NInput' value={Number_Spare} onChange={e => setNumber(e.target.value)} />
        <Button className='Filterbotton' onClick={Filter}>Buscar</Button>

        <Table className='Cor2'>
          <thead className='Head2'>
            <tr>
              <th className='Head2 Titulos'>Reposição De Aulas</th>
              <th className='Head2 Titulos'>Tipo De Reposição</th>
              <th className='Head2 Titulos'>Professor Ausente</th>
              <th className='Head2 Titulos'>Data Da Falta</th>
              <th className='Head2 Titulos'>Componente Curricular</th>
              <th className='Head2 Titulos'>Curso</th>
            </tr>
          </thead>
          <tbody>
            {
              Spares.map((spare) => (
                <tr>
                  <td className='Head2 Titulos'>{spare.Number_Spare}</td>
                  <td className='Head2'>{spare.Type_Spare}</td>
                  <td className='Head2'>{spare.Name_Teachers}</td>
                  <td className='Head2'>{spare.Date_Spare}</td>
                  <td className='Head2'>{spare.Name_component}</td>
                  <td className='Head2'>{spare.Course}</td>
                </tr>
              ))
            }

          </tbody>
        </Table>
        <Table className='Cor2'>
          <thead className='Head2'>
            <tr>
              <th className='Head2 Titulos'>Horário Da Aula</th>
              <th className='Head2 Titulos'>Número De Aulas</th>
              <th className='Head2 Titulos'>Professor Da Reposição</th>
              <th className='Head2 Titulos'>Data Da Reposição</th>
              <th className='Head2 Titulos'>Horário Da Reposição</th>
              <th className='Head2 Titulos'>Adicional Noturno</th>
            </tr>
          </thead>
          <tbody>
            {
              Spares.map((spare) => (
                <tr>
                  <td className='Head2 Titulos'>{spare.Hour_Start} às {spare.Hour_End}</td>
                  <td className='Head2'>{spare.Block_}</td>
                  <td className='Head2'>{spare.Name_Spare}</td>
                  <td className='Head2'>{spare.Date_Spare}</td>
                  <td className='Head2'>{spare.Hour_Start} às {spare.Hour_End}</td>
                  <td className='Head2'>{spare.Aditional}</td>

                </tr>
              ))
            }

          </tbody>
        </Table>

        <Table className='Cor2'>
          <thead className='Head2'>
            <th className='Head2'>Atividades Desenvolvidas</th>
          </thead>
          <tbody>
            {
              Spares.map((spare) => (
                <tr>
                  <td className='Head2'>{spare.Activity}</td>
                  <td className='Head2'><Button onClick={() => ShowModal(spare)}>Editar</Button></td>      
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>

      <div>
        <Button className='BotaoPlano' onClick={e => PDF3(Spares)}>Gerar PDF</Button>
      </div>

    </div>
  );
}

export default Index;