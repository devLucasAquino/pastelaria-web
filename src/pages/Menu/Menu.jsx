import { useState, useEffect } from 'react';

import MenuManager from '../../components/MenuManager.jsx';
import data from '../../data.js';

import './Menu.css';

const Menu = () => {

    const [ menu, setMenu ] = useState([]);

    function getData(){
        const pastryList = data;
        console.log(pastryList);
        return pastryList;
    }

    useEffect(() => {
        setMenu(getData());
    }, []);


    return(
        <div className='menu'>
            <h1>CARDAPIO</h1>
            <MenuManager menu={menu}/>
        </div>
    )
}

export default Menu;