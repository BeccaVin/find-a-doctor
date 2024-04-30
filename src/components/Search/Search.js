import '../Search/Search.scss';
import {useNavigate} from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';

function Search({ isLoaded, setAddressInput }) {
    const [autocompletedAddress, setAutocompletedAddress] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setAutocompletedAddress(e.target.value);
    };
    
    const handleAutocomplete = (place) => {
        setAutocompletedAddress(place.formatted_address);
        setAddressInput({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });

        console.log(setAddressInput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/DoctorsList", { state: { autocompletedAddress } });
    }

    return (
        <section className="search">
            <h2 className="search__text">Every Ontarian should have access to a family doctor. We're here to make the search a little easier.</h2>
        <form className="search__form">
            <h2 className="search__form-title">DOCTOR SEARCH</h2>
            <div className="search__form-container">
               { isLoaded ? ( 
                <Autocomplete onChange={handleAutocomplete}>
                    <input 
                        className="search__form-input" 
                        placeholder="Enter address here"
                        onChange={handleInputChange}
                    />
                </Autocomplete>
                ) : (
                    <input 
                        className="search__form-input"
                        placeholder="Loading Autocomplete"
                        disabled
                    />
                )}
            <div className="search__form-radio-div">
                    <input 
                        type="radio"
                        className="search__form-radio"
                    />
                    <label className="search__form-label">Accepting new patients</label>
            </div>
                {/* <NavLink to="/DoctorsList"> */}
                    <button type="submit" className="search__form-button" onClick={handleSubmit}>Search</button>
                {/* </NavLink> */}
            </div>
        </form>
        </section>
    );
  }
  
  export default Search;