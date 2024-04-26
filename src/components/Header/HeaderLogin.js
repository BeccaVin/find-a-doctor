import '../Header/Header.scss';
import logo from '../../assets/Logo/OntarioGovLogo.png';
import { NavLink } from 'react-router-dom';

function HeaderLogin() {
    return (
      <section className="top">       
        <NavLink to="/" className="top__title">
            <img 
                className="top__title-img"
                src={logo}/>
            <h1 className="top__title-text">FIND A DOCTOR</h1>
        </NavLink>
        
        <div className="top__login--container">
            <NavLink to="/" className="top__text">
                <button className="top__button">Doctor Search</button>
            </NavLink>      
        </div>
      </section>
    );
  }
  
  export default HeaderLogin;