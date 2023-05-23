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
          Hello, my name is Jack Ryan, and I am an aspiring Software Developer.
          When I'm not busy coding, you can find me outdoors, camping, and rock-climbing. 
          I'm 18 and am majoring in Computer Science at K-state. 
          I currently work at a VR shop in the heart of downtown Kansas City.
          It's been a blast combining my passion for technology with real-world experiences.
            
          </div>
        </div>
        <div className="x2 homePicture cut850">
          <img src={PictureOfJack} alt="" />
        </div>
      </div>
    </div>
    );
}

