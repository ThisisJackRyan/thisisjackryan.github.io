import PictureOfJack from "./images/PictureOfJackRyan.jpg"
import React from "react"




export default function Home(){
    return(
    <div>
      <div className="flex article">
        <div className="x2 ">{/* this will be my name followed by a brief description of me using the "aspiring software developer" */}
          <div className="nameTitle flex"><span> Jack Ryan</span></div>{/* I think big blocky-text or squared-text would look great  so far -- Orbitron,  Russo One, Teko, Bebas Neue look great for Jack Ryan on google fonts */}
          <div className="quickDescription">
            Hello My name is Jack Ryan and I am an aspiring Software developer
            I love camping, rock-climbing, and Coding.
            I am 18 and am headed to K-state to Major in Computer Science.
            I Currently work at a vr shop in downtown kansas City
          </div>
        </div>
        <div className="x2 homePicture">
          <img src={PictureOfJack} alt="" />{/* this could be a senior pick of me leaning up against a right wall*/}
        </div>
      </div>
    </div>
    );
}

