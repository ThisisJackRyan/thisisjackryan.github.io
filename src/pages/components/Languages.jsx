
const Languages = ({projects}) => {
    return (
        <div className="Language">
            <a href={projects.gitHub} target="_blank" rel="noreferrer">
                <div>
                    <div className="LanguageImage">
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

export default Languages;