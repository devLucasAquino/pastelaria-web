import { Link } from 'react-router-dom';

import Pastel from '../assets/img/brasileiro-pastel.webp';

import './Home.css';

const Home = () => {
    return(
        <div className='home'> 
            <header>
                <section>
                    <h2>Bem vindo ao website da melhor <br></br>pastelaria do Brasil, <br></br> 
                        fique a vontade para explorar <br></br>nosso cardapio com incriveis 
                        sabores e otimos precos!
                    </h2>
                    <Link to='/menu'>
                        <button type='button'>Explorar</button>
                    </Link>
                </section>
                <img src={Pastel} alt="pastel" />
            </header>       
            
        </div>

    )
}

export default Home;