import './MenuManager.css';

const MenuManager = ({ menu }) => {
    let count = 0;
    return(
        <div className="list-container">
            {menu.length > 0 &&
                    menu.map((pastry) => (
                        <div className="item-menu" key={pastry.id}>
                            <h3>{++count} . {pastry.sabor}</h3>
                            <h3>preco: <span> {pastry.preco} </span></h3>
                        </div>
                    ))}
        </div>
    )
}

export default MenuManager;