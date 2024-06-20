import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import data from "../data.js";

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



    return(
        <div>
            {pastry ? (
                <div>
                    <h2>Pastel de {pastry.sabor}</h2>
                    <h3>somente por R${pastry.preco.toFixed(2)}</h3>
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