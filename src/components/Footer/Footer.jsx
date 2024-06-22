import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="contatos">
                <h4>CONTATOS</h4>
                <ul>
                    <li><p><MdEmail /> Email: pastelariaweb@terra.com</p></li>
                    <li><p><IoLogoWhatsapp /> WhatsApp: (11) 9 9555-9090</p></li>
                    <li><p><TiSocialInstagram /> Instagram: pastelaria_web</p></li>
                    <li><p><FaFacebookSquare/> Facebook: pastelaria_web</p></li>
                    <li><p><FaSquareXTwitter /> X: pastelaria_</p></li>
                </ul>
            </div>
            <div className="description">
                <h4>SOBRE NOS</h4>
                <p>somos uma pastelaria familiar e tradicional,
                estamos nesse ramo a muitos anos e fazemos 
                nossos produtos com muito amor, carinho e dedicacao,
                com os mesmos ingredientes que se controi um amor verdadeiro e duradouro.</p>
                <div className="rated">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <p>4.8</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
