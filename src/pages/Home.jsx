import PictureOfJack from "./images/PictureOfJackRyan.jpg"
import React from "react"




export default function Home(){
    return(
    <div className="container">
      <div className="flex article">
        <div className="x2 info">
          <div className="nameTitle flex">
            <span> 
              <span className="Jack">Jack</span> 
              <span className="Ryan">Ryan</span>  
            </span>
            <div className="x2 homePicture add850">
              <img src={PictureOfJack} alt="" />
            </div>
          </div>
          <div className="quickDescription">
          Hello, my name is Jack Ryan, and I am an aspiring Software Engineer.
          When I'm not busy coding, you can find me outdoors, camping, and rock-climbing. 
          I'm 19 and am majoring in Computer Science at K-state. 
          Currently I am working at Canopy, the public benefit Company as a Student Software Engineer. 
          This opportunity has been great to finally get some hands-on experience, and really enhance my skills as a Software Engineer. 
            
          </div>
        </div>
        <div className="x2 homePicture cut850">
          <img src={PictureOfJack} alt="" />
        </div>
      </div>
    </div>
    );
}

