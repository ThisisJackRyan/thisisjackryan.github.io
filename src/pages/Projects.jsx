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
                "descriptions":["At FlipSwitch VR we use a software called Haze, which host our games and sends the data out to the other headsets. The goal of this program was to move the Players and their respective machineGuids to the other arena.", 'The part I enjoy about this simple but functional code is that it is my first "Real Life" example of how you can optimize your life with code. While this only saves the host 30 seconds, this is able to run over and over for years to come.']
            },
            {
                "name": "Instagram Uploading Bot",
                "image": require("./images/instagramUpload.png"),
                "gitHub": "https://github.com/ThisisJackRyan/InstagramUploadBot",
                "video": require("./images/Videos/InstagramBotVideo.mp4"),
                "descriptions":["This Program is written in python and uploads picture to instagram. My Instagram Bot uses the selenium 4.7.2 to navigate the login and upload process.", "The majority of my Code is in login and mainPage using Tkinter. Where I have created a basic UI to manage several Instagram accounts.", "My future plan with this is to add more sites to post on. I also want to incorporate machine learning so that a web Scrapper will be able to take an image and decide if it is visually pleasing enough to post."]
            },
            {
                "name": "Hawklet Express Website",
                "image": require("./images/HawkletExpress.png"),
                "gitHub": "https://github.com/ThisisJackRyan/Hawklet-Express-website",
                "video": null,
                "descriptions":["My School is opening a Breakfast Cafe. I decided to make a website for it so that online orders can be taken.","This website is made using Html, JavaScript, and Css. The Hawklet Express website was my first big web project that catapulted me into my interest of web design. I made in congruency with my Webpage design class. I also presented this to my class and each time they would critique and help me make a better version. This was my final version when the semester ended and to view it I have a gh-pages set up on my github. ","I am using the font Jupiter Pro. Which is Rockhurst Highschool Font. The only issue is that the 'A' doesn't have the middle cross bar. I fixed it by using the lower case alpha 'α'. This doesn't always work on all devices for some reason. I would change the font but this is what my teacher said looked best for Rockhurst."]
            },
            {
                "name": "First-Unity-game",
                "image": require("./images/unityVr.webp"),
                "gitHub": "https://github.com/ThisisJackRyan/Hawklet-Express-website",
                "video": require("./images/Videos/VRVideo.mov"),
                "descriptions":["This was my first VR game not following a tutorial. I made this in about a week or so. This game is a target practice game where you are given different Guns to shoot different sized Targets.","Hover over the image to watch a video of me playing it!","The hardest part was trying to figure how to actually fire a laser when you pull the trigger, but with some time and scripting I figure it out. I just made a prefab of a laser and when the trigger is pulled I spawn a clone and tell it to move forward."]
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