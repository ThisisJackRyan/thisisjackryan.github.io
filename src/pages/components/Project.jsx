import { useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';



const Project = ({projects}) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className="projectSection">
                <div className="flex">
                    <div className="x2 TitleOfProject LinkToGit">
                        <a href={projects.gitHub} target="_blank" rel="noreferrer">{projects.name}</a>
                    </div>
                    <div className="x3 break1200Projectx3"></div>
                </div>
                <div className="flex  break1200Project">
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
                    
                    <div className={isActive ? 'ReadMore ON' : 'ReadMore'} onClick={toggleClass}>
                        <div>
                            <span>{projects.descriptions[0]}</span>
                            <br />
                            <br />
                            <div className='LinkToGit'>
                                <span className="pleaseReadMore">Tap to read more...</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className={isActive ? 'ReadMe ReadMeOn x3 flex center middle' : 'ReadMe x3 flex center middle'}>
                        <div >
                            
                                {

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
                            <div className={isActive ? 'close flex center middle ' : "ON"}>
                                <br />
                                <br />
                                <br />
                                <span  onClick={toggleClass}>close...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="borderBottomProject"></div>    
            </div>
    )
}

export default Project;