
import backgroundImage from './images/Cube.jpg';
//import vertigoImage from "./images/vertigo.avif"
import Project from './components/Project';






function Projects(){
    const mainProjects = {
        "Projects": [
            {
                "name": "FSVR Changing Arena",
                "image": require("./images/vertigo.avif"),
                "gitHub": "https://github.com/ThisisJackRyan/FSVR-Changing-Arena",
                "video": null,
                "descriptions":["At FlipSwitch VR we use a software called Haze, which host our games and sends the data out to the other headsets. The goal of this program was to move the Players and their respective machineGuids to the other arena.", 'The part I enjoy about this simple but functional code is that it is my first "Real Life" example of how you can optimize your life with code. While this only saves the host 30 seconds, this is able to run over and over for years to come.']
            },
            {
                "name": " Instagram Uploading Bot",
                "image": require("./images/instagramUpload.png"),
                "gitHub": "https://github.com/ThisisJackRyan/InstagramUploadBot",
                "video": null,
                "descriptions":["This Program is written in python and uploads picture to instagram. My Instagram Bot uses the selenium 4.7.2 to navigate the login and upload process.", "The majority of my Code is in login and mainPage using Tkinter. Where I have created a basic UI to manage several Instagram accounts.", "My future plan with this is to add more sites to post on. I also want to incorporate machine learning so that a web Scrapper will be able to take an image and decide if it is visually pleasing enough to post."]
            }
        ]
    }
    
    //const obj = JSON.parse(mainProjects);
    //const [project, setProject] = useState([]);
    
    //setProject(mainProjects.Projects);

   console.log(mainProjects);
    return( 
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
        <div className="PaddingShovePastHeader">
            
                {mainProjects.Projects.map((project) =>(
                    <Project projects={project} />
                ))}
                
                
            
        </div>
    </div>
    );
}

export default Projects;