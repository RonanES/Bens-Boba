import logo from './Boba_Ben.png';


const Home = () => {
    return (  
        <div className="home">
            <div className="mainlogo">
                <img src={logo} alt="benny"/>
            </div>
          
            <h1>Welcome to Ben's Boba!</h1>
            <div> 
            <a href="/menu"> Menu</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact us</a></div>
        </div>
    );
}
 
export default Home;