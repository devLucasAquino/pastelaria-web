import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { FaShoppingCart } from "react-icons/fa";

import { api } from '../../lib/axios.js';
import onlyPastry from '../../assets/img/pastryOnMenu.webp';

import './Pastry.css';

const Pastry = () => {
    const [ pastry, setPastry ] = useState(null);

    const [ menu, setMenu ] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    useEffect(() => {
        api.get(`/pasteis`).then(response => {
            setMenu(response.data)
        })
    }, [])

    useEffect(() => {
        if (query && menu.length > 0) {
            const foundPastry = menu.find(p => p.sabor.toLowerCase() === query.toLowerCase());
            if (foundPastry) {
                setPastry(foundPastry);
            } else {
                setPastry(null);
            }
        }
    }, [query, menu]);

    function sale(number){
        const output = (number + 2).toFixed(2);
        return output;
    }

    return(
        <div className='only-pastry-container'>
            {pastry ? (
                <div className='found-pastry'>
                    <img src={onlyPastry} alt='pastel'/>
                    <div className='found-pastry-data'>
                        <h2>Pastel de {pastry.sabor}</h2>
                        <h3>de  <span id='original-value'>R${sale(pastry.preco)}  </span> 
                            por apenas <span id='value-desconto'>R${pastry.preco.toFixed(2)}</span></h3>
                    </div>
                    <button >
                        <FaShoppingCart />    
                    </button>
                </div>
            ) : (
                <div className='not-found-container'>
                    <h2>PASTEL COM SABOR: <span>{query}</span> <br></br>NAO ESTA INCLUSO NO CARDAPIO</h2>
                </div>               
            )}
        </div>
    )
}

export default Pastry;