import Project from './components/Project';
import Languages from "./components/Languages";
import { useRef } from "react";








function Projects(){
    const mainProjects = {
        "Projects": [
            {
                "name": "FSVR Changing Arena",
                "image": require("./images/vertigo.avif"),
                "gitHub": "https://github.com/ThisisJackRyan/FSVR-Changing-Arena",
                "video": require("./images/Videos/FSVRChangingArena.mp4"),
                "descriptions":["At FlipSwitch VR, we utilize software called Haze to facilitate game hosting and data transmission to other headsets. The objective of this script was to transfer Players and their corresponding machineGuids to the alternate arena.", 'The part I enjoy about this simple but functional script is that it is my first "Real Life" example of how you can optimize your life with code. Although it may seem like a mere 30-second time-saving for the host, this code can be repeatedly executed for years to come.']
            },
            {
                "name": "Instagram Uploading Bot",
                "image": require("./images/instagramUpload.png"),
                "gitHub": "https://github.com/ThisisJackRyan/InstagramUploadBot",
                "video": require("./images/Videos/InstagramBotVideo.mp4"),
                "descriptions":["This coding project written in Python involves uploading pictures to Instagram. The program utilizes Selenium 4.7.2 for handling the login and upload process.", 'The main components of my code are the "login" and "mainPage" functions, implemented using Tkinter. I have designed a simple user interface (UI) to manage multiple Instagram accounts.', "Moving forward, I have several plans for this project. Firstly, I aim to expand its functionality by integrating support for additional social media platforms. Additionally, I intend to incorporate machine learning capabilities, enabling a web scraper to analyze images and determine their suitability for posting based on visual appeal."]
            },
            {
                "name": "Hawklet Express Website",
                "image": require("./images/HawkletExpress.png"),
                "gitHub": "https://github.com/ThisisJackRyan/Hawklet-Express-website",
                "video": null,
                "descriptions":["I created a website for my school's new Breakfast Cafe to facilitate online orders. ","The website is built using Html, JavaScript, and CSS. The Hawklet Express website marked my first significant web project, sparking my interest in web design. I developed it in parallel with my Webpage design class, where I presented it for feedback and improvements. This version represents the final iteration at the end of the semester, and you can view it through my gh-pages on GitHub.","For the design, I utilized the Jupiter Pro font, which is the official font of Rockhurst High School. However, there is a minor issue with the letter 'A' lacking the middle crossbar. To address this, I substituted it with the lowercase alpha 'α'. Please note that this workaround may not be compatible with all devices. Although I would consider changing the font, my teacher suggested that it visually aligns best with Rockhurst's style."]
            },
            {
                "name": "First-Unity-game",
                "image": require("./images/unityVr.webp"),
                "gitHub": "https://github.com/ThisisJackRyan/Hawklet-Express-website",
                "video": require("./images/Videos/VRVideo.mov"),
                "descriptions":["This VR game I created was my first independent project, without following any tutorials. It took me approximately a week to develop. The game revolves around target practice, offering players various guns to shoot at targets of different sizes.","To see game-play footage, simply hover over the image!","The most challenging aspect was determining how to simulate a laser-firing when the player pulls the trigger. However, after investing some time in scripting, I managed to solve it. I created a laser prefab and programmed it to spawn a clone and move forward whenever the trigger is pulled."]
            }
        ]
    }
    const miniProjects = {
        "Projects":[
            {
                "name": "Java",
                "image": require("./images/java.png"),
                "gitHub": "https://github.com/ThisisJackRyan/FSVR-Changing-Arena",
                
            },
            {
                "name": "JavaScript",
                "image": require("./images/JavaScript.png"),
                "gitHub": "https://github.com/ThisisJackRyan/FSVR-Changing-Arena",
                
            },
            {
                "name": "Python",
                "image": require("./images/Python.jpg"),
                "gitHub": "https://github.com/ThisisJackRyan/FSVR-Changing-Arena",
                
            }
        ]
    }


    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return( 
    <div className="container">
        <div>
            <div className=" ProjectTitle " ref={ref} >
                <span>Projects</span>
            </div>
            
                {mainProjects.Projects.map((project) =>(
                    <Project projects={project} />
                ))}
            <div>
                <div className="highlights flex center"> 
                    <span>My Best Languages</span>
                </div>
                <div className="flex break850Project">
                    {
                        miniProjects.Projects.map((project) =>(
                            <div className="x1 Languages">
                                <Languages projects={project} handleClick={handleClick} />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;