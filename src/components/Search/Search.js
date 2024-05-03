import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Search/Search.scss';
import PlacesAutocomplete from './PlacesAutocomplete';
// import { DirectionsService } from '@react-google-maps/api';

export default function Search({doctors}) {
        const navigate = useNavigate();
    const [input, setInput] = useState(null);
    const [distances, setDistances] = useState([]);
    const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);

    useEffect(() => {
        async function calculateDistances() {
            if (!input) return;

            const destinationRefs = doctors.map(doctor => ({ lat: doctor.latitude, lng: doctor.longitude }));

            const service = new window.google.maps.DirectionsService();

            const distancePromises = destinationRefs.map(async (destinationRef) => {
                const request = {
                    origin: input,
                    destination: destinationRef,
                    travelMode: 'DRIVING',
                };
                const response = await new Promise(resolve => service.route(request, (res, status) => resolve({ res, status })));
                if (response.status === 'OK') {
                    return response.res.routes[0].legs[0].distance.text;
                } else {
                    return 'Distance calculation error';
                }
            });

            const distances = await Promise.all(distancePromises);
            setDistances(distances);
        }

        calculateDistances();
    }, [input, doctors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/DoctorsList", { state: { input, distances, acceptingNewPatients } });
    };

    return (
        <section className="search">
            <h2 className="search__text">Every Ontarian should have access to a family doctor. We're here to make the search a little easier.</h2>
            <form className="search__form" onSubmit={handleSubmit}>
                <h2 className="search__form-title">DOCTOR SEARCH</h2>
                <div className="search__form-container">
                    <PlacesAutocomplete setInput={setInput} />
                    <div className="search__form-radio-div">
                        <input 
                            type="checkbox"
                            className="search__form-radio"
                            checked={acceptingNewPatients}
                            onChange={(e) => setAcceptingNewPatients(e.target.checked)}
                        />
                        <label className="search__form-label">Accepting new patients</label>
                    </div>
                    <button type="submit" className="search__form-button">Search</button>
                </div>
            </form>
        </section>
    );
}