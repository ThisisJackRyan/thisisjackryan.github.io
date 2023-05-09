import logo from './pages/images/logo.svg';
import "./index.css";
import {Link} from "react-router-dom"

//<img src={logo} className="" alt="" />

export default function Header(){
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
                <div className="flex nav x2">
                    <div><Link className="link" to="/Projects">Projects</Link></div>
                    <div><Link className="link" to="/GoFundMe">GoFundMe</Link></div>
                    <div><Link className="link" to="/Contact">Contact</Link></div>
                </div>
            </div>
        </div>
    );
}