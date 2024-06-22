import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { FaShoppingCart } from "react-icons/fa";

import Order from '../../components/Order/Order.jsx';

import data from "../../data.js";
import onlyPastry from '../../assets/img/pastryOnMenu.webp';

import './Pastry.css';

const Pastry = () => {
    const [ pastry, setPastry ] = useState(null);
    const [ isOpenOrder, setIsOpenOrder ] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    useEffect(() => {
        if (query) {
            const foundPastry = data.find(p => p.sabor.toLowerCase() === query.toLowerCase());
            if (foundPastry) {
                setPastry(foundPastry);
            } else {
                setPastry(null);
            }
        }
    }, [query]);

    function sale(number){
        const output = (number + 2).toFixed(2);
        return output;
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setIsOpenOrder(open);
      };


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
                    {isOpenOrder && <Order isOpen={isOpenOrder} toggleDrawer={toggleDrawer(true)}/>}
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