import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import api from '../../Service/api';
import { Button, Container, Form, Table } from 'react-bootstrap'
import './index.css'
import axios from 'axios';

const customStyles = {
  content: {
    top: '30%',
    marginTop: '9%',
    height: '90%',
    left: '50%',
    RIGHT: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};


function Index({isOpen, dataSpare}) {

  const [modalIsOpen, setIsOpen] = useState(isOpen)
  const [Date_Spare, setDateSpare] = useState(dataSpare.Date_Spare)
  const [Semester, setSemester] = useState(dataSpare.Semester)
  const [Period, setPeriod] = useState(dataSpare.Period)
  const [Type_Spare, setType] = useState(dataSpare.Type_Spare)
  const [Reason, setReason] = useState(dataSpare.Reason)
  const [Block_, setBlock] = useState(dataSpare.Block_)
  const [Name_component, setComponent] = useState(dataSpare.Name_component)
  const [Hour_Start, setHourStart] = useState(dataSpare.Hour_Start)
  const [Hour_End, setHourEnd] = useState(dataSpare.Hour_End)
  const [Name_Teachers, setNameTeachers] = useState(dataSpare.Name_Teachers)
  const [Name_Spare, setNameSpare] = useState(dataSpare.Name_Spare)


  const [classes, setClasses] = useState([])
  useEffect(() => {
    async function getClasses() {
      const { data } = await api.get('/classes');
      setClasses(data);
      console.log(data);
    }
    getClasses();
  }, []);

  const [sePeriod, setPeriodSe] = useState([])
  useEffect(() => {
    async function getPeriod() {
      const { data } = await api.get('/period');
      setPeriodSe(data);
      console.log(data);
    }
    getPeriod();
  }, []);

  const [NameType, setTypeSpare] = useState([]);
  useEffect(() => {
    async function getTypeSpare() {
      const { data } = await api.get('/typespare');
      setTypeSpare(data);
      console.log(data);
    }
    getTypeSpare();
  }, []);


  const [seReason, setReasonSE] = useState([]);
  useEffect(() => {
    async function getReason() {
      const { data } = await api.get('/reasonSE');
      setReasonSE(data);
      console.log(data);
    }
    getReason();
  }, []);

  const [BlockSe, setBlockSe] = useState([])
  useEffect(() => {
    async function getblock() {
      const { data } = await api.get('/block');
      setBlockSe(data);
      console.log(data);
    }
    getblock();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault(); 

    let Aditional = ''

    if(Hour_End < Hour_Start){
      alert('Hora final não pode ser menor que a hora inicial!')

    }else{

      if(Hour_End > '22:00'){
        Aditional = 'Sim'
      }else{
        Aditional = 'Não'
      }

      const SpareData = {
        "Date_Spare": Date_Spare,
        "Semester": Semester,
        "Period": Period,
        "Type_Spare": Type_Spare,
        "Reason": Reason,
        "Block_": Block_,
        "Name_component": Name_component,
        "Hour_Start": Hour_Start,
        "Hour_End": Hour_End,
        "Aditional": Aditional,
        "Name_Teachers": Name_Teachers,
        "Name_Spare": Name_Spare,
        "Number_Spare": dataSpare.Number_Spare,
        "Course": sessionStorage.getItem('Curso'),
      }
  
      await axios.put('http://localhost:3333/spare', SpareData)
      await axios.put('http://localhost:3333/upBack', SpareData)
      alert('Dados alterados com sucesso!')
      window.location.reload(true)
    }
  
  }

  function Cancelar(){
    window.location.reload(true)
  }

  function Outros() {
    const input = document.getElementById('Select1').value;

    if (input == 'Outros') {
      input = document.getElementById('Motivo').style.display = 'inline-block';

    } else {
      input = document.getElementById('Motivo').style.display = 'none';

    }
  }

  function Outros2() {
    const input = document.getElementById('Select2').value;

    if (input == 'Outros') {
      input = document.getElementById('Tipo De Reposição').style.display = 'inline-block';

    } else {
      input = document.getElementById('Tipo De Reposição').style.display = 'none';

    }
  }
  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1 className='Titulo' >Atualizar Dados</h1>
        <div className='row'>
          <form className='col s12'>
     
              <Container className='Center'>
                <label className='Negrito'>Data De Reposição:</label>
                <input placeholder='Data Da Reposição' type='date' className='validate afastainput bordas tamanhosinput' value={Date_Spare} onChange={({target}) => setDateSpare(target.value)}/>

                <label className='afastainput Negrito'>Semestre:</label>
                <select className='validate afastainput bordas tamanhosinput' value={Semester} onChange={({target}) => setSemester(target.value)}>
                  {
                    classes.map((Semester) =>(
                      <option>{Semester.Name_Semester}</option>
                    ))
                  }
                </select>

                <label className='afastainput Negrito'>Período:</label>
                <select className='validate afastainput bordas tamanhosinput' value={Period} onChange={({target}) => setPeriod(target.value)}>
                  {
                    sePeriod.map((periodo) => (
                      <option>{periodo.Name_Period}</option>
                    ))
                  }
                </select>

                <label className='afastainput Negrito'>Componente Curricular:</label>
                <input placeholder='Componente Curricular' type='text' className='validate afastainput bordas CentralizarReposicao' value={Name_component} onChange={({target}) => setComponent(target.value)} />



                <div className='DivAlterar'>
                  <label className='Motivo afastainput Negrito'>Motivo:</label>
                  <select id='Select1' onClick={Outros} className='validate afastainput bordas tamanhosinput' value={Reason} onChange={({target}) => setReason(target.value)}>
                  {
                    seReason.map((motivo) => (
                      <option>{motivo.NameReason}</option>
                    ))
                    }
                  </select>
                 

                <label className='afastainput Negrito'>Tipo De Reposição:</label>
                <select id='Select2' onClick={Outros2}  className='validate afastainput bordas tamanhosinput' value={Type_Spare} onChange={({target}) => setType(target.value)}>
                  {
                    NameType.map((type) => (
                      <option>{type.NameTypeSpare}</option>
                    ))
                  }
                </select>

                <label className='afastainput Negrito'>Bloco:</label>
                  <select className='validate afastainput bordas tamanhosinput' value={Block_} onChange={({target}) => setBlock(target.value)}>
                    {
                    BlockSe.map((bloco) => (
                      <option>{bloco.NameBlock}</option>
                    ))
                    }
                  </select>

                  <div className='reason'>
                    <input type='text' className='Especifique validate afastainput bordas tamanhosinput Motivo2' id='Motivo' placeholder='Especifique' onChange={({target}) => setReason(target.value)}/>
                  </div>

                  <div className='Type'>
                    <input type='text' className='Especifique validate afastainput bordas tamanhosinput' id='Tipo De Reposição' placeholder='Especifique' onChange={({target}) => setType(target.value)}/>
                  </div>

                </div>
            </Container>

                  <Container className='Center cont2'>
                  
                    <label className='afastainput Negrito'>Hora Inicial:</label>
                    <input type='time' className='validate afastainput bordas tamanhosinput' value={Hour_Start} onChange={({target}) => setHourStart(target.value)} />

                  
                    <label className='afastainput Negrito'>Hora Final:</label>
                    <input type='time' className='validate afastainput bordas tamanhosinput' value={Hour_End} onChange={({target}) => setHourEnd(target.value)} />

                    <label className='afastainput Negrito'>Professor Ausente:</label>
                    <input type='text' className='validate afastainput bordas CentralizarReposicao' value={Name_Teachers} onChange={({target}) => setNameTeachers(target.value)} />

                    <label className='afastainput Negrito'>Professor Substituto:</label>
                    <input placeholder='Professor Reposição' id='Name_Spare' type='text' className='validate afastainput bordas CentralizarReposicao' value={Name_Spare} onChange={({target}) => setNameSpare(target.value)}/>
                  </Container>
              <Button className='Cancelar' onClick={Cancelar}>Cancelar</Button>
              <Button className='Botom' onClick={handleSubmit}>Enviar</Button>
          </form>
        </div>
      </Modal>
    </div>

  )
}

export default Index;