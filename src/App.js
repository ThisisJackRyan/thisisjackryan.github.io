import logo from './logo.svg';
import './App.css';


export default function App() {
  return (
    <div>
      <div className="flex">
        <div className="x2">{/* this will be my name followed by a brief description of me using the "aspiring software developer" */}
          <div className="nameTitle flex"><span> Jack Ryan</span></div>{/* I think big blocky-text or squared-text would look great  so far -- Orbitron,  Russo One, Teko, Bebas Neue look great for Jack Ryan on google fonts */}
          <div className="quickDescription">
            Hello My name is jack Ryan and I am an aspiring Software developer
            I love camping, rock-climbing, and Coding.
            I am 18 and am headed to K-state to Major in Computer Science 
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
          </div>
        </div>
        <div className="x2">
          <img src="" alt="" />{/* this could be a senior pick of me leaning up against a right wall*/}
        </div>
      </div>
    </div>
  );
}
