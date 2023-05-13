import PictureOfJack from "./images/PictureOfJackRyan.jpg"
import React from "react"




export default function Home(){
    return(
    <div className="container">
      <div className="flex article">
        <div className="x2 ">{/* this will be my name followed by a brief description of me using the "aspiring software developer" */}
          <div className="nameTitle flex"><span> Jack Ryan</span></div>{/* I think big blocky-text or squared-text would look great  so far -- Orbitron,  Russo One, Teko, Bebas Neue look great for Jack Ryan on google fonts */}
          <div className="quickDescription">
          Hello, my name is Jack Ryan, and I am an aspiring Software Developer.
          When I'm not busy coding, you can find me outdoors, camping, and rock-climbing. 
          I'm 18 and am majoring in Computer Science at K-state. 
          I currently work at a VR shop in the heart of downtown Kansas City.
          It's been a blast combining my passion for technology with real-world experiences.
            
          </div>
        </div>
        <div className="x2 homePicture">
          <img src={PictureOfJack} alt="" />{/* this could be a senior pick of me leaning up against a right wall*/}
        </div>
      </div>
    </div>
    );
}

