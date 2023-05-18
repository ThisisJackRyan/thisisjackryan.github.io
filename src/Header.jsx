import "./index.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

//<img src={logo} className="" alt="" />

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="header">
            <div className="flex">
                <div className="x2 headerPic">
                    <span className='myHeaderLogo'>
                        
                        <span id='Left'>J</span>
                        <span id='Right'>R</span>
                    </span>
                </div>
                <div className="x1 flex headerTitle"><Link className="link" to="/">ThisisJackRyan.com</Link> </div>
                <div className={menuOpen ? "flex nav x2" : "nav nav-smashed"}>
                    <div onClick={toggleMenu}><Link className="link" to="/Projects">Projects</Link></div>
                    <div onClick={toggleMenu}><Link className="link" to="/GoFundMe">GoFundMe</Link></div>
                    <div onClick={toggleMenu}><Link className="link" to="/Contact">Contact</Link></div>
                </div>
                <div className="x2 go"></div>
                <div className="hamburger x2">
                    {menuOpen ? <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/> : <FontAwesomeIcon icon={faXmark} onClick={toggleMenu}/>}
                       
                    
                </div>
                    
            </div>
        </div>
    );
}