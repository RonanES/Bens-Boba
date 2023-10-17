import photo from './benny.jpg';
const About = () => {
    return ( 
        <div className="about">
            <div className='ben'>
            <img src={photo} alt="benny"/>
            </div>
            <div className="mission">
            <p>we here at Ben's Boba are all about serving you boba that is never 'ruff ruff'!</p>
        </div>
        <div className="history">
            Ben's Boba was never opened, has 0 locations around the world and as of 2023 we have never served
            a single customer.
        </div>
        </div>
            
     );
}
 
export default About ;