import '../DoctorList/DoctorList.scss';
import {useState, useEffect} from 'react';
import {baseUrl} from '../../utils/Utils';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
function DoctorList() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const res = await axios.get(`${baseUrl}`);
                setDoctors(res.data);
            } catch (err) {
                console.error('Could not fetch doctor data:' + err);
            }
        };
        fetchDoctorData();
    }, []);
    
    return (
        <section className="list"> 
            <h2 className="list__title">DOCTOR SEARCH RESULTS</h2>
            <div className="list__top-container">
                <NavLink to="/" className="list__link">Back to Search</NavLink>
                <p className="list__hits">2 results</p>
            </div>
            <div className="list__result-container"> 
                {doctors.map((doctor) => (
                <div key={doctor.id} className="list__container">
                    <div className="list__doctor-info">
                        <h3 className="list__name">{doctor.name}</h3>
                        <p className="list__cpso">CPSO#: {doctor.cpso_number}</p>
                    </div>
                    <div className="list__info-container">
                        <div className="list__specialty-info">
                            <h4 className="list__specialty-title">Specialty</h4>
                            <p className="list__specialty">{doctor.specialty}</p>
                        </div>
                        <div className="list__address-details">
                            <h4 className="list__address-title">Practice</h4>
                            <p className="list__hospital">{doctor.practice_name}</p>
                            <p className="list__street">{doctor.address}</p>
                            <a className="list__address">{doctor.city}, {doctor.province}, {doctor.postal_code}</a>
                        </div>
                        <div className="list__contact">
                            <h4 className="list__contact-title">Contact</h4>
                            <p className="list__phone">{doctor.phone_number}</p>
                        </div>
                    </div>
                    <h4 className="list__status">{doctor.status}</h4>
                </div>
                ))} 
            </div>       
        </section>
    );
  }
  
  export default DoctorList;