import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import '../Search/Search.scss';
import PlacesAutocomplete from './PlacesAutocomplete';
import {DirectionsService} from '@react-google-maps/api';

export default function Search({doctors}) {

    const navigate = useNavigate();
    const [input, setInput] = useState(null);

    const [distance, setDistance] = useState('');
    const [directionsResponse, setDirectionsResponse] = useState('');

    const originRef = input;
    const destinationRef = {lat: doctors.latitude, lng: doctors.longitide}

    async function calculateRoute() {
        const directionsService = new DirectionsService();

        const results = await directionsService.route({
            origin: originRef,
            destination: destinationRef,
            travelMode: "DRIVING",
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/DoctorsList", { state: { input } });
    }
    return (
        <section className="search">
            <h2 className="search__text">Every Ontarian should have access to a family doctor. We're here to make the search a little easier.</h2>
        <form className="search__form">
            <h2 className="search__form-title">DOCTOR SEARCH</h2>
            <div className="search__form-container">
                <PlacesAutocomplete setInput={setInput} />
                <div className="search__form-radio-div">
                    <input 
                        type="radio"
                        className="search__form-radio"
                    />
                    <label className="search__form-label">Accepting new patients</label>
                </div>
                <button type="submit" className="search__form-button" onClick={handleSubmit}>Search</button>
            </div>
        </form>
        </section>
    );
}
