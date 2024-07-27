import { BiUser,  } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import "./Register.css";

const Register = () => {
    return(
        <div className="user-modal-container">
            <div id="header-modal">
                <h3>Faça seu login</h3>
                <button>
                    <IoClose />
                </button>
            </div>
            <form>
                <label>Nome</label>
                <div>
                    <BiUser />
                    <input type="text" />
                </div>
                <label>E-mail</label>
                <div>
                    <MdEmail />
                    <input type="email" />
                </div>
            </form>
        </div>
    )
}

export default Register;