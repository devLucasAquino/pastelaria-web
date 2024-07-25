import { useState, useEffect } from 'react';
import { api } from "../../lib/axios.js";

import MenuManager from '../../components/MenuManager/MenuManager.jsx';

import './Menu.css';

const Menu = () => {
    
    const [ menu, setMenu ] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        api.get(`/pasteis`).then(response => {
            setMenu(response.data)
        })    
    }, []);


    return(
        <div className='menu'>
            <h1>CARDAPIO</h1>
            <MenuManager menu={menu}/>
        </div>
    )
}

export default Menu;