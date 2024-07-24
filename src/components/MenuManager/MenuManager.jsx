import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuManager.css';

const MenuManager = ({ menu }) => {
    let count = 0;

    return(

        <div className="list-container">
            {menu  &&
                    menu.map((pastry) => (
                        <Link key={pastry.id} to={`/pastry?q=${pastry.sabor}`} className='link'>
                            <div className="item-menu" key={pastry.id}>
                                <h3>{++count} . {pastry.sabor}</h3>
                                <h3>preco: <span> {pastry.preco} </span></h3> 
                            </div>
                        </Link>
                    ))}
        </div>
        
        
    )
}

MenuManager.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sabor: PropTypes.string.isRequired,
            preco: PropTypes.number.isRequired
        })
    ).isRequired
};

export default MenuManager;