import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AnexoIV from './Pages/AnexoIV';
import Controlereposicao from './Pages/Controlereposicao'
import Quadroreposicao from './Pages/Quadroreposicao'
import Planoreposicao from './Pages/Planoreposicao'
import Main from './Pages/Main';
import Cadastro from './Pages/Cadastro'
import Botao from './Component/Botao';
import Login from './Pages/Login';
import ProtectRouter from './ProtectRouter'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<ProtectRouter/>}>
      <Route path= '/Main' element={<Main/>} /> 
      <Route path= '/Botao' element={<Botao/>} /> 
      <Route path= '/AnexoIV' element={<AnexoIV/>}/>
      <Route path= '/Controlereposicao' element={<Controlereposicao/>}/>
      <Route path= '/Quadroreposicao' element={<Quadroreposicao/>}/>
      <Route path= '/Planoreposicao' element={<Planoreposicao/>}/>
      </Route>
      <Route path= '/' element={<Login/>} /> 
      <Route path= '/Cadastro' element={<Cadastro/>} /> 
      </Routes>

    </BrowserRouter>


  
    
  );
}

export default App;
