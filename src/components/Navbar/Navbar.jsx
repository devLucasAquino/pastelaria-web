import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import { SiIfood } from "react-icons/si";
import { BiSearchAlt2, BiUser } from "react-icons/bi";


import './Navbar.css';


const Navbar = ({ setUserModalOpen }) => {
    const [pastryName, setPastryName] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!pastryName) return;

        navigate(`/pastry?q=${pastryName}`);
        setPastryName('');
    }

    function openUserModal(){
        setUserModalOpen(true);
    }
    

    return(
        <nav className="navbar">
            <h2 id="logotipo">
                <Link to='/'>
                    <SiIfood /> WebPastelaria 
                </Link>
            </h2>
            <h2>
                <Link to='/menu'>
                    Menu
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
            <input  
                type="text" 
                placeholder="Search an Pastry" 
                onChange={(e) => setPastryName(e.target.value)}
                value={pastryName}
            />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
            <button onClick={openUserModal} id="user">
                <BiUser />
            </button>
            </form>

            
        </nav>
    )
}
export default Navbar;