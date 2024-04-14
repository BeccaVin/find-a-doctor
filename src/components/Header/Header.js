import '../Header/Header.scss';
import logo from '../../assets/Logo/OntarioGovLogo.png';

function Header() {
    return (
      <section className="top">    
        <div className="top__title">
            <img 
                className="top__title-img"
                src={logo}/>
            <h1 className="top__title-text">FIND A DOCTOR</h1>
        </div>
        <div className="top__container">
            <button className="top__button">I'm a doctor</button>
            <div className="top__container-text">
                <a className="top__login">Login</a>
                <a className="top__register">Register</a>
            </div>
        </div>
      </section>
    );
  }
  
  export default Header;