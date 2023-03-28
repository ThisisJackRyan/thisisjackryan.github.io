import React from 'react';
import backgroundImage from './images/Cube.jpg';
import style from "./Projects.module.css";



function Projects(){
    return(
    <div>
        <div>
            <style>
                {`
                    body {
                        background-image: url(${backgroundImage});
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                `}
            </style>
        </div>
        <div>
            best project!
        </div>
    </div>
    );
}

export default Projects;