import '../DoctorList/DoctorList.scss';
import {useEffect} from 'react';
import {baseUrl} from '../../utils/Utils';
import axios from 'axios';

function DoctorList({ setDoctors, filteredDoctors }) {
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
            <div className="list__result-container"> 
                {filteredDoctors.map((doctor) => (
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