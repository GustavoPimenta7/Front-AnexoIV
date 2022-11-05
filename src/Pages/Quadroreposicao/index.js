import api from '../../Service/api';
import {Button, Container, Form, Table} from 'react-bootstrap'
import Cabeca_voltar from '../../Component/Header_voltar';
import React, {useEffect, useState} from 'react';
import './quad.css'

function Index() {

  // Função para printar a tela
  function Print(){
    window.print();
  }

  // Função para recarregar a página
  function Reload(){
    window.location.reload(true)
  }

  const [Spares, setSpare] = useState([]); // Variável para setar os dados do banco

  // Pegando dados de reposição do banco de dados
  useEffect(() =>{
    async function getSpare(){
       const {data} = await api.get('/spare');
       console.log(data); 
    }
    getSpare();  
  }, []); 

  const [Course, setCurso] = useState(''); // Variável para setar o curso vindo do select

  // Função para filtrar os dados de reposição por curso
  async function Filter(e){

     e.preventDefault(); // Evita que a página recarregue

      try{
         const dataCurso = { // Variável que será mandada para o banco
             Course
          }

          // Fazendo comparações com if else
          if(Course == 'Selecione o curso'){ // Verificando se a variável é igual ao select de entrada 
            alert('Recarregando...')
            window.location.reload(true); 

          }else{
            const {data} = await api.post('/spareget', dataCurso); // Enviando o dado de curso para o banco de dados

            if(data == ''){ // Verificando se a variável com os dados de respoição possuem dados referentes ao curso selecionado
              alert('Não há dados referente a este curso');
                
            }else{
              setSpare(data); // Setando os dados na variável de reposição
              console.log(data);
            }
          }
   
       
  
      }catch(err){
          alert(`Erro na requisição ${err}`); // Caso aja erro na requisição

      }
     }


  const [Course2, setCourse2] = useState([]); // Variável para setar os cursos cadastrados no banco de dados
  useEffect(() =>{
    async function getCourse2(){
      const {data} = await api.get('/course'); // Abrindo a rota de curso
      setCourse2(data); // Setando o resultado na variável
      console.log(data);  
    }
    getCourse2();  
  }, []); 

  return (
    <div className='fundo'>
      <Cabeca_voltar/> {/* Chamando o header de quadro de reposição */}


  <div className='DivFilter FilterCurso'>

    <Form.Label>Filtre seu curso:</Form.Label>

  </div>

  <div className='DivFilter'>

     <Form.Select className='Curso' value={Course} onChange={e => setCurso(e.target.value)} > {/* Pegando o curso selecionado */}
         <option>Selecione o curso</option>
        {
        Course2.map((curso) => ( // Trazendo os cursos cadastrados do banco de dados
        <option>{curso.Name_Course}</option>
       ))
      
    }
    </Form.Select>

  </div>

  <Button onClick={Filter}>Buscar</Button> {/* Ativa a função de filtrar o curso selecionado */}
  <Button className='ButtonRe' onClick={Reload}>Recarregar</Button> {/* Recarrega a página */}

  <Container>
      <Table className='Cor'>
      <thead className='Head'>
        <tr>
          <th className='Head Titulos'>Número Da Reposição</th>
          <th className='Head Titulos'>Data Da falta</th>
          <th className='Head Titulos'>Semestre</th>
          <th className='Head Titulos'>Período</th>
          <th className='Head Titulos'>Turma</th>
          <th className='Head Titulos'>Tipo De Reposição</th>
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
              </tr>
          
             ))
}      
          
        </tbody>
      </Table>

      <Table className='Cor'>
        <thead className='Head'>
          <th className='Head Titulos'>Motivo</th>
          <th className='Head Titulos'>Aulas Não Prestadas</th>
          <th className='Head Titulos'>Componente Curricular</th>
          <th className='Head Titulos'>Horário Da Reposição</th>
          <th className='Head Titulos'>Adicional Noturno</th>
        </thead>
        <tbody>
        {
          Spares.map(Spare => ( // Trazendo os dados de reposição cadastrados no banco de dados
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

      <Table className='Cor'>
        <thead className='Head'>
          <th className='Head Titulos'>Professor Ausente</th>
          <th className='Head Titulos'>Professor Da Reposição</th>
          <th className='Head Titulos'>Data De Substituição</th>
          <th className='Head Titulos'>Data De Preenchimento</th>
        </thead>
        <tbody>
        {
          Spares.map(Spare => ( // Trazendo os dados de reposição cadastrados no banco de dados
            <tr>
              <td className='Head'>{Spare.Name_Teachers}</td>
              <td className='Head'>{Spare.Name_Spare}</td>
              <td className='Head'>{Spare.Date_Spare}</td>
              <td className='Head'>{Spare.Date_Fill}</td>
            </tr>
          ))
        }
        </tbody>
      </Table>

      <Button className='BotaoImp' onClick={Print}>Imprimir</Button> {/* Ativa a função de printar a tela */}
    </Container>
    </div>
  );
}

export default Index;