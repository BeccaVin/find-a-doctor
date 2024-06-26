import '../Header/Header.scss';
import logo from '../../assets/Logo/OntarioGovLogo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <section className="top">       
        <NavLink to="/" className="top__title">
            <img 
                className="top__title-img"
                src={logo}/>
            <h1 className="top__title-text">FIND A DOCTOR</h1>
        </NavLink>
        
        <div className="top__container">
            <button className="top__button">I'm a doctor</button>
            <div className="top__container-text">
                <NavLink to="/Login" className="top__login">
                  Login
                </NavLink>
                <NavLink to="/Register" className="top__register">
                  Register
                </NavLink>
            </div>
        </div>
      </section>
    );
  }
  
  export default Header;