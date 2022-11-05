import React, {useState, Modal} from 'react'                                         
import axios from 'axios';

const customStyles = {
  content:{
    top: '50%',
    left: '50%',
    RIGHT: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

function Index({isOpen}) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [] = useState();
  
  function closeModal() {
    setIsOpen(false);
  }
  
  async function handleSubmit(e){
    e.preventDefault(); //Evita que o formulario envie o dado e recarregue a pagina.

      console.log()

      const {data} = await axios.put('http://localhost:3333');
      alert(data.message);
      window.location.reload(true);
  }
  
  return (
  <div>
  <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
  >
   <h1>Olá, há alguma reposição a ser feita?</h1>
    <div className='row'>
      <form className='col s12'>
        <div className='row'>
          <div className='input-field col s12'>
            <input
            placeholder=''
            id=''
            type='text'
            className='input'
          />
          </div>
          </div>
         
    <button
      className='btn waves-effect wave-light'
      type='submit'
      name='action'
      onClick={handleSubmit}
      >Sim</button>
      <button
        className='btn modal-trigger'
        onClick={() => {window.location.reload(true)}}
        >Não</button> // Atualizar a pagina
        </form>
        </div>
        </Modal>
        </div>
    
  )
}

export default Index;