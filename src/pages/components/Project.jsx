


const Project = ({projects}) => {
    return (
        <div>
                <div className="flex">
                    <div className="x2">
                        <div className="flex center TitleOfProject LinkToGit">
                            <a href="https://github.com/ThisisJackRyan/FSVR-Changing-Arena" target="_blank" rel="noreferrer">{projects.name}</a>
                        </div>
                        
                    </div>
                    <div className="x3"></div>
                </div>
                <div className="flex">
                    <div className="x2">
                        <img src={projects.image} alt="" />
                    </div>
                    <div className="ReadMe x3 flex center middle">
                        <div>
                            <span>At FlipSwitch VR we use a software called Haze, which host our games and sends the data out to the other headsets. The goal of this program was to move the Players and their repsective machineGuids to the other arena.</span>
                            <br />
                            <br />
                            <span>The part I enjoy about this simple but functional code is that it is my first "Real Life" example of how you can optimize your life with code. While this only saves the host 30 seconds, this is able to run over and over for years to come.</span>
                            <br />
                            <br />
                            <div className="LinkToGit">
                                <a href={projects.gitHub} target="_blank" rel="noreferrer">
                                    <span>To learn more click the link to my github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Project;