import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container, FloatingLabel, Ratio, Table} from 'react-bootstrap'
import React, {useState, onChange, useEffect} from 'react';
import api from '../../Service/api';
import Cabeca_voltar from '../../Component/Header_voltar';
import './cont.css';

function Index() {
  const [Name_Teachers, setTeachers] = useState('');
  const [Name_Spare, setSpare] = useState('');

  const [Number_Spare, setNumber] = useState('');
  const [Date_Spare, setDate] = useState('');
  const [Date_Fill, setFill] = useState('');
  const [Type_Spare, setTypeSpare] = useState('');
  const [Reason, setReason] = useState('');
  const [Course, setCourse] = useState('');
  const [Semester, setSemester] = useState('');
  const [Period, setPeriod] = useState('');

  const [Name_component, setComponent] = useState('');
  const [Hour_Start, setStart] = useState('');
  const [Hour_End, setEnd] = useState('');
  const [Block_, setClassrom] = useState('');
  const [Activity, setActivity] = useState('');

  let Aditional = '';

  function Outros(){
    const input = document.getElementById('Select1').value;

    if (input == 'Outros'){
      input = document.getElementById('Outros').style.display = 'inline-block';

    }else{
      input = document.getElementById('Outros').style.display = 'none';

    }
  }

  function Outros2(){
    const input = document.getElementById('Select2').value;

    if(input == 'Outros'){
      input = document.getElementById('Outros2').style.display =  'inline-block';

    }else{
      input = document.getElementById('Outros2').style.display = 'none';

    }
  }

  async function CreateAnexo(e){

    e.preventDefault()

     try{

      let check = document.getElementById('Check');
      let checkVerify = document.getElementById('Checked');

      if(check.checked){  
       Aditional = 'Sim';

      }else{       
       Aditional = 'Não';

      }
            
        const spare ={
          Number_Spare, Date_Spare, Date_Fill, Type_Spare, Reason, Course, Semester, Period, 
          Name_Teachers, Name_Spare, Name_component, Hour_Start, Hour_End, Block_, Aditional, Activity
    }
    

     if(Name_Spare == '' || Name_Teachers == '' || Course == ''){
        alert('Preencha todos os campos');

     }else if (Number_Spare == '' || Date_Spare == '' || Date_Fill == '' || Type_Spare == '' || Reason == '' || Course == '' 
     || Semester == '' || Period == ''){

      alert('Preencha todos os campos');
     }else if (Name_component == '' || Hour_Start == '' || Hour_End == '' || Block_ == '' || Course == ''){

      alert('Preencha todos os campos');
     }else if(Activity == ''){
      alert('Peencha todos os campos');

     }
     
     else{

      if(checkVerify.checked){
        await api.post('/spare', spare);
        alert('Dados enviados com sucesso');
        window.location.href = '/Quadroreposicao';

      }else{
        e.preventDefault();
        alert('Marque a caixa de conscientização');
      }

     }

     }catch(err){
         alert(`Houve um erro: ${err}`);

     }
}

const [Name_Course, setNameCourse] = useState([]);   
useEffect(() =>{
  async function getCourse(){
    const {data} = await api.get('/course');
    setNameCourse(data);
    console.log(data);  
  }
  getCourse();  
}, []); 

const [NameTypeSpare, setType] = useState([]);
useEffect(() =>{
  async function getTypeSpare(){
    const {data} = await api.get('/typespare');
    setType(data);
    console.log(data);  
  }
  getTypeSpare();  
}, []); 

const [seReason, setReasonSE] = useState([]);
useEffect(() =>{
  async function getReason(){
    const {data} = await api.get('/reasonSE');
    setReasonSE(data);
    console.log(data);  
  }
  getReason();  
}, []); 

const [classes, setClasses] = useState([])
useEffect(() =>{
  async function getClasses(){
    const {data} = await api.get('/classes');
    setClasses(data);
    console.log(data);  
  }
  getClasses();  
}, []); 

const [sePeriod, setPeriodSe] = useState([])
useEffect(() =>{
  async function getPeriod(){
    const {data} = await api.get('/period');
    setPeriodSe(data);
    console.log(data);  
  }
  getPeriod();  
}, []); 

const [BlockSe, setBlockSe] = useState([])
useEffect(() =>{
  async function getblock(){
    const {data} = await api.get('/block');
    setBlockSe(data);
    console.log(data);  
  }
  getblock();  
}, []);


  return (
<div className='fundo2'>

      <Cabeca_voltar /> 

  <Form className='fundo2'> 

    <Container className='formulario2'>

  <center>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridtext">
          <Form.Label className='label2'>Número Da Reposição:</Form.Label>
          <Form.Control value={Number_Spare} onChange={e => setNumber(e.target.value)} type="text" placeholder="Número da reposição" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridtext">
          <Form.Label className='label2'>Professor ausente:</Form.Label>
          <Form.Control type="text" placeholder="Nome do professor ausente"  value={Name_Teachers} 
          onChange={e => setTeachers(e.target.value)} />
        </Form.Group>
      
        <Form.Group as={Col} controlId="formGridtext">
          <Form.Label className='label2'>Professor substituto:</Form.Label>
          <Form.Control type="text" placeholder="Nome do professor substituto" value={Name_Spare} 
          onChange={e => setSpare(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridtext">
          <Form.Label className='label2'>Componente curricular:</Form.Label>
          <Form.Control id="tex" type="text" placeholder="Digite o Componente"  value={Name_component} 
          onChange={e => setComponent(e.target.value)} />
        </Form.Group>

     
  
        </Row>

        <Row className="mb-2  ">
        <Form.Group as={Col} controlId="formGridreposição">
          <Form.Label className='label2'>Tipo de reposição:</Form.Label>
          <Form.Select id='Select1' onClick={Outros} value={Type_Spare} onChange={e => setTypeSpare(e.target.value) }>
            <option></option>
            {
                NameTypeSpare.map((Type_Spare) => (
                 <option>{Type_Spare.NameTypeSpare}</option> 
                )) 
            } 
          </Form.Select>
          <Form.Control id='Outros' type='text' className='CaixaPreta' placeholder='Especifique' 
          onChange={e => setTypeSpare(e.target.value) }/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridmotivo">
          <Form.Label className='label2'>Motivo da falta:</Form.Label>
          <Form.Select id='Select2' onClick={Outros2} value={Reason} onChange={e => setReason(e.target.value)}>
            <option selected></option>
            {
              seReason.map((Reasonse) => (
                <option>{Reasonse.NameReason}</option>
              ))
            }
          </Form.Select> 
          <Form.Control id='Outros2' type='text' className='CaixaPreta' placeholder='Especifique' 
          onChange={e => setReason(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className='label2'>Curso:</Form.Label>
            <Form.Select id='CursoTeste' value={Course} onChange={e => setCourse(e.target.value)} >
              <option selected></option>
              {
                Name_Course.map((Course) =>(
                  <option>{Course.Name_Course}</option>
                ))
              }
              </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-2">
  

        <Form.Group as={Col} controlId="formGridTurma">
          <Form.Label className='label2'>Semestre:</Form.Label>
          <Form.Select value={Semester} onChange={e => setSemester(e.target.value)}>
            <option selected></option>
            {
              classes.map((Classe) =>(
                <option>{Classe.Name_Semester}</option>
              ))
            }
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTurma">
          <Form.Label className='label2'>Periodo:</Form.Label>
          <Form.Select value={Period} onChange={e => setPeriod(e.target.value)} >
            <option selected></option>
            {
              sePeriod.map((period) => (
                <option>{period.Name_Period}</option>
              ))
            }
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridnum">
          <Form.Label className='label2'>Bloco:</Form.Label>
          <Form.Select value={Block_} onChange={e => setClassrom(e.target.value)}>
            <option selected></option>
            {
              BlockSe.map((block) => (
                <option>{block.NameBlock}</option>
              ))
            }
          </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridnum">
          <Form.Label className='label2'>Horário do inicio da aula:</Form.Label>
          <Form.Control id="nu" type="time" placeholder="ex: 13h às 17h25" value={Hour_Start}  
          onChange={e => setStart(e.target.value)}/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridnum">
          <Form.Label className='label2'>Horário do término da aula:</Form.Label>
          <Form.Control id="nu" type="time" placeholder="ex: 13h às 17h25" value={Hour_End}  
          onChange={e => setEnd(e.target.value)}/>
         <input id="Check" type='checkbox'/> <label className='check'>Adicional Noturno?</label>
        </Form.Group>

        <Form.Group as={Col} controlId="formGriddate">
          <Form.Label className='label2'>Data da falta e substituição:</Form.Label>
          <Form.Control type="date" placeholder="**/**/**" value={Date_Spare} 
          onChange={e => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGriddate">
          <Form.Label className='label2'>Data de preenchimento:</Form.Label>
          <Form.Control id="datee" type="date" placeholder="**/**/**" value={Date_Fill} 
          onChange={e => setFill(e.target.value)} />
        </Form.Group>

        </Row>

        <Row className="mb-3">
          <label className='label2'>Atividades Desenvolvidas Em Aula:</label>
          <div className='divtextarea'>
            <textarea class="form-control" className='label4' aria-label="Com textarea" 
            value={Activity} onChange={e => setActivity(e.target.value)} />
          </div>
        </Row>

        
    </center>
    <input className='CheckBox' id="Checked" type='checkbox'/> <label className='check'>Ao preencher todos os campos, o coordenador declara estar ciente
           da veracidade das informações prestadas</label>

    <center>

      <div>
        <Button className="for" variant="primary" type="submit" onClick={CreateAnexo}>Enviar</Button>

      </div>
    
    </center>

  </Container>

    </Form>
</div>
    

  );
}

export default Index;
