import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Pastry from './pages/Pastry.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='pastry' element={<Pastry />}/>
          <Route path='menu' element={<Menu />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
