import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import data from "../data.js";
import onlyPastry from '../assets/img/pastryOnMenu.webp';

import './Pastry.css';

const Pastry = () => {
    const [ pastry, setPastry ] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    useEffect(() => {
        if (query) {
            const foundPastry = data.find(p => p.sabor.toLowerCase() === query.toLowerCase());
            if (foundPastry) {
                setPastry(foundPastry);
                setNotFound(false);
            } else {
                setPastry(null);
                setNotFound(true);
            }
        }
    }, [query]);

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
                </div>
            ) : notFound ? (
                <h2>Pastel não encontrado</h2>
            ) : (
                <h2>Digite um sabor de pastel para pesquisar</h2>
            )}
        </div>
    )
}

export default Pastry;