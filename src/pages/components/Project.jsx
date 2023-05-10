import HoverVideoPlayer from 'react-hover-video-player';


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
                    {
                    projects.video !== null ? (
                        
                        <HoverVideoPlayer
                            videoSrc={projects.video}
                            pausedOverlay={
                                <img src={projects.image} alt={projects.name} 
                                style={{
                                    // Make the image expand to cover the video's dimensions
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                />
                            }
                            loadingOverlay={
                                <div className="loading-overlay">
                                <div className="loading-spinner" />
                                </div>
                            }   
                        />
                    ) : <img src={projects.image} alt={projects.name} />
                     }
                        
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