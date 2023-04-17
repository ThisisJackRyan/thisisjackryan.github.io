import backgroundImage from './images/Cube.jpg';

const Contact = () => {
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
        <div className="example">Contact</div>
       
    </div>
    );
}

export default Contact;