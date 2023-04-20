
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




/*
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}*/