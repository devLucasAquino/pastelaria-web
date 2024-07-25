import { Outlet } from 'react-router'
import { useState } from "react";

import UserModal from "../src/components/UserModal/UserModal.jsx";

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css'

function App() {

  const [ userModalOpen, setUserModalOpen ] = useState(false);

  

  return (
    <div className="App">
      <Navbar setUserModalOpen={setUserModalOpen} />
      <Outlet />
      <Footer />
      {userModalOpen && < UserModal />}
    </div>
  )
}

export default App
