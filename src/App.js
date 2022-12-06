import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AnexoIV from './Pages/AnexoIV';
import Controlereposicao from './Pages/Controlereposicao'
import Quadroreposicao from './Pages/Quadroreposicao'
import Planoreposicao from './Pages/Planoreposicao'
import Cadastro from './Pages/Cadastro'
import Botao from './Component/Botao';
import Login from './Pages/Login';
import ProtectRouter from './ProtectRouter'
import Confirmacao from './Pages/Confirm';
import CadastroCurso from './Pages/CadastroCurso';
import DeleteConta from './Pages/DeleteConta';
import Historico from './Pages/Historico'
import Senha from './Pages/Senha'
import Perfil from './Pages/Perfil'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route element={<ProtectRouter />} > 
            <Route path='/Botao' element={<Botao />} />
            <Route path='/AnexoIV' element={<AnexoIV />} />
            <Route path='/Controlereposicao' element={<Controlereposicao />} />
            <Route path='/Quadroreposicao' element={<Quadroreposicao />} />
            <Route path='/Planoreposicao' element={<Planoreposicao />} />
            <Route path='/Confirmacao' element={<Confirmacao />} />
            <Route path='/CadastroCurso' element={<CadastroCurso />} />
            <Route path='/DeleteConta' element={<DeleteConta />} />
            <Route path='/Historico' element={<Historico />} />
            <Route path='/Perfil' element={<Perfil />} />
          </Route>
        </Route>
        <Route path='/Senha' element={<Senha />} />
        <Route path='/' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
      </Routes>

    </BrowserRouter>




  );
}

export default App;
