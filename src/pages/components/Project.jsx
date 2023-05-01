

const Project = ({projects}) => {
    return (
        <div className="projectSection">
                <div className="flex">
                    <div className="x2">
                        <div className="flex center TitleOfProject LinkToGit">
                            <a href={projects.gitHub} target="_blank" rel="noreferrer">{projects.name}</a>
                        </div>
                        
                    </div>
                    <div className="x3 break850Projectx3"></div>
                </div>
                <div className="flex  break850Project">
                    <div className="x2 projectImage">
                        <img src={projects.image} alt={projects.name} />
                    </div>
                    <div className="ReadMe x3 flex center middle">
                        <div >
                            
                                {
                                //console.log(projects.descriptions)

                                projects.descriptions.map((line) => (
                                    <>
                                        <span>{line}</span>
                                        <br />
                                        <br />
                                    </>

                                ))}
                                
                            <div className="LinkToGit">
                                <a href={projects.gitHub} target="_blank" rel="noreferrer">
                                    <span>To learn more click the link to my github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="borderBottomProject"></div>    
            </div>
    )
}

export default Project;