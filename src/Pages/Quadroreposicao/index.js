import api from '../../Service/api';
import { Button, Container, Form, Table } from 'react-bootstrap'
import Cabeca_voltar from '../../Component/Header_voltar';
import React, { useEffect, useState } from 'react';
import './quad.css'
import PDF from '../../pdf'
import ModalUpdate from '../../Component/Modal'

function Index() {


  const date = new Date();
  const DateNow = date.toLocaleDateString()

  const [Spares, setSpare] = useState([]); 
  useEffect(() => {
    async function getSpare() {
      const Course = sessionStorage.getItem('Curso')
      const teste = {
        Course
      }
      const {data} = await api.post('/spareget', teste);
      if(data == ''){
        Spares = 'Não há reposições'
        setSpare(data)
      }else{
        setSpare(data)
        console.log(data);
      }

    }
    getSpare();
  }, []);


  const [Course, setCurso] = useState(''); 
  const Name_User = sessionStorage.getItem('Login')


  async function Filter(e) {

    e.preventDefault(); 

    try {
      const dataCurso = { 
        Course
      }

      if(sessionStorage.getItem('Login') != 'Admin'){
        alert('Você não tem acesso a esta opção!')
      }else{

        if (Course == 'Selecione o curso') {  
          alert('Escolha um curso')
          window.location.reload(true);
  
        } 
        else {
            const {data} = await api.post('/spareget', dataCurso)
  
            if(data == ''){
              alert('Não há dados de reposição')
            }else{
              setSpare(data); 
            } 
          }
        
      }

    } catch (err) {
      alert(`Erro na requisição ${err}`); 
    }
  }

  const [Course2, setCourse2] = useState([]); 
  useEffect(() => {
    async function getCourse2() {
      const { data } = await api.get('/course'); 
      setCourse2(data); 
      console.log(data);
    }
    getCourse2();
  }, []);

   const [ModalUp, setModalUp] = useState(false)
   const [NameSpareItem, setSpareItem] = useState('')



   function ShowModal(Spare){
     if(sessionStorage.getItem('Login') == 'Admin'){
      alert('O administrador não pode editar reposições')
     }else{
      setModalUp(true)
      setSpareItem(Spare)
     }
   }

  

  function PrivateFilter(){
    if(sessionStorage.getItem('Login') != 'Admin'){
      alert('Você não pode acessar esta opção')
    }
  }

  async function DeleteReposicao(){

   if(sessionStorage.getItem('Login') == 'Admin'){
    alert('O administrador não pode excluir reposições!')

   }else{

    var Number_Spare = window.prompt('Digite o número da reposição')
    const Course = sessionStorage.getItem('Curso')

    const exclusao ={
      Course, Number_Spare
    }

    if(Number_Spare != ''){

      const {data} = await api.post('/DeleteRep', exclusao )

      if(data == ''){
        alert(`A reposição ${Number_Spare} não existe!`)
      }else{
        var confirmation = window.confirm('Confirma a exclusão?')
        if(confirmation == true){
          
          await api.post('/Delete', exclusao)
          alert(`Reposição ${Number_Spare} do curso ${Course} apagado com sucesso!`)
          window.location.reload(true)
        }else if (confirmation == false){
          alert('Operação cancelada!')
        }
      }

    }else{
      alert('Digite o número da reposição')
    }
  }
  }

  const NomeCurso = sessionStorage.getItem('Curso')

  return (
    <div className='fundo'>
       { ModalUp && <ModalUpdate isOpen={ModalUp} dataSpare={NameSpareItem} /> } 

      <Cabeca_voltar /> 
      <p className='NomeCurso'>{NomeCurso}</p>

      <div  className='DivFilter FilterCurso'>

        <Form.Label>Filtre o curso:</Form.Label>

      </div>

      <div className='DivFilter'>

        <Form.Select className='Curso' onClick={PrivateFilter} value={Course} onChange={e => setCurso(e.target.value)} > 
          <option>Selecione o curso</option>
          {
            Course2.map((curso) => (
              <option>{curso.Name_Course}</option>
            ))
          }
        </Form.Select>
      </div>

      <div className='DivBusca'>

        <Button onClick={Filter}>Buscar</Button> 
        <Button className='BotaoApagar' onClick={DeleteReposicao}>Excluir reposições</Button> 
      </div>

      <Container className='TableCont'>
        <Table id='Tabela01' className='Cor'>
          <thead className='Head'>
            <tr>
              <th className='Head Titulos'>Número Da Reposição</th>
              <th className='Head Titulos'>Data Da falta</th>
              <th className='Head Titulos'>Semestre</th>
              <th className='Head Titulos'>Período</th>
              <th className='Head Titulos'>Turma</th>
              <th className='Head Titulos'>Tipo De Reposição</th>
              <th className='Head Titulos'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              Spares.map((Spare) => ( // Trazendo os dados de reposição cadastrados no banco de dados

                <tr>
                  <td className='Head'>{Spare.Number_Spare}</td>
                  <td className='Head'>{Spare.Date_Spare}</td>
                  <td className='Head'>{Spare.Semester}</td>
                  <td className='Head'>{Spare.Period}</td>
                  <td className='Head'>{Spare.Course}</td>
                  <td className='Head'>{Spare.Type_Spare}</td>
                  <td className='Head'><Button onClick={() => ShowModal(Spare)}>Editar</Button></td>
                </tr>

              ))
            }

          </tbody>
        </Table>

        <Table id='Tabela02' className='Cor'>
          <thead className='Head'>
            <th className='Head Titulos'>Motivo</th>
            <th className='Head Titulos'>Aulas Não Prestadas</th>
            <th className='Head Titulos'>Componente Curricular</th>
            <th className='Head Titulos'>Horário Da Reposição</th>
            <th className='Head Titulos'>Adicional Noturno</th>
          </thead>
          <tbody>
            {
              Spares.map(Spare => ( 
                <tr>
                  <td className='Head'>{Spare.Reason}</td>
                  <td className='Head'>{Spare.Block_}</td>
                  <td className='Head'>{Spare.Name_component}</td>
                  <td className='Head'>{Spare.Hour_Start} às {Spare.Hour_End}</td>
                  <td className='Head'>{Spare.Aditional}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>

        <Table id='Tabela03' className='Cor'>
          <thead className='Head'>
            <th className='Head Titulos'>Professor Ausente</th>
            <th className='Head Titulos'>Professor Da Reposição</th>
            <th className='Head Titulos'>Data De Substituição</th>
          </thead>
          <tbody>
            {
              Spares.map(Spare => ( 
                <tr>
                  <td className='Head'>{Spare.Name_Teachers}</td>
                  <td className='Head'>{Spare.Name_Spare}</td>
                  <td className='Head'>{Spare.Date_Spare}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>


        <Button className='BotaoImp' onClick={(e) => PDF(Spares)}>Gerar PDF</Button>


      </Container>

    </div>
  );
}


export default Index