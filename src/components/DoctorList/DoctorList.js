import '../DoctorList/DoctorList.scss';
import {NavLink} from 'react-router-dom';

function DoctorList() {
    return (
      <section className="list"> 
         <h2 className="list__title">DOCTOR SEARCH RESULTS</h2>
         <div className="list__top-container">
            <NavLink to="/" className="list__link">Back to Search</NavLink>
            <p className="list__hits">2 results</p>
         </div>
         <div className="list__result-container">
            <div className="list__doctor-info">
                <h3 className="list__name">Sheila Mary Brereton</h3>
                <p className="list__cpso">CPSO#: 55999</p>
            </div>
            <div className="list__info-container">
                <div className="list__specialty-info">
                    <h4 className="list__specialty-title">Specialty</h4>
                    <p className="list__specialty">General and Family Practice</p>
                </div>
                <div className="list__address-details">
                    <h4 className="list__address-title">Practice</h4>
                    <p className="list__hospital">Credit Valley</p>
                    <p className="list__street">2300 Eglinton Avenue West Suite 205</p>
                    <a className="list__address">Mississauga, ON, L5N 2V8</a>
                </div>
                <div className="list__contact">
                    <h4 className="list__contact-title">Contact</h4>
                    <p className="list__phone">(905)820-8144</p>
                </div>
            </div>
            <h4 className="list__status">Accepting New Patients</h4>
         </div>

        
      </section>
    );
  }
  
  export default DoctorList;