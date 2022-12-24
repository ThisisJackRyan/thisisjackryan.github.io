import logo from './logo.svg';
import "./index.css";
import "./Header.css";


export default function Header(){
    return (
        <div className="header">
            <div className="flex">
                <div className="x2">
                    <img src={logo} className="" alt="" />
                </div>
                <div className="x1 flex headerTitle">ThisisJackRyan.com</div>
                <div className="flex nav x2">
                    <div>Page 1</div>
                    <div>Page 2</div>
                    <div>Page 3</div>
                </div>
            </div>
        </div>
    )
}