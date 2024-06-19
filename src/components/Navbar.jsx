import { useState } from "react";
import { Link } from "react-router-dom";

import { SiIfood } from "react-icons/si";
import { BiSearchAlt2 } from "react-icons/bi";

import './Navbar.css';


const Navbar = () => {
    const [pastry, setPastry] = useState('');

    function handleSubmit(){

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
                onChange={(e) => setPastry(e.target.value)}
                value={pastry}
            />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>

        </nav>
    )
}

export default Navbar;