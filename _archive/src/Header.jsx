import "./index.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


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
                    <div className="big" onClick={menuOpen ? null : toggleMenu}><Link className="link" to="/">Home</Link></div>
                    <div onClick={menuOpen ? null : toggleMenu}><Link className="link" to="/Projects">Projects</Link></div>
                    <div onClick={menuOpen ? null : toggleMenu}><Link className="link" to="/GoFundMe">GoFundMe</Link></div>
                    <div onClick={menuOpen ? null : toggleMenu}><Link className="link" to="/Contact">Contact</Link></div>
                </div>
                <div className="go x2"></div>
                <div className="hamburger" >
                    {menuOpen ? <FontAwesomeIcon icon={faBars} onClick={toggleMenu} /> : <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} />}
                </div>
                    
            </div>
        </div>
    );
}