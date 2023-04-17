
const MiniProject = ({projects}) => {
    return (
        <div className="miniProject">
            <a href={projects.gitHub} target="_blank" rel="noreferrer">
                <div>
                    <div className="miniProjectsImage">
                        <img src={projects.image} alt={projects.name} />
                    </div>
                </div>
                <div>
                    <span>{projects.name}</span>
                </div>
            </a>
        </div>
    )
}

export default MiniProject;